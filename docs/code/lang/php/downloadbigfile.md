# 下载大文件


### 传入url和保存路径，下载大文件
```php
public function downloadVideo($url, $savePath, $headers = [], $timeout = 600)
{
    $fp = fopen($savePath, 'cb');
    if (!$fp) {
        throw new \RuntimeException("无法创建本地文件: {$savePath}");
    }

    // 断点续传：已存在则追加
    $offset = filesize($savePath);
    if ($offset > 0) {
        fseek($fp, $offset);
    }

        $ch = curl_init($url);
        curl_setopt_array($ch, [
        CURLOPT_FILE         => $fp,               // 直接写入文件句柄
        CURLOPT_FOLLOWLOCATION => true,            // 跟随 3xx
        CURLOPT_TIMEOUT      => $timeout,          // 整体超时
        CURLOPT_CONNECTTIMEOUT => 60,              // 连接超时
        CURLOPT_USERAGENT    => 'Mozilla/5.0 (compatible; Downloader/1.0)',
        CURLOPT_SSL_VERIFYPEER  => false,           // 仅用于测试/内网：跳过对等证书验证
        CURLOPT_SSL_VERIFYHOST  => false,           // 仅用于测试/内网：跳过主机名校验
        //CURLOPT_SSL_VERIFYPEER => true,            // 生产环境建议开启
        //CURLOPT_SSL_VERIFYHOST => 2,               // 生产环境建议开启
        CURLOPT_FAILONERROR  => true,              // 4xx/5xx 直接失败
        CURLOPT_HTTPHEADER   => $headers,          // 如 Referer/Cookie
        CURLOPT_NOPROGRESS   => false,
        CURLOPT_PROGRESSFUNCTION => function ($ch, $dlTotal, $dlNow, $ulTotal, $ulNow) use ($offset) {
            // 首次回调时发送 Range 头（仅当存在本地残片时）
            static $sentRange = false;
            if (!$sentRange && $offset > 0 && $dlNow > 0) {
                $from = $offset + $dlNow;
                $to   = $offset + ($dlTotal ?? PHP_INT_MAX) - 1;
                curl_setopt($ch, CURLOPT_RANGE, "{$from}-{$to}");
                $sentRange = true;
            }
            return 0;
        },
    ]);

    if (curl_exec($ch) === false) {
        fclose($fp);
        @unlink($savePath); // 失败清理残片
        $err = curl_error($ch);
        curl_close($ch);
        throw new \RuntimeException("cURL 错误: {$err}");
    }

    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $contentType = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);
    $effectiveUrl = curl_getinfo($ch, CURLINFO_EFFECTIVE_URL);
    curl_close($ch);
    fclose($fp);

    // 若是 206 部分内容，或首次完整下载成功
    if (($httpCode >= 200 && $httpCode < 300) || $httpCode === 206) {
        clearstatcache(true, $savePath);
        $finalSize = filesize($savePath);
        echo "完成：{$finalSize} 字节 已保存至：{$savePath} 来源：{$effectiveUrl}\n";
    } else {
        @unlink($savePath); // 兜底清理
        throw new \RuntimeException("下载失败，HTTP 状态码: {$httpCode}，类型: {$contentType}");
    }
}
```