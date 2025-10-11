# CLIPTextModel

### CLIPTextModel.__init__() got an unexpected keyword argument 'offload_state_dict'
目前看有效的方法是降级，downgraded transformers to 4.49 and diffusers to 0.32.2 and it's working now

### TypeError: T5EncoderModel.__init__() got an unexpected keyword argument 'offload_state_dict'
目前看有效的方法是降级，downgraded transformers to 4.49