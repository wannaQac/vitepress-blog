# 长时间任务（且阻塞，不能在任务执行时重新执行）

```python
from flask import Flask, jsonify, request
import threading
import time
from functools import wraps

app = Flask(__name__)

# 全局任务状态
task_state = {
    'is_running': False,
    'start_time': None,
    'task_id': None
}
task_lock = threading.Lock()

def background_task(task_id):
    """模拟长时间任务"""
    global task_state
    try:
        # 模拟耗时操作
        for i in range(1, 6):
            time.sleep(5)
            print(f"Task {task_id} progress: {i*20}%")
    finally:
        with task_lock:
            task_state['is_running'] = False
            task_state['task_id'] = None
            task_state['start_time'] = None

@app.route('/starttask', methods=['GET', 'POST'])
def start_task():
    """启动任务端点"""
    global task_state
    
    with task_lock:
        if task_state['is_running']:
            return jsonify({
                'status': 'rejected',
                'message': 'Task already running'
            }), 409
            
        task_id = str(int(time.time()))
        task_state.update({
            'is_running': True,
            'start_time': time.strftime("%Y-%m-%d %H:%M:%S"),
            'task_id': task_id
        })
        
        # 启动后台线程
        thread = threading.Thread(target=background_task, args=(task_id,))
        thread.start()
        
        return jsonify({
            'status': 'started',
            'task_id': task_id,
            'message': 'Task started successfully'
        }), 202

if __name__ == '__main__':
    app.run(threaded=True, debug=True)
```