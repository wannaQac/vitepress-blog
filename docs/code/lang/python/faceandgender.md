# 识别人脸和性别

### 依赖
```bash
pip install face_recognition deepface opencv-python numpy Pillow tf-keras
```

### 代码

```python
import face_recognition
from deepface import DeepFace
import cv2
import os
from PIL import Image
import numpy as np

# ---------------------- 新增：强制禁用GPU，使用CPU运行 ----------------------
# 先设置环境变量，禁用TensorFlow GPU支持（必须在导入tensorflow前执行，deepface会间接导入tensorflow）
os.environ["CUDA_VISIBLE_DEVICES"] = "-1"
# 额外配置：关闭TensorFlow不必要的日志，减少冗余输出
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "3"
import tensorflow as tf
tf.config.set_visible_devices([], 'GPU')  # 显式隐藏所有GPU设备
# ---------------------------------------------------------------------------

def detect_face_and_judge_gender(image_path):
    """
    检测图片中人脸数量，若仅1张人脸则判断性别
    :param image_path: 图片文件路径（相对路径或绝对路径）
    :return: 检测和判断结果
    """
    try:
        # 步骤1：读取图片并进行人脸检测（获取人脸位置列表）
        # 方式1：使用face_recognition直接读取图片
        image = face_recognition.load_image_file(image_path)
        # 检测所有人脸（返回人脸边界框坐标列表，每个元素对应一张人脸）
        face_locations = face_recognition.face_locations(image)
        face_count = len(face_locations)
        
        # 步骤2：根据人脸数量进行分支处理
        print(f"图片中检测到 {face_count} 张人脸")
        
        if face_count == 0:
            return "结果：未检测到任何人脸"
        elif face_count == 1:
            # 步骤3：仅1张人脸时，进行性别判断（使用deepface）
            try:
                # DeepFace.analyze 自动检测人脸并返回属性（包含gender）
                analysis_result = DeepFace.analyze(
                    img_path=image_path,
                    actions=["gender"],  # 仅指定性别分析，提高速度
                    detector_backend="retinaface" # 使用retinaface检测人脸，鲁棒性好
                )
                
                # 提取性别结果（返回结果为列表，对应检测到的人脸）
                gender_data = analysis_result[0]["gender"]
                # 找到概率最高的性别（男/女）
                max_gender = max(gender_data.items(), key=lambda x: x[1])
                gender = max_gender[0]
                confidence = round(max_gender[1], 2)
                
                return f"结果：仅检测到1张人脸，该人脸性别为【{gender}】，置信度：{confidence}%"
            
            except Exception as e:
                return f"性别判断失败，错误信息：{str(e)}"
        else:
            # 人脸数量大于1，无需判断性别
            return "结果：检测到多张人脸（≥2），无需进行性别判断"
    
    except FileNotFoundError:
        return f"错误：未找到图片文件，请检查路径是否正确：{image_path}"
    except Exception as e:
        return f"程序执行出错，错误信息：{str(e)}"

# ---------------------- 测试使用 ----------------------
if __name__ == "__main__":
    # 替换为你的图片路径（支持jpg、png、jpeg等格式）
    test_image_path = "test.jpg"
    # 调用函数并打印结果
    result = detect_face_and_judge_gender(test_image_path)
    print(result)

```