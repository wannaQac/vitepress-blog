# pip编译安装报错

### no module named 'xxx'
报错如下：
```
(d2fp) root@ubuntu22:~/project# python -m pip install -e detectron2-main/
Looking in indexes: https://pypi.tuna.tsinghua.edu.cn/simple/
Obtaining file:///root/project/detectron2-main
  Installing build dependencies ... done
  Checking if build backend supports build_editable ... done
  Getting requirements to build editable ... error
  error: subprocess-exited-with-error
  
  × Getting requirements to build editable did not run successfully.
  │ exit code: 1
  ╰─> [19 lines of output]
      Traceback (most recent call last):
        File "/home/vipuser/miniconda3/envs/d2fp/lib/python3.10/site-packages/pip/_vendor/pyproject_hooks/_in_process/_in_process.py", line 389, in <module>
          main()
        File "/home/vipuser/miniconda3/envs/d2fp/lib/python3.10/site-packages/pip/_vendor/pyproject_hooks/_in_process/_in_process.py", line 373, in main
          json_out["return_val"] = hook(**hook_input["kwargs"])
        File "/home/vipuser/miniconda3/envs/d2fp/lib/python3.10/site-packages/pip/_vendor/pyproject_hooks/_in_process/_in_process.py", line 157, in get_requires_for_build_editable
          return hook(config_settings)
        File "/tmp/pip-build-env-jehc0hq3/overlay/lib/python3.10/site-packages/setuptools/build_meta.py", line 481, in get_requires_for_build_editable
          return self.get_requires_for_build_wheel(config_settings)
        File "/tmp/pip-build-env-jehc0hq3/overlay/lib/python3.10/site-packages/setuptools/build_meta.py", line 333, in get_requires_for_build_wheel
          return self._get_build_requires(config_settings, requirements=[])
        File "/tmp/pip-build-env-jehc0hq3/overlay/lib/python3.10/site-packages/setuptools/build_meta.py", line 301, in _get_build_requires
          self.run_setup()
        File "/tmp/pip-build-env-jehc0hq3/overlay/lib/python3.10/site-packages/setuptools/build_meta.py", line 520, in run_setup
          super().run_setup(setup_script=setup_script)
        File "/tmp/pip-build-env-jehc0hq3/overlay/lib/python3.10/site-packages/setuptools/build_meta.py", line 317, in run_setup
          exec(code, locals())
        File "<string>", line 10, in <module>
      ModuleNotFoundError: No module named 'torch'
      [end of output]
  
  note: This error originates from a subprocess, and is likely not a problem with pip.
ERROR: Failed to build 'file:///root/project/detectron2-main' when getting requirements to build editable
```

这可能是由于 pip 构建过程中的隔离机制所致。基本上，安装程序需要torch先安装才能运行，但最近的版本pip使用了一些隔离措施，不允许构建过程访问已安装的软件包。可以使用以下命令禁用该隔离：
```
pip install --no-build-isolation
```