
# 图片画质修复

## Real-ESRGAN
### 需要安装的库
```bash
apt install ffmpeg
```

### 报错信息：
#### ImportError: libGL.so.1: cannot open shared object file: No such file or directory

解决方案：
```bash
# ubuntu
sudo apt update
sudo apt install libgl1
```

## video2x
> https://github.com/k4yt3x/video2x
内置了 `Real-ESRGAN`、`Anime4K`、`Real-CUGAN` 模型，不需要额外安装。有GUI页面，可以直接使用。

![video2x](/lang/python/video2x.png)

### 命令行调用
在程序安装目录下可以找到 `video2x.exe` 文件，可以直接在命令行中调用。
```php
    $video2XPath = config('custom.video2XPath');
    $savePath    = 'video.mp4';
    $outputName  = 'output.mp4';
    $logPath     = 'video2xlog.txt';
    $wd          = '-w 2560 -h 1440'; // 可能要分析传入的视频的分辨率，设置输出分辨率
    $global      = "-e crf=8 -e preset=fast"; // 输出码率，crf越低码率越高，preset可以设置fast、slow
    $model       = 'anime4k-v4-b'; // 使用的模型，anime4k-v4-a、anime4k-v4-b、anime4k-v4-c，一般用b或者c，不然锐化太重了
    $command     = "$video2XPath --log-level info -i $savePath -o $outputPath $wd $global -p libplacebo --libplacebo-shader $model > $logPath 2>&1"
    //$command     = "start /B $video2XPath --log-level info -i $savePath -o $outputPath $wd $global -p libplacebo --libplacebo-shader $model > $logPath 2>&1";
    pclose(popen($command, 'r')); // 不阻塞进程
```