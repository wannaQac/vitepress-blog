# exec不阻塞进程

### 使用pclose(popen)函数

```php  
$command     = "start /B $video2XPath --log-level info -i $savePath -o $outputPath $wd $global -p libplacebo --libplacebo-shader anime4k-v4-b > $logPath 2>&1";
pclose(popen($command, 'r'));
```
会在后台调起一个进程取跑并且不阻塞进程

```php
$command     = "start \"\" /MIN cmd /c $video2XPath --log-level info -i $savePath -o $outputPath -w 2560 -h 1440 -p libplacebo --libplacebo-shader anime4k-v4-b";
pclose(popen($command, 'r'));
```
会显示一个最小化窗口去跑，不过这样就没法重定向日志了，因为都显示在窗口里