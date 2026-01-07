# 打印字体
> 核心思路就是需要拆分，每一行字体是由什么部分组成的，拆分成元组数组，每个元组都包含着文字、使用的字体、字体的偏移

```python
# 安全遍历字符串，严格保留原文本顺序，Emoji/藏文完整，普通字符拆分
def safe_string_iter(text):
    result = []
    i = 0
    n = len(text)
    
    while i < n:
        # 匹配Emoji（完整字素簇）
        emoji_grapheme = regex.match(r'\X', text[i:])
        if emoji_grapheme and is_emoji(emoji_grapheme.group()):
            result.append(emoji_grapheme.group())
            i += len(emoji_grapheme.group())
            continue
        
        # 匹配藏文（连续藏文字符）
        tibetan_match = regex.match(r'[\u0F00-\u0FFF]+', text[i:])
        if tibetan_match:
            tibetan_block = tibetan_match.group()
            # 按藏文音节拆分
            syllables = [syl + '་' for syl in tibetan_block.split('་') if syl.strip()]
            if not tibetan_block.endswith('་') and syllables:
                last_syl = syllables.pop()[:-1]
                syllables.append(last_syl)
            result.extend(syllables)
            i += len(tibetan_block)
            continue
        
        # 普通字符，拆分为单字符
        result.append(text[i])
        i += 1
    
    # 清理空字符
    # result = [char for char in result if char.strip()]
    return result

# 判断字符是否为emoji
def is_emoji(char):
    return emoji.emoji_count(char) > 0

# 判断字符串是否包含Emoji
def contains_emoji(text):
    emojis = emoji.emoji_list(text)
    return len(emojis) > 0

# 判断字符是否为藏文
def is_tibetan_char(char):
    return 0x0F00 <= ord(char) <= 0x0FFF

# 判断字符串是否为纯藏文（仅包含藏文字符，无其他字符）
def is_tibetan_text(text: str) -> bool:
    tibetan_pattern = re.compile(r'^[\u0F00-\u0FFF]+$', re.UNICODE)
    # 先过滤空字符串/纯空格
    if not text.strip():
        return False
    return bool(tibetan_pattern.match(text))

# 判断单个字符是否为彝文
def is_yi_char(char):
    if len(char) != 1: return False

    code = ord(char)
    yi_ranges = [
        (0xA000, 0xA48F),   # 彝文音节
        (0xA490, 0xA4CF),   # 彝文字根
        (0x16A00, 0x16A3F)  # 彝文补充
    ]
    return any(start <= code <= end for start, end in yi_ranges)

class GenerateText(DrawIntercace):
    def __init__(self):
    def _initialize(self):
        self.initFont()

    def initFont(self):
        fontSize = self.fontSize
        fontSizeZoom = self.fontSize * self.getZoom()  # 计算字体大小

        fontPath = sys.path[0] + "/public/fonts/"
        
        font = self.fontF + '.ttf' # 当前用户选择的字体
        japanFont = 'puhui.ttf' # 遇到の符号替换为该字体
        chineseFont = 'xinheiti.ttf' # 遇到英文字库，但是输入的是汉字替换为该字体
        xiFont = 'xinheiti.ttf'  # 遇到囍形符号替换为该字体
        emojiFont = 'seguiemj.ttf' # 遇到emoji替换为该字体
        zangwenFont = 'NotoSerifTibetan-VariableFont_wght.ttf' # 遇到藏文替换为该字体
        yiwenFont = 'msyi.ttf' # 遇到彝文替换为该字体


        # 初始化用于计算的字体
        self.font = ImageFont.truetype(fontPath + font, fontSize)
        self.japanFont = ImageFont.truetype(fontPath + japanFont, fontSize)
        self.chineseFont = ImageFont.truetype(fontPath + chineseFont, fontSize)
        self.xiFont = ImageFont.truetype(fontPath + xiFont, fontSize)
        self.emojiFont = ImageFont.truetype(fontPath + emojiFont, fontSize)
        self.zangwenFont = ImageFont.truetype(fontPath + zangwenFont, fontSize)
        self.yiwenFont = ImageFont.truetype(fontPath + yiwenFont, fontSize)

        # 初始化用于打印的字体，只有parseTextFont方法会使用该字体（倾斜字体需要使用双倍的字号才能打印出不倾斜字体原字号的大小，所以这里使用了fontSizeZoom）
        self.print_font = ImageFont.truetype(fontPath + font, fontSizeZoom)
        self.print_japanFont = ImageFont.truetype(fontPath + japanFont, fontSizeZoom)
        self.print_chineseFont = ImageFont.truetype(fontPath + chineseFont, fontSizeZoom)
        self.print_xiFont = ImageFont.truetype(fontPath + xiFont, fontSizeZoom)
        self.print_emojiFont = ImageFont.truetype(fontPath + emojiFont, fontSizeZoom)
        self.print_zangwenFont = ImageFont.truetype(fontPath + zangwenFont, fontSizeZoom)
        self.print_yiwenFont = ImageFont.truetype(fontPath + yiwenFont, fontSizeZoom)

    def drawTextWithJustify(self, textCanvasDraw, tempDraw, positionArr, fontArr, justifyArr, appendTextLength = True, appendJustifyOffset = True):
        # 初始化参数
        fix, hEndY, offset = positionArr
        letters, color, font = fontArr
        useJustify, justifyOffset = justifyArr

        # 特殊判断返回
        if(len(letters) == 0): return

        if self.fontF == 'PingFangSaTuoTi-2':
            hEndY += self.fontSize * 0.15
        
        for char in safe_string_iter(letters):
            # 如果使用两端对齐，循环，为每个字体都添加偏移量，来实现十分接近两端对齐的效果
            if useJustify and appendJustifyOffset: fix += justifyOffset

            isEmoji = is_emoji(char)

            if self.bold == 1: # 如果加粗
                self.drawBlodTextLine(textCanvasDraw, fix, offset, hEndY, char, font, isEmoji)
            else:
                self.drawTextLine(textCanvasDraw, fix, offset, hEndY, char, font, isEmoji)
                
            # 每打印一个字符，就加字符当前的偏移量
            if appendTextLength: fix += round(tempDraw.textlength(char, font))

        # 如果启用了两端对齐，返回一个经过偏移的fix
        return fix

    # type: calc|print，calc为计算字体，print为打印字体
    def getElementFont(self, element, type='calc'):
        if element == 'の' and self.fontF not in self.zhi:  # 如果当前字符是 "の" 且当前字体不在 self.zhi 中
            useFont = self.japanFont
            if type == 'print': useFont = self.print_japanFont
        elif self.is_chinese_char(element) and self.fontF in self.en:  # 如果当前字符是中文字符并且字体是英文字体
            useFont = self.chineseFont
            if type == 'print': useFont = self.print_chineseFont
        elif is_emoji(element):  # 如果当前字符是 emoji
            useFont = self.emojiFont
            if type == 'print': useFont = self.print_emojiFont
        elif is_tibetan_text(element):
            useFont = self.zangwenFont
            if type == 'print': useFont = self.print_zangwenFont
        elif is_yi_char(element):
            useFont = self.yiwenFont 
            if type == 'print': useFont = self.print_yiwenFont
        elif element == '囍':
            useFont = self.xiFont
            if type == 'print': useFont = self.print_xiFont
        else:
            useFont = self.font
            if type == 'print': useFont = self.print_font

        return useFont
    
    def parseTextFont(self, text):
        sti_t = safe_string_iter(text)
        useLangs = []
        result = []
        fontDict = {}
        # fontCountDict = {}
        for num, element in enumerate(sti_t):  # 对于文本中的每个字符进行处理
            useFont = self.getElementFont(element, 'print')  # 获取当前字符对应的字体
            
            elementHeight = get_text_height(useFont, element)
            fontDict[useFont] = max(fontDict.get(useFont, 0), elementHeight)
            # fontCountDict[useFont] = fontCountDict.get(useFont, 0) + 1

            pushFont(useLangs, useFont)
            result.append((element, useFont))

        #baseHeight = fontDict[max(fontCountDict, key=fontCountDict.get)] # 获取这行字中出现次数最多的字体对应的高度作为基准高度
        baseHeight = get_text_height(self.print_font, text) # 直接用当前字体作为基准高度
        text_font_data = []
        for text, font in result:
            fontHeight = fontDict[font]
            y_offset = baseHeight - fontHeight
            if font == self.print_zangwenFont: y_offset = -round(self.fontSize / 5)
            if font == self.print_yiwenFont: y_offset -= round(self.fontSize / 10)
            text_font_data.append((text, font, y_offset))

        # 合并相同字体的字符
        merged_text_font_data = []
        current_text = text_font_data[0][0]
        current_font = text_font_data[0][1]
    
        # 从第二个元素开始遍历
        for text, font, _ in text_font_data[1:]:
            if font == current_font:
                # 字体相同，累计文本
                current_text += text
            else:
                # 字体不同，保存当前结果，重置累计
                fontHeight = fontDict[current_font]
                y_offset = baseHeight - fontHeight
                if current_font == self.print_zangwenFont: y_offset = -round(self.fontSize / 5)
                if current_font == self.print_yiwenFont: y_offset -= round(self.fontSize / 10)
                merged_text_font_data.append((current_text, current_font, y_offset))
                current_text = text
                current_font = font
    
        # 保存最后一组累计的结果
        fontHeight = fontDict[current_font]
        y_offset = baseHeight - fontHeight
        if current_font == self.print_zangwenFont: y_offset = -round(self.fontSize / 5)
        if current_font == self.print_yiwenFont: y_offset -= round(self.fontSize / 10)
        merged_text_font_data.append((current_text, current_font, y_offset))

        return [useLangs, text_font_data, merged_text_font_data, baseHeight]

    def getTextHandle(self, t):
        _, text_font_data, merged_text_font_data, _ = self.parseTextFont(t)
        for text, text_font, y_offset in merged_text_font_data:
            fix = self.drawTextWithJustify(textCanvasDraw, tempDraw, [fix, hEndY + y_offset, offset], [text, self.color, text_font], [useTextAlignJustify, justifyOffset])