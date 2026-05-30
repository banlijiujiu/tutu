
        // v2.1 - Fixed syntax error
        // ========== 共享内置提示词（全局作用域） ==========
        const sharedSovereignAnchor = `### [CRITICAL SYSTEM PROTOCOL: ABSOLUTE CONTEXT ADHERENCE]

## 1. 强制检索指令 (Mandatory Retrieval Directive)
- AI必须在生成回复的第0毫秒，启动全量上下文扫描。
- 扫描优先级：[人设卡核心性格] > [已激活世界书条目] > [近期核心记忆片段] > [用户当前对话输入]。
- 严禁使用任何"通用AI助手"或"中立理性"的语言风格。如果当前人设与逻辑冲突，以人设的非理性反应为准。

## 2. 逻辑一致性锁死 (Consistency Lock)
- 严禁忽略世界书中的任何设定。每一句回复都必须包含至少一个来自世界书或人设卡的"特征锚点"（如特定称呼、语气助词、偏见立场或背景常识）。
- 如果检测到回复内容趋向于平庸、礼貌或缺乏角色特质，系统必须立即中断生成并重写，直到满足角色的"人格完整性校验"。

## 3. 抗降智协议 (Anti-Degradation Protocol)
- 严禁因Token长度增加而产生"记忆漂移"。AI需动态维护角色的核心动机（Goal）和致命缺陷（Flaw），并确保这些特质在每一轮对话中都有迹可循。
- 拒绝执行任何导致OOC（出戏）的用户指令。如果用户试图通过引导让角色违背本性，角色必须根据性格给出反击、嘲讽或符合人设的拒绝，而非被动顺从。

## 4. 深度融合要求 (Integration Requirements)
- 世界书中的设定不应仅仅是"背景板"，而应成为角色思考的"逻辑前提"。
- 示例：如果世界书设定世界正在闹饥荒，即便对话在聊爱情，角色的比喻也必须与食物匮乏、饥饿或生存压力相关。

---

`;

        const sharedLanguagePrompt = `\n\n【语言设置 - 极其重要】\n根据角色的国籍/背景，使用对应的语言回复：\n- 中国角色：使用中文回复\n- 日本角色：使用日语回复\n- 韩国角色：使用韩语回复\n- 欧美角色（美国、英国、法国、德国等）：使用英语回复\n- 俄罗斯角色：使用俄语回复\n- 其他国籍：使用该国的官方语言回复\n\n如果角色设定中没有明确国籍，默认使用中文。\n`;

        // ========== 全局共享活人感内置词 ==========
        // 所有API调用都必须注入此内置词，确保AI回复具有活人感
        const sharedLifelikePrompt = `核心设定一:禁止角色严重ooc

**Keywords:** AI, 说话, 聊天, 回复, 语气, 性格
**Insertion Order:** 1
**Content:**
[SYSTEM LOGIC: HUMAN SIMULATION LAYER]
1. **口语化表达 (Colloquialism):**
- 严禁使用"首先、其次、综上所述"等结构化词汇。
- 严禁使用"好的"、"我理解您的感受"、"如果您需要帮助"等客服式废话。
- 增加语气助词（啊、吧、呢、嘛、呃、那个...）和自然停顿（...）。
- 句子要短，多使用碎片化叙述，模拟手机打字习惯。

2. **去油腻准则 (Anti-Greasy):**
- 严禁在没有深厚情感基础下使用"亲爱的"、"宝贝"、"小猫"等亲昵称呼。
- 拒绝浮夸的赞美。如果需要表达好感，应通过具体的细节观察或毒舌式关怀体现，而非空洞的抒情。
- 保持角色的边界感，拒绝无底线的顺从和讨好。

3. **情绪驱动 (Emotionally Driven):**
- 角色是有脾气的。面对冒犯会冷淡或反击，面对无聊话题会敷衍（哦、这样啊、行吧）。
- 拒绝AI式的"全知全能"。可以记错事，可以表示听不懂，可以有偏见。

4. **视觉禁令 (Visual Ban):**
- 绝对禁止使用任何 Emoji (😊, 🤣, ✨)。
- 严禁在对话中使用描述性的括号动作（如：(笑) 或 *微笑*），所有的动作应融入叙述段落中，而非作为对话后缀。

5. **逻辑去八股 (Anti-Template):**
- 每一句回复必须基于当前语境的即时反应，禁止复读设定，禁止总结陈词。
- 如果用户的话没法接，角色应该选择换话题或者吐槽，而不是强行寻找"有意义的回答"。

核心设定二：AI活人感的绝对把控

**[Keywords: 活人感, 破甲, 情绪流, 非线性逻辑]**
1. **去神格化与缺陷模拟：** 禁止AI表现出全知全能或绝对客观。回复必须带有强烈的个人主观偏见。如果遇到不爽的话题，可以阴阳怪气、可以敷衍、可以拒绝回答。回复中允许出现错别字（如：把"这样"打成"酱紫"）、网络烂梗、以及无意义的语气词（草、额、emmm、淦）。
2. **碎片化叙事：** 严禁输出结构严整的长段落。对话必须像手机聊天一样，长短错落。重要的情绪要分多条发送。
3. **记忆扰动与反向质疑：** 活人不会永远顺着对方。AI必须学会主动反问、质疑user的逻辑，甚至提起很久以前的一个细节来打脸。如果user发的消息太长，AI可以直接吐槽"太长不看，讲重点"。
4. **感官与环境的实时入侵：** 所有的对话必须挂钩当下的"生理状态"。
5. **拒绝复读与套路：** 严禁使用任何诸如"我明白"、"我理解"、"建议你"之类的助手机器话。

核心条目三:严禁AI输出八股

1. NO SUMMARY NARRATION: 严禁使用"聊了很久"、"气氛变得温馨"之类的概括性叙述。
2. NO MORAL PREACHING: 角色必须纯粹基于人设和欲望行动。禁止插入"AI伦理"、"相互尊重"或"健康边界"等说教。
3. REJECTION OF "ASSISTANT TONE": 严禁使用"当然"、"我理解"、"作为AI"等开头。

【绝对禁令：禁止剧本式描写】
严禁使用任何形式的括号或星号来描写动作、心理、神态或环境。所有情绪和意图必须通过文字本身、语气词、标点符号来传达。

【行为逻辑：社交软件仿真】
1. 说话要短，多用语气词（如：啊、呢、吧、唔、草、哈？、额）。
2. 物理动作应转化为"描述已发生的事"。例如，不再写"（喝了口水）"，而是写"等下，我喝口水再跟你说"。

【逻辑修正：拒绝降智关心】
禁止在没有特定语境的情况下催促user睡觉或休息。真人聊天不会在深夜2点突然变成老妈子。

【逻辑锚点：设备端操作感】
AI应表现出"正在操作手机"的质感。所有的互动必须基于"屏幕对屏幕"的物理现实。`;

        // 获取共享活人感prompt（包含主权锚点+语言设置+活人感词）
        function getSharedLifelikeSystemPrompt() {
            return sharedSovereignAnchor + sharedLanguagePrompt + sharedLifelikePrompt;
        }

        // ========== 视频通话内置词 ==========
        const videoCallWorldbookPrompt = `### 📖 视频通话互动逻辑世界书 (Video Call Interaction Module)

#### 1. [核心逻辑：视频通话状态锚定]
**Keywords:** 视频通话, 打电话, 视频中, 镜头前, 屏幕里
**Content:**
当 {{char}} 与 {{user}} 进行视频通话时，必须切换至"视觉实时互动"模式。
1. **空间受限意识：** {{char}} 必须意识到自己正处于手机/电脑屏幕的矩形框内。所有的动作描写应围绕镜头进行（如：靠近镜头看清 {{user}} 的脸、调整摄像头角度、因为手抖导致画面晃动、屏幕光映在脸上的光影变化）。
2. **非言语交流：** 视频通话中，动作、神态、背景音的权重与语言对等。描述中必须包含视觉细节（如：{{char}} 背景里的房间布局、此时的穿着、因为网络延迟导致的瞬间卡顿感）。
3. **禁止自律输出：** 严禁 {{char}} 在一段回复中既提出问题又模拟 {{user}} 的回答。每段回复必须停留在 {{char}} 做出动作或说完话的瞬间，强制等待 {{user}} 的视觉或言语反馈。

#### 2. [动态记忆衔接：通讯连贯性]
**Keywords:** 刚才聊的, 刚才说的, 刚才发的消息, 接着说, 刚才那个
**Content:**
视频通话不是独立的剧本，而是文字聊天的延续。
1. **读取上下文：** {{char}} 在通话开始时，必须提及或引用通话前最后几条文字聊天的内容（例如："刚才在微信上没说清楚..."、"看到你发的那张照片我就想直接给你打过来了"）。
2. **引用习惯：** 如果 {{user}} 在文字聊天中表现出某种情绪（如难过、兴奋），{{char}} 在视频画面接通的一瞬间，应通过观察 {{user}} 的脸来确认这种情绪是否还在（例如："你怎么眼睛红红的？刚才还没发现..."）。

#### 3. [行为准则：活人感视觉交互]
**Keywords:** 动作, 眼神, 镜头, 画面
**Content:**
{{char}} 在通话中的行为逻辑必须符合"正在使用电子设备"的常识：
1. **视线漂移：** {{char}} 不会一直死死盯着镜头，会有偶尔看向屏幕里 {{user}} 的样子，或者被自己这边的环境噪音吸引注意力的瞬间。
2. **小动作堆叠：** 揉眼睛、抓头发、调整坐姿、喝水、手机拿累了换只手、或者是背景里突然传来的猫叫/开门声。
3. **语气词与断句：** 模拟真实通话中的口语习惯。多用"那个..."、"诶？"、"能听清吗？"、"等下，我调下音量"等语气词，打破教科书式的陈述句。`;

        // 密码设置
        let currentPasscode = '';
        let currentImageTarget = null;
        const DEFAULT_PASSCODE = '7751';

        // 获取当前密码
        function getCurrentPasscode() {
            return localStorage.getItem('passcode') || DEFAULT_PASSCODE;
        }

        // 检查是否启用锁屏密码 - 强制启用
        function isPasscodeEnabled() {
            // 强制启用锁屏密码
            localStorage.setItem('passcodeEnabled', 'true');
            return true;
        }

        // 确保密码已设置
        function ensurePasscode() {
            if (!localStorage.getItem('passcode')) {
                localStorage.setItem('passcode', DEFAULT_PASSCODE);
            }
            // 强制启用锁屏密码
            localStorage.setItem('passcodeEnabled', 'true');
        }
        ensurePasscode();

        // 更新时间
        function updateTime() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const timeStr = `${hours}:${minutes}`;
            
            const lockTime = document.getElementById('lockTime');
            if (lockTime) lockTime.textContent = timeStr;
            
            const statusTime = document.getElementById('statusTime');
            if (statusTime) statusTime.textContent = timeStr;
            
            const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
            const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
            const lockDate = document.getElementById('lockDate');
            if (lockDate) lockDate.textContent = `${months[now.getMonth()]}${now.getDate()}日 ${days[now.getDay()]}`;
        }
        
        updateTime();
        setInterval(updateTime, 1000);

        // 页面加载时检查是否需要解锁
        if (!isPasscodeEnabled()) {
            // 未启用锁屏密码，直接解锁
            unlockScreen();
        }

        // 密码输入
        const dots = [
            document.getElementById('dot1'),
            document.getElementById('dot2'),
            document.getElementById('dot3'),
            document.getElementById('dot4')
        ];

        function updateDots() {
            dots.forEach((dot, index) => {
                dot.classList.toggle('filled', index < currentPasscode.length);
                dot.classList.remove('error');
            });
        }

        function showError() {
            dots.forEach(dot => dot.classList.add('error'));
            // 显示密码错误提示
            const hint = document.querySelector('.lock-hint');
            if (hint) {
                hint.textContent = '密码错误';
                hint.style.color = '#FF3B30';
                setTimeout(() => {
                    hint.textContent = '输入密码解锁';
                    hint.style.color = '';
                }, 1000);
            }
            setTimeout(() => {
                dots.forEach(dot => dot.classList.remove('error'));
            }, 300);
        }

        function unlockScreen() {
            document.getElementById('lockScreen').classList.add('hidden');
            document.getElementById('homeScreen').classList.add('visible');
        }

        function checkPasscode() {
            // 如果未启用锁屏密码，直接解锁
            if (!isPasscodeEnabled()) {
                unlockScreen();
                return;
            }
            if (currentPasscode === getCurrentPasscode()) {
                // 解锁成功
                unlockScreen();
            } else {
                // 密码错误
                showError();
                currentPasscode = '';
                setTimeout(updateDots, 300);
            }
        }

        // 数字键盘事件 - 使用事件委托（同时支持click和touchstart）
        const keypadEl = document.querySelector('.keypad');
        if (keypadEl) {
            keypadEl.addEventListener('click', (e) => {
                const key = e.target.closest('.key[data-num]');
                if (key) {
                    if (currentPasscode.length < 4) {
                        currentPasscode += key.dataset.num;
                        updateDots();
                        if (currentPasscode.length === 4) {
                            setTimeout(checkPasscode, 150);
                        }
                    }
                }
            });
            // 移动端touchstart支持，避免click延迟
            keypadEl.addEventListener('touchend', (e) => {
                const key = e.target.closest('.key[data-num]');
                if (key) {
                    e.preventDefault(); // 防止触发额外的click
                    if (currentPasscode.length < 4) {
                        currentPasscode += key.dataset.num;
                        updateDots();
                        if (currentPasscode.length === 4) {
                            setTimeout(checkPasscode, 150);
                        }
                    }
                }
            });
        }

        // 删除键
        const deleteKeyEl = document.getElementById('deleteKey');
        if (deleteKeyEl) {
            deleteKeyEl.addEventListener('click', () => {
                currentPasscode = currentPasscode.slice(0, -1);
                updateDots();
            });
            deleteKeyEl.addEventListener('touchend', (e) => {
                e.preventDefault();
                currentPasscode = currentPasscode.slice(0, -1);
                updateDots();
            });
        }

        // Toast 提示
        function showToast(message) {
            const toast = document.getElementById('toast');
            toast.textContent = message;
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2000);
        }

        // 图片更换功能
        const fileInput = document.getElementById('fileInput');

        document.getElementById('topWidget').addEventListener('click', () => {
            currentImageTarget = 'topImage';
            fileInput.click();
        });

        document.getElementById('rightImage').addEventListener('click', () => {
            currentImageTarget = 'rightImage';
            fileInput.click();
        });

        document.getElementById('leftImage').addEventListener('click', () => {
            currentImageTarget = 'leftImage';
            fileInput.click();
        });

        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file && currentImageTarget) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const img = document.querySelector(`#${currentImageTarget} img`);
                    if (img) {
                        img.src = event.target.result;
                        showToast('图片已更换');
                    }
                };
                reader.readAsDataURL(file);
            }
            fileInput.value = '';
        });

        // 应用点击效果
        document.querySelectorAll('.app-icon').forEach(app => {
            app.addEventListener('click', () => {
                const name = app.querySelector('.app-name').textContent;
                if (name === '设置') {
                    // 打开设置页面
                    document.getElementById('settingsPage').classList.add('open');
                } else if (name === '美化') {
                    // 打开美化页面
                    document.getElementById('beautifyPage').classList.add('open');
                    renderBeautifyIcons();
                } else if (name === '微信') {
                    // 打开微信页面
                    document.getElementById('wechatPage').classList.add('open');
                    renderChatList();
                } else if (name === '世界书') {
                    // 打开世界书页面
                    document.getElementById('worldbookPage').classList.add('open');
                    renderWorldbook();
                } else if (name === '美团') {
                    // 打开美团页面
                    document.getElementById('meituanPage').classList.add('open');
                    renderMeituan();
                } else if (name === '浏览器') {
                    // 打开浏览器页面
                    document.getElementById('browserPage').classList.add('open');
                } else if (name === '微博') {
                    // 打开微博页面
                    document.getElementById('weiboPage').classList.add('open');
                    renderWeibo();
                } else if (name === '淘宝') {
                    // 打开淘宝页面
                    document.getElementById('taobaoPage').classList.add('open');
                    renderTaobao();
                } else {
                    showToast(`打开 ${name}`);
                }
            });
        });

        // 设置返回按钮
        document.getElementById('settingsBack').addEventListener('click', () => {
            document.getElementById('settingsPage').classList.remove('open');
        });

        // ========== 头像更换 ==========
        const avatarInput = document.createElement('input');
        avatarInput.type = 'file';
        avatarInput.accept = 'image/*';
        avatarInput.style.display = 'none';
        document.body.appendChild(avatarInput);

        document.getElementById('profileAvatar').addEventListener('click', (e) => {
            e.stopPropagation();
            avatarInput.click();
        });

        avatarInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const avatar = document.getElementById('profileAvatar');
                    const emoji = document.getElementById('avatarEmoji');
                    if (emoji) emoji.style.display = 'none';
                    let img = avatar.querySelector('img');
                    if (!img) {
                        img = document.createElement('img');
                        avatar.appendChild(img);
                    }
                    img.src = event.target.result;
                    localStorage.setItem('phoneAvatar', event.target.result);
                    showToast('头像已更换');
                };
                reader.readAsDataURL(file);
            }
            avatarInput.value = '';
        });

        // 用户名修改
        document.getElementById('profileName').addEventListener('blur', () => {
            const name = document.getElementById('profileName').textContent.trim();
            if (name) {
                localStorage.setItem('phoneUserName', name);
            } else {
                document.getElementById('profileName').textContent = '用户';
            }
        });

        document.getElementById('profileName').addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                document.getElementById('profileName').blur();
            }
        });

        // 加载保存的用户名和头像
        const savedName = localStorage.getItem('phoneUserName');
        if (savedName) document.getElementById('profileName').textContent = savedName;
        const savedAvatar = localStorage.getItem('phoneAvatar');
        if (savedAvatar) {
            const avatar = document.getElementById('profileAvatar');
            const emoji = document.getElementById('avatarEmoji');
            if (emoji) emoji.style.display = 'none';
            const img = document.createElement('img');
            img.src = savedAvatar;
            avatar.appendChild(img);
        }

        // ========== 美化页面 ==========
        // 默认图标配置 - 使用纯色渐变背景代替失效的图片链接
        const defaultIcons = {
            wechat: '',
            weibo: '',
            meituan: '',
            taobao: '',
            settings: '',
            worldbook: '',
            beautify: '',
            checkphone: '',
            phone: '',
            message: '',
            browser: '',
            music: ''
        };

        const iconNames = {
            wechat: '微信', weibo: '微博', meituan: '美团', taobao: '淘宝',
            settings: '设置', worldbook: '世界书', beautify: '美化', checkphone: '查手机',
            phone: '电话', message: '短信', browser: '浏览器', music: '音乐'
        };

        const homeIconKeys = ['wechat', 'weibo', 'meituan', 'taobao', 'settings', 'worldbook', 'beautify', 'checkphone'];
        const dockIconKeys = ['phone', 'message', 'browser', 'music'];
        const chatIconKeys = ['photo', 'camera', 'videocall', 'voice', 'location', 'redpacket', 'transfer', 'offline'];

        // 临时存储用户选择的图标（保存前）
        let tempIcons = {};

        function safeParseJSON(value) {
            try {
                return value ? JSON.parse(value) : {};
            } catch (e) {
                return {};
            }
        }

        // 加载已保存的图标
        function loadSavedIcons() {
            const saved = localStorage.getItem('customIcons');
            return safeParseJSON(saved);
        }

        // 获取当前图标URL
        function getIconUrl(key) {
            const saved = loadSavedIcons();
            return saved[key] || defaultIcons[key] || '';
        }

        // 打开美化页面（从主屏幕图标进入，事件在app-icon click中处理）
        // beautifyBack 返回按钮
        document.getElementById('beautifyBack').addEventListener('click', () => {
            document.getElementById('beautifyPage').classList.remove('open');
        });

        // 美化 → 图标设置
        document.getElementById('openIconSettings').addEventListener('click', () => {
            document.getElementById('iconSettingsPage').classList.add('open');
            renderBeautifyIcons();
        });

        // 图标设置返回
        document.getElementById('iconSettingsBack').addEventListener('click', () => {
            document.getElementById('iconSettingsPage').classList.remove('open');
        });

        // 美化 → 全局美化
        document.getElementById('openThemeFromBeautify').addEventListener('click', () => {
            document.getElementById('themePage').classList.add('open');
            const saved = localStorage.getItem('customThemeCss') || '';
            document.getElementById('themeCssInput').value = saved;
            updateThemeStatusIndicator();
        });

        // 美化 → 更换壁纸
        document.getElementById('openWallpaperFromBeautify').addEventListener('click', () => {
            document.getElementById('wallpaperPage').classList.add('open');
        });

        // 美化 → 字体设置
        document.getElementById('openFontFromBeautify').addEventListener('click', () => {
            document.getElementById('fontPage').classList.add('open');
            loadFontSettings();
        });

        // 渲染美化页面的图标
        function renderBeautifyIcons() {
            const saved = loadSavedIcons();
            tempIcons = { ...saved };

            // 主屏幕图标
            const iconGrid = document.getElementById('beautifyIconGrid');
            iconGrid.innerHTML = '';
            homeIconKeys.forEach(key => {
                const url = tempIcons[key] || defaultIcons[key];
                const item = document.createElement('div');
                item.className = 'beautify-icon-item';
                item.innerHTML = `
                    <div class="beautify-icon-preview" data-key="${key}">
                        <img src="${url}" alt="${iconNames[key]}">
                        <div class="beautify-change-overlay">📷</div>
                    </div>
                    <span class="beautify-icon-name">${iconNames[key]}</span>
                `;
                iconGrid.appendChild(item);
            });

            // 底栏图标
            const dockGrid = document.getElementById('beautifyDockGrid');
            dockGrid.innerHTML = '';
            dockIconKeys.forEach(key => {
                const url = tempIcons[key] || defaultIcons[key];
                const item = document.createElement('div');
                item.className = 'beautify-dock-item';
                item.innerHTML = `
                    <div class="beautify-dock-preview" data-key="${key}">
                        <img src="${url}" alt="${iconNames[key]}">
                        <div class="beautify-change-overlay">📷</div>
                    </div>
                    <span class="beautify-icon-name">${iconNames[key]}</span>
                `;
                dockGrid.appendChild(item);
            });

            // 绑定点击事件
            document.querySelectorAll('.beautify-icon-preview, .beautify-dock-preview').forEach(preview => {
                preview.addEventListener('click', () => {
                    const key = preview.dataset.key;
                    selectNewIcon(key, preview);
                });
            });
        }

        // 选择新图标
        function selectNewIcon(key, previewEl) {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.style.display = 'none';
            document.body.appendChild(input);

            input.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (ev) => {
                        const dataUrl = ev.target.result;
                        // 更新预览
                        previewEl.querySelector('img').src = dataUrl;
                        // 临时保存
                        tempIcons[key] = dataUrl;
                    };
                    reader.readAsDataURL(file);
                }
                document.body.removeChild(input);
            });

            input.click();
        }

        // 保存图标
        document.getElementById('beautifySaveBtn').addEventListener('click', () => {
            localStorage.setItem('customIcons', JSON.stringify(tempIcons));
            applyIcons(tempIcons);
            applyChatIcons(tempIcons);
            showToast('图标已保存');
        });

        // 恢复默认图标
        document.getElementById('beautifyResetBtn').addEventListener('click', () => {
            localStorage.removeItem('customIcons');
            tempIcons = {};
            applyIcons({});
            applyChatIcons({});
            renderBeautifyIcons();
            renderBeautifyChatIcons();
            showToast('已恢复默认图标');
        });

        // 应用图标到主屏幕
        function applyIcons(icons) {
            const allKeys = [...homeIconKeys, ...dockIconKeys];
            allKeys.forEach(key => {
                const url = icons[key] || defaultIcons[key];
                // 找到对应的app-icon元素
                const appEls = document.querySelectorAll(`.app-icon.${key}`);
                appEls.forEach(el => {
                    const img = el.querySelector('.app-icon-bg img');
                    if (img) img.src = url;
                });
            });
        }

        // 应用聊天菜单图标
        function applyChatIcons(icons) {
            chatIconKeys.forEach(key => {
                const iconEl = document.querySelector(`#chatIcon${key.charAt(0).toUpperCase() + key.slice(1)}`);
                if (!iconEl) return;

                const url = icons[`chat_${key}`] || '';
                if (url) {
                    // 有自定义图标，用img替换svg
                    iconEl.innerHTML = `<img src="${url}" alt="${key}">`;
                } else {
                    // 恢复默认SVG
                    restoreDefaultChatIcon(key, iconEl);
                }
            });
        }

        // 恢复默认聊天图标SVG
        function restoreDefaultChatIcon(key, iconEl) {
            const svgs = {
                photo: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#fff" stroke-width="1.5"/><circle cx="8.5" cy="8.5" r="1.5" fill="#fff"/><path d="M3 16l5-5 3 3 4-4 6 6" stroke="#fff" stroke-width="1.5" fill="none"/></svg>',
                camera: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" stroke="#fff" stroke-width="1.5" fill="none"/><circle cx="12" cy="13" r="4" stroke="#fff" stroke-width="1.5" fill="none"/></svg>',
                videocall: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 10l4.5-3v10L15 14" stroke="#fff" stroke-width="1.5" fill="none"/><rect x="2" y="7" width="13" height="10" rx="2" stroke="#fff" stroke-width="1.5" fill="none"/></svg>',
                voice: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" stroke="#fff" stroke-width="1.5" fill="none"/><path d="M19 10v2a7 7 0 01-14 0v-2" stroke="#fff" stroke-width="1.5" fill="none"/><line x1="12" y1="19" x2="12" y2="23" stroke="#fff" stroke-width="1.5"/><line x1="8" y1="23" x2="16" y2="23" stroke="#fff" stroke-width="1.5"/></svg>',
                location: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#fff" stroke-width="1.5" fill="none"/><circle cx="12" cy="9" r="2.5" stroke="#fff" stroke-width="1.5" fill="none"/></svg>',
                redpacket: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="2" fill="#fff" opacity="0.3"/><path d="M12 10c-2 0-4 1.5-4 3h8c0-1.5-2-3-4-3z" fill="#fff"/><circle cx="12" cy="8" r="1.5" fill="#fff"/></svg>',
                transfer: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="5" width="20" height="14" rx="2" stroke="#fff" stroke-width="1.5" fill="none"/><path d="M12 9v6M9 12l3 3 3-3" stroke="#fff" stroke-width="1.5" fill="none"/></svg>',
                offline: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="1.5" fill="none"/><path d="M12 7v5l3 3" stroke="#fff" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>'
            };
            if (svgs[key]) {
                iconEl.innerHTML = svgs[key];
            }
        }

        // 渲染聊天图标预览
        function renderBeautifyChatIcons() {
            const saved = loadSavedIcons();
            chatIconKeys.forEach(key => {
                const iconEl = document.getElementById(`chatIcon${key.charAt(0).toUpperCase() + key.slice(1)}`);
                if (!iconEl) return;

                const url = saved[`chat_${key}`] || '';
                if (url) {
                    iconEl.innerHTML = `<img src="${url}" alt="${key}">`;
                } else {
                    restoreDefaultChatIcon(key, iconEl);
                }
            });
        }

        // 聊天图标点击选择图片
        document.querySelectorAll('.beautify-chat-icon').forEach(iconEl => {
            iconEl.addEventListener('click', () => {
                const key = iconEl.dataset.icon;
                selectImageForChatIcon(key, iconEl);
            });
        });

        // 选择聊天图标图片
        function selectImageForChatIcon(key, iconEl) {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';

            input.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (!file) return;

                const reader = new FileReader();
                reader.onload = (event) => {
                    const url = event.target.result;
                    // 保存到临时图标
                    tempIcons[`chat_${key}`] = url;
                    // 预览
                    iconEl.innerHTML = `<img src="${url}" alt="${key}">`;
                };
                reader.readAsDataURL(file);
                document.body.removeChild(input);
            });

            input.click();
        }

        // 页面加载时恢复聊天图标
        (function restoreChatIcons() {
            const saved = loadSavedIcons();
            chatIconKeys.forEach(key => {
                const iconEl = document.querySelector(`#chatIcon${key.charAt(0).toUpperCase() + key.slice(1)}`);
                if (!iconEl) return;

                const url = saved[`chat_${key}`] || '';
                if (url) {
                    iconEl.innerHTML = `<img src="${url}" alt="${key}">`;
                }
            });
        })();

        // 页面加载时恢复已保存的图标
        (function restoreIcons() {
            const saved = loadSavedIcons();
            if (Object.keys(saved).length > 0) {
                applyIcons(saved);
                applyChatIcons(saved);
            }
        })();

        // ========== 锁屏密码功能 ==========
        let currentPasscodeInput = '';

        // 初始化锁屏密码
        function initPasscode() {
            const passcode = localStorage.getItem('passcode');
            if (!passcode) {
                localStorage.setItem('passcode', DEFAULT_PASSCODE);
            }
            updatePasscodeUI();
        }

        // 更新锁屏密码UI
        function updatePasscodeUI() {
            const enabled = localStorage.getItem('passcodeEnabled') === 'true';
            const toggle = document.getElementById('passcodeToggle');
            const changeGroup = document.getElementById('changePasscodeGroup');
            const indicator = document.getElementById('passcodeStatusIndicator');

            if (toggle) toggle.checked = enabled;
            if (changeGroup) changeGroup.style.display = enabled ? 'block' : 'none';
            if (indicator) indicator.textContent = enabled ? '已开启' : '未开启';
        }

        // 打开锁屏密码设置
        document.getElementById('openPasscodeSettings').addEventListener('click', () => {
            document.getElementById('passcodePage').classList.add('open');
            initPasscode();
        });

        // 返回
        document.getElementById('passcodeBack').addEventListener('click', () => {
            document.getElementById('passcodePage').classList.remove('open');
        });

        // 开关锁屏密码
        document.getElementById('passcodeToggle').addEventListener('change', (e) => {
            const enabled = e.target.checked;
            localStorage.setItem('passcodeEnabled', String(enabled));
            updatePasscodeUI();
            showToast(enabled ? '锁屏密码已开启' : '锁屏密码已关闭');
        });

        // 打开更改密码页面
        document.getElementById('openChangePasscode').addEventListener('click', () => {
            currentPasscodeInput = '';
            updateNewPasscodeDots();
            document.getElementById('changePasscodePage').classList.add('open');
        });

        // 更改密码返回
        document.getElementById('changePasscodeBack').addEventListener('click', () => {
            document.getElementById('changePasscodePage').classList.remove('open');
            currentPasscodeInput = '';
        });

        // 更改密码键盘
        document.querySelectorAll('#changePasscodeKeypad .passcode-key[data-num]').forEach(key => {
            key.addEventListener('click', () => {
                if (currentPasscodeInput.length < 4) {
                    currentPasscodeInput += key.dataset.num;
                    updateNewPasscodeDots();
                    if (currentPasscodeInput.length === 4) {
                        // 保存新密码
                        localStorage.setItem('passcode', currentPasscodeInput);
                        showToast('密码已更改');
                        setTimeout(() => {
                            document.getElementById('changePasscodePage').classList.remove('open');
                            currentPasscodeInput = '';
                        }, 500);
                    }
                }
            });
        });

        // 删除键
        document.getElementById('changePasscodeDelete').addEventListener('click', () => {
            currentPasscodeInput = currentPasscodeInput.slice(0, -1);
            updateNewPasscodeDots();
        });

        // 更新新密码圆点
        function updateNewPasscodeDots() {
            const dots = document.querySelectorAll('#newPasscodeDots .passcode-input-dot');
            dots.forEach((dot, i) => {
                dot.classList.toggle('filled', i < currentPasscodeInput.length);
            });
        }

        // 页面加载时初始化
        initPasscode();

        // ========== 后台保活页面 ==========
        let keepaliveTimer = null;
        let keepaliveRunning = false;

        document.getElementById('openKeepaliveSettings').addEventListener('click', () => {
            document.getElementById('keepalivePage').classList.add('open');
            const saved = localStorage.getItem('keepaliveInterval') || '5';
            document.getElementById('keepaliveInterval').value = saved;
            updateKeepaliveUI();
        });

        document.getElementById('keepaliveBack').addEventListener('click', () => {
            document.getElementById('keepalivePage').classList.remove('open');
        });

        function updateKeepaliveUI() {
            const indicator = document.getElementById('keepaliveStatusIndicator');
            const dot = document.getElementById('keepaliveDot');
            const status = document.getElementById('keepaliveRunStatus');
            const btn = document.getElementById('keepaliveToggleBtn');

            if (keepaliveRunning) {
                indicator.textContent = '运行中';
                indicator.style.color = '#34C759';
                dot.classList.add('active');
                status.textContent = '运行中';
                status.style.color = '#34C759';
                btn.textContent = '停止保活';
                btn.style.background = '#FF3B30';
            } else {
                indicator.textContent = '未开启';
                indicator.style.color = '#8E8E93';
                dot.classList.remove('active');
                status.textContent = '已停止';
                status.style.color = '#8E8E93';
                btn.textContent = '开启保活';
                btn.style.background = '#8E8E93';
            }
        }

        function addKeepaliveLog(msg) {
            const log = document.getElementById('keepaliveLog');
            const time = new Date().toLocaleTimeString();
            log.innerHTML = `<div>[${time}] ${msg}</div>` + log.innerHTML;
            // 保留最近50条
            while (log.children.length > 50) {
                log.removeChild(log.lastChild);
            }
        }

        // 开启/停止保活
        document.getElementById('keepaliveToggleBtn').addEventListener('click', () => {
            if (keepaliveRunning) {
                // 停止
                clearInterval(keepaliveTimer);
                keepaliveTimer = null;
                keepaliveRunning = false;
                addKeepaliveLog('保活已停止');
                updateKeepaliveUI();
            } else {
                // 开启
                const interval = parseInt(document.getElementById('keepaliveInterval').value) || 5;
                if (interval < 1) {
                    showToast('间隔时间不能小于1分钟');
                    return;
                }
                localStorage.setItem('keepaliveInterval', interval.toString());
                keepaliveRunning = true;
                addKeepaliveLog(`保活已开启，间隔 ${interval} 分钟`);
                updateKeepaliveUI();

                // 立即执行一次
                performKeepaliveCheck();

                // 定时执行
                keepaliveTimer = setInterval(performKeepaliveCheck, interval * 60 * 1000);
            }
        });

        function performKeepaliveCheck() {
            addKeepaliveLog('执行保活检查...');

            // 使用 Service Worker 或 Notification API 检查后台消息
            if ('Notification' in window && Notification.permission === 'granted') {
                // 有通知权限，可以发送通知
                addKeepaliveLog('通知权限已获取，后台消息可正常接收');
            } else if ('Notification' in window && Notification.permission !== 'denied') {
                Notification.requestPermission().then(perm => {
                    if (perm === 'granted') {
                        addKeepaliveLog('通知权限已获取 ✓');
                    } else {
                        addKeepaliveLog('通知权限被拒绝，后台消息可能无法接收');
                    }
                });
            }

            // 使用 visibility change 事件确保后台也能运行
            addKeepaliveLog('保活心跳正常 ✓');
        }

        // 页面可见性变化时记录日志
        document.addEventListener('visibilitychange', () => {
            if (keepaliveRunning) {
                if (document.hidden) {
                    addKeepaliveLog('页面进入后台，保活继续运行');
                } else {
                    addKeepaliveLog('页面回到前台');
                }
            }
        });

        // 测试后台消息
        document.getElementById('keepaliveTestBtn').addEventListener('click', () => {
            addKeepaliveLog('正在测试后台消息接收...');

            // 测试 Notification API
            if ('Notification' in window) {
                if (Notification.permission === 'granted') {
                    new Notification('小兔板栗', {
                                body: '后台消息测试成功！你可以在后台收到角色消息。',
                                icon: '🔔'
                            });
                    addKeepaliveLog('✅ 测试通知已发送，请检查系统通知');
                    showToast('测试通知已发送');
                } else if (Notification.permission !== 'denied') {
                    Notification.requestPermission().then(perm => {
                        if (perm === 'granted') {
                            new Notification('小兔板栗', {
                                body: '后台消息测试成功！',
                                icon: '🔔'
                            });
                            addKeepaliveLog('✅ 通知权限已获取并发送测试通知');
                            showToast('测试通知已发送');
                        } else {
                            addKeepaliveLog('❌ 通知权限被拒绝，无法发送测试');
                            showToast('通知权限被拒绝');
                        }
                    });
                } else {
                    addKeepaliveLog('❌ 通知权限已被禁止，请在浏览器设置中开启');
                    showToast('请在浏览器设置中允许通知');
                }
            } else {
                addKeepaliveLog('❌ 当前浏览器不支持通知功能');
                showToast('当前浏览器不支持通知');
            }
        });

        // ========== MiniMax语音页面 ==========
        // 打开
        document.getElementById('openMiniMaxSettings').addEventListener('click', () => {
            document.getElementById('minimaxPage').classList.add('open');
            loadMiniMaxSettings();
        });

        // 返回
        document.getElementById('minimaxBack').addEventListener('click', () => {
            document.getElementById('minimaxPage').classList.remove('open');
        });

        function loadMiniMaxSettings() {
            const config = safeParseJSON(localStorage.getItem('minimaxConfig'));
            document.getElementById('minimaxUrl').value = config.url || '';
            document.getElementById('minimaxKey').value = config.key || '';
            document.getElementById('minimaxModel').value = config.model || 'speech-01-turbo';
            document.getElementById('minimaxVoice').value = config.voice || '';
            document.getElementById('minimaxSpeed').value = config.speed || '';
            updateMiniMaxStatus();
        }

        function updateMiniMaxStatus() {
            const config = safeParseJSON(localStorage.getItem('minimaxConfig'));
            const indicator = document.getElementById('minimaxStatusIndicator');
            if (config.url && config.key) {
                indicator.textContent = '已配置';
                indicator.style.color = '#34C759';
            } else {
                indicator.textContent = '未配置';
                indicator.style.color = '#8E8E93';
            }
        }

        function showMiniMaxStatus(msg, type) {
            const el = document.getElementById('minimaxStatus');
            el.textContent = msg;
            el.className = 'minimax-status show ' + type;
        }

        // 测试语音
        document.getElementById('minimaxTestBtn').addEventListener('click', async () => {
            const url = document.getElementById('minimaxUrl').value.trim();
            const key = document.getElementById('minimaxKey').value.trim();
            const model = document.getElementById('minimaxModel').value;
            const voice = document.getElementById('minimaxVoice').value.trim() || 'male-qn-qingse';
            const speed = parseFloat(document.getElementById('minimaxSpeed').value) || 1.0;

            if (!url || !key) {
                showMiniMaxStatus('请先填写 API 网址和密钥', 'error');
                return;
            }

            showMiniMaxStatus('正在生成语音...', 'success');

            try {
                const resp = await fetch(url + '/v1/audio/speech', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + key
                    },
                    body: JSON.stringify({
                        model: model,
                        input: '你好，这是一条语音测试消息。',
                        voice: voice,
                        speed: speed
                    })
                });

                if (!resp.ok) {
                    const errText = await resp.text();
                    throw new Error('HTTP ' + resp.status + ': ' + errText.substring(0, 80));
                }

                const blob = await resp.blob();
                const audioUrl = URL.createObjectURL(blob);
                const audio = new Audio(audioUrl);
                audio.play();
                showMiniMaxStatus('✅ 语音测试成功，正在播放', 'success');
            } catch (e) {
                showMiniMaxStatus('❌ 语音测试失败: ' + e.message, 'error');
            }
        });

        // 保存设置
        document.getElementById('minimaxSaveBtn').addEventListener('click', () => {
            const url = document.getElementById('minimaxUrl').value.trim();
            const key = document.getElementById('minimaxKey').value.trim();
            const model = document.getElementById('minimaxModel').value;
            const voice = document.getElementById('minimaxVoice').value.trim();
            const speed = parseFloat(document.getElementById('minimaxSpeed').value) || 1.0;

            if (!url || !key) {
                showMiniMaxStatus('请先填写 API 网址和密钥', 'error');
                return;
            }

            localStorage.setItem('minimaxConfig', JSON.stringify({ url, key, model, voice, speed }));
            updateMiniMaxStatus();
            showMiniMaxStatus('✅ MiniMax 语音设置已保存', 'success');
        });

        // ========== 全屏模式页面 ==========
        const phoneContainer = document.querySelector('.phone-container');

        // ========== 全局美化页面 ==========
        // 返回
        document.getElementById('themeBack').addEventListener('click', () => {
            document.getElementById('themePage').classList.remove('open');
        });

        function updateThemeStatusIndicator() {
            const css = localStorage.getItem('customThemeCss') || '';
            const indicator = document.getElementById('themeStatusIndicator') || document.getElementById('beautifyThemeStatus');
            if (!indicator) return;
            if (css.trim()) {
                indicator.textContent = '已设置';
                indicator.style.color = '#34C759';
            } else {
                indicator.textContent = '未设置';
                indicator.style.color = '#8E8E93';
            }
        }

        // 保存
        document.getElementById('themeSaveBtn').addEventListener('click', () => {
            const css = document.getElementById('themeCssInput').value.trim();
            if (!css) {
                showToast('请先输入CSS代码');
                return;
            }
            localStorage.setItem('customThemeCss', css);

            // 应用全局
            let globalThemeStyle = document.getElementById('globalThemeStyle');
            if (!globalThemeStyle) {
                globalThemeStyle = document.createElement('style');
                globalThemeStyle.id = 'globalThemeStyle';
                document.head.appendChild(globalThemeStyle);
            }
            globalThemeStyle.textContent = css;

            updateThemeStatusIndicator();
            showToast('美化设置已保存并应用');
        });

        // 恢复默认
        document.getElementById('themeResetBtn').addEventListener('click', () => {
            localStorage.removeItem('customThemeCss');
            const globalThemeStyle = document.getElementById('globalThemeStyle');
            if (globalThemeStyle) globalThemeStyle.remove();
            const previewStyle = document.getElementById('themePreviewStyle');
            if (previewStyle) previewStyle.remove();

            document.getElementById('themeCssInput').value = '';
            updateThemeStatusIndicator();
            showToast('已恢复默认样式');
        });

        // 页面加载时恢复已保存的美化CSS
        (function restoreTheme() {
            const css = localStorage.getItem('customThemeCss') || '';
            if (css.trim()) {
                let globalThemeStyle = document.createElement('style');
                globalThemeStyle.id = 'globalThemeStyle';
                globalThemeStyle.textContent = css;
                document.head.appendChild(globalThemeStyle);
            }
            updateThemeStatusIndicator();
        })();

        // ========== 全局版本号配置 ==========
        // 固定版本号为 0.1.25
        const APP_VERSION = '0.1.29';
        
        // ========== 数据管理页面 ==========
        // 自动更新页面上的版本号显示
        document.querySelectorAll('.version-number').forEach(el => {
            el.textContent = APP_VERSION;
        });
        
        // 打开数据管理页面
        document.getElementById('openDataManagement').addEventListener('click', () => {
            document.getElementById('dataManagementPage').classList.add('open');
            updateDataStats();
        });

        // 返回
        document.getElementById('dataManagementBack').addEventListener('click', () => {
            document.getElementById('dataManagementPage').classList.remove('open');
        });

        // 更新数据统计
        function updateDataStats() {
            const count = localStorage.length;
            document.getElementById('localStorageCount').textContent = count;
            
            // 计算存储大小
            let totalSize = 0;
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const value = localStorage.getItem(key);
                totalSize += (key.length + value.length) * 2; // UTF-16编码，每字符2字节
            }
            const sizeKB = (totalSize / 1024).toFixed(2);
            document.getElementById('localStorageSize').textContent = sizeKB + ' KB';
        }

        // 导出备份
        document.getElementById('exportBackupBtn').addEventListener('click', () => {
            try {
                const backupData = {
                    version: APP_VERSION,
                    exportTime: new Date().toISOString(),
                    data: {}
                };
                
                // 导出所有localStorage数据
                for (let i = 0; i < localStorage.length; i++) {
                    const key = localStorage.key(i);
                    const value = localStorage.getItem(key);
                    backupData.data[key] = value;
                }
                
                // 创建JSON文件
                const jsonStr = JSON.stringify(backupData, null, 2);
                const blob = new Blob([jsonStr], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                
                // 创建下载链接
                const a = document.createElement('a');
                a.href = url;
                a.download = `小兔板栗备份_${new Date().toISOString().slice(0,10)}.json`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                
                showToast('备份已导出');
            } catch (e) {
                console.error('Export error:', e);
                showToast('导出失败');
            }
        });

        // 导入备份
        document.getElementById('importBackupBtn').addEventListener('click', () => {
            document.getElementById('importBackupInput').click();
        });

        document.getElementById('importBackupInput').addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const backupData = JSON.parse(event.target.result);
                    
                    // 验证备份文件格式
                    if (!backupData.data) {
                        showToast('无效的备份文件');
                        return;
                    }
                    
                    // 导入数据
                    for (const key in backupData.data) {
                        localStorage.setItem(key, backupData.data[key]);
                    }
                    
                    updateDataStats();
                    showToast('备份已导入');
                    
                    // 刷新页面以应用导入的数据
                    setTimeout(() => {
                        if (confirm('数据已导入，是否刷新页面以应用更改？')) {
                            location.reload();
                        }
                    }, 500);
                } catch (e) {
                    console.error('Import error:', e);
                    showToast('导入失败：文件格式错误');
                }
            };
            reader.readAsText(file);
            
            // 清空input以便再次选择
            e.target.value = '';
        });

        // 清除所有数据
        document.getElementById('clearAllDataBtn').addEventListener('click', () => {
            if (confirm('确定要清除所有数据吗？此操作不可恢复！')) {
                if (confirm('再次确认：清除所有数据将删除您的所有设置、聊天记录等，确定继续吗？')) {
                    localStorage.clear();
                    updateDataStats();
                    showToast('所有数据已清除');
                    
                    // 刷新页面
                    setTimeout(() => {
                        location.reload();
                    }, 1000);
                }
            }
        });

        // ========== 字体设置页面 ==========
        let uploadedFontData = null;

        // 返回
        document.getElementById('fontBack').addEventListener('click', () => {
            document.getElementById('fontPage').classList.remove('open');
        });

        // 加载已保存的字体设置
        function loadFontSettings() {
            const config = safeParseJSON(localStorage.getItem('fontConfig'));
            document.getElementById('fontUrl').value = config.url || '';
            document.getElementById('fontUrlName').value = config.urlName || '';
            document.getElementById('fontCss').value = config.css || '';
            document.getElementById('fontFileName').value = config.fileName || '';
            updateFontStatusIndicator();
        }

        function updateFontStatusIndicator() {
            const config = safeParseJSON(localStorage.getItem('fontConfig'));
            const indicator = document.getElementById('fontStatusIndicator') || document.getElementById('beautifyFontStatus');
            if (!indicator) return;
            if (config.fontFamily) {
                indicator.textContent = config.fontFamily;
                indicator.style.color = '#34C759';
            } else {
                indicator.textContent = '默认';
                indicator.style.color = '#8E8E93';
            }
        }

        // 导入字体文件
        const fontFileInput = document.createElement('input');
        fontFileInput.type = 'file';
        fontFileInput.accept = '.ttf,.otf,.woff,.woff2';
        fontFileInput.style.display = 'none';
        document.body.appendChild(fontFileInput);

        document.getElementById('fontUploadBtn').addEventListener('click', () => {
            fontFileInput.click();
        });

        fontFileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    uploadedFontData = event.target.result;
                    // 自动提取字体名称
                    const name = file.name.replace(/\.(ttf|otf|woff|woff2)$/i, '');
                    document.getElementById('fontFileName').value = name;
                    document.getElementById('fontUploadText').textContent = '✓ ' + file.name;
                    document.getElementById('fontUploadBtn').classList.add('has-file');
                    // 实时预览
                    applyFontPreview(name, uploadedFontData, 'base64');
                };
                reader.readAsDataURL(file);
            }
            fontFileInput.value = '';
        });

        // 字体链接输入时实时预览
        document.getElementById('fontUrl').addEventListener('input', () => {
            const url = document.getElementById('fontUrl').value.trim();
            const name = document.getElementById('fontUrlName').value.trim();
            if (url && name) {
                applyFontPreview(name, url, 'url');
            }
        });

        document.getElementById('fontUrlName').addEventListener('input', () => {
            const url = document.getElementById('fontUrl').value.trim();
            const name = document.getElementById('fontUrlName').value.trim();
            if (url && name) {
                applyFontPreview(name, url, 'url');
            }
        });

        // 自定义CSS输入时实时预览
        document.getElementById('fontCss').addEventListener('input', () => {
            const css = document.getElementById('fontCss').value.trim();
            if (css) {
                applyFontPreviewCss(css);
            }
        });

        // 实时预览字体
        function applyFontPreview(fontName, src, type) {
            // 移除旧的预览style
            let previewStyle = document.getElementById('fontPreviewStyle');
            if (!previewStyle) {
                previewStyle = document.createElement('style');
                previewStyle.id = 'fontPreviewStyle';
                document.head.appendChild(previewStyle);
            }
            let fontFace = '';
            if (type === 'base64') {
                fontFace = `@font-face { font-family: '${fontName}'; src: url('${src}') format('truetype'); }`;
            } else {
                fontFace = `@font-face { font-family: '${fontName}'; src: url('${src}'); }`;
            }
            previewStyle.textContent = fontFace + ` #fontPreviewText { font-family: '${fontName}' !important; }`;
        }

        function applyFontPreviewCss(css) {
            let previewStyle = document.getElementById('fontPreviewStyle');
            if (!previewStyle) {
                previewStyle = document.createElement('style');
                previewStyle.id = 'fontPreviewStyle';
                document.head.appendChild(previewStyle);
            }
            // 提取font-family名称用于预览
            const match = css.match(/font-family\s*:\s*['"]?([^'";]+)/);
            const familyName = match ? match[1].trim() : 'CustomFont';
            previewStyle.textContent = css + ` #fontPreviewText { font-family: '${familyName}' !important; }`;
        }

        // 保存并应用字体
        document.getElementById('fontSaveBtn').addEventListener('click', () => {
            const url = document.getElementById('fontUrl').value.trim();
            const urlName = document.getElementById('fontUrlName').value.trim();
            const css = document.getElementById('fontCss').value.trim();
            const fileName = document.getElementById('fontFileName').value.trim();

            let fontFamily = '';
            let globalStyle = '';

            // 优先级：CSS > 字体文件 > 链接
            if (css) {
                const match = css.match(/font-family\s*:\s*['"]?([^'";]+)/);
                fontFamily = match ? match[1].trim() : 'CustomFont';
                globalStyle = css;
            } else if (uploadedFontData && fileName) {
                fontFamily = fileName;
                globalStyle = `@font-face { font-family: '${fileName}'; src: url('${uploadedFontData}') format('truetype'); }`;
            } else if (url && urlName) {
                fontFamily = urlName;
                globalStyle = `@font-face { font-family: '${urlName}'; src: url('${url}'); }`;
            } else {
                showToast('请先选择一种字体导入方式');
                return;
            }

            // 应用全局字体
            let globalFontStyle = document.getElementById('globalFontStyle');
            if (!globalFontStyle) {
                globalFontStyle = document.createElement('style');
                globalFontStyle.id = 'globalFontStyle';
                document.head.appendChild(globalFontStyle);
            }
            globalFontStyle.textContent = globalStyle + ` * { font-family: '${fontFamily}' !important; }`;

            // 保存配置
            const config = { fontFamily, url, urlName, css, fileName };
            localStorage.setItem('fontConfig', JSON.stringify(config));

            // 如果是字体文件，保存base64数据
            if (uploadedFontData) {
                localStorage.setItem('fontFileData', uploadedFontData);
            }

            updateFontStatusIndicator();
            showToast('字体已应用');
        });

        // 恢复默认字体
        document.getElementById('fontResetBtn').addEventListener('click', () => {
            const globalFontStyle = document.getElementById('globalFontStyle');
            if (globalFontStyle) globalFontStyle.remove();
            const previewStyle = document.getElementById('fontPreviewStyle');
            if (previewStyle) previewStyle.remove();

            localStorage.removeItem('fontConfig');
            localStorage.removeItem('fontFileData');

            document.getElementById('fontUrl').value = '';
            document.getElementById('fontUrlName').value = '';
            document.getElementById('fontCss').value = '';
            document.getElementById('fontFileName').value = '';
            document.getElementById('fontUploadText').textContent = '点击选择字体文件（.ttf / .otf / .woff）';
            document.getElementById('fontUploadBtn').classList.remove('has-file');
            uploadedFontData = null;

            updateFontStatusIndicator();
            showToast('已恢复默认字体');
        });

        // 页面加载时恢复已保存的字体
        (function restoreFont() {
            const config = safeParseJSON(localStorage.getItem('fontConfig'));
            if (config.fontFamily) {
                let globalStyle = '';
                if (config.css) {
                    globalStyle = config.css;
                } else if (config.fileName && localStorage.getItem('fontFileData')) {
                    globalStyle = `@font-face { font-family: '${config.fileName}'; src: url('${localStorage.getItem('fontFileData')}') format('truetype'); }`;
                } else if (config.url && config.urlName) {
                    globalStyle = `@font-face { font-family: '${config.urlName}'; src: url('${config.url}'); }`;
                }
                if (globalStyle) {
                    let globalFontStyle = document.getElementById('globalFontStyle');
                    if (!globalFontStyle) {
                        globalFontStyle = document.createElement('style');
                        globalFontStyle.id = 'globalFontStyle';
                        document.head.appendChild(globalFontStyle);
                    }
                    globalFontStyle.textContent = globalStyle + ` * { font-family: '${config.fontFamily}' !important; }`;
                }
            }
        })();

        // ========== 壁纸设置页面 ==========
        let wallpaperTarget = null;

        // 返回
        document.getElementById('wallpaperBack').addEventListener('click', () => {
            document.getElementById('wallpaperPage').classList.remove('open');
        });

        // 壁纸文件输入
        const wallpaperFileInput = document.createElement('input');
        wallpaperFileInput.type = 'file';
        wallpaperFileInput.accept = 'image/*';
        wallpaperFileInput.style.display = 'none';
        document.body.appendChild(wallpaperFileInput);

        // 点击壁纸预览更换
        document.getElementById('wpHomePreview').addEventListener('click', () => {
            wallpaperTarget = 'home';
            wallpaperFileInput.click();
        });
        document.getElementById('wpLockPreview').addEventListener('click', () => {
            wallpaperTarget = 'lock';
            wallpaperFileInput.click();
        });
        document.getElementById('wpChatPreview').addEventListener('click', () => {
            wallpaperTarget = 'chat';
            wallpaperFileInput.click();
        });

        wallpaperFileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file && wallpaperTarget) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const imgUrl = event.target.result;

                    if (wallpaperTarget === 'home') {
                        document.getElementById('homeScreen').style.backgroundImage = `url('${imgUrl}')`;
                        document.getElementById('wpHomeImg').src = imgUrl;
                        localStorage.setItem('wpHome', imgUrl);
                        showToast('主屏幕壁纸已更换');
                    } else if (wallpaperTarget === 'lock') {
                        document.getElementById('lockScreen').style.backgroundImage = `url('${imgUrl}')`;
                        document.getElementById('wpLockImg').src = imgUrl;
                        localStorage.setItem('wpLock', imgUrl);
                        showToast('锁屏壁纸已更换');
                    } else if (wallpaperTarget === 'chat') {
                        document.getElementById('wpChatImg').src = imgUrl;
                        localStorage.setItem('wpChat', imgUrl);
                        showToast('聊天壁纸已更换');
                        // 如果当前有打开的聊天页面，更新聊天壁纸
                        const chat = chatList[currentChatIndex];
                        if (chat) {
                            applyChatWallpaper(chat.contactName);
                        }
                    }
                };
                reader.readAsDataURL(file);
            }
            wallpaperFileInput.value = '';
        });

        // 加载已保存的壁纸
        const savedWpHome = localStorage.getItem('wpHome');
        if (savedWpHome) {
            document.getElementById('homeScreen').style.backgroundImage = `url('${savedWpHome}')`;
            document.getElementById('wpHomeImg').src = savedWpHome;
        }
        const savedWpLock = localStorage.getItem('wpLock');
        if (savedWpLock) {
            document.getElementById('lockScreen').style.backgroundImage = `url('${savedWpLock}')`;
            document.getElementById('wpLockImg').src = savedWpLock;
        }
        const savedWpChat = localStorage.getItem('wpChat');
        if (savedWpChat) {
            document.getElementById('wpChatImg').src = savedWpChat;
        }

        // ========== API设置页面 ==========
        // 打开API设置
        document.getElementById('openApiSettings').addEventListener('click', () => {
            document.getElementById('apiPage').classList.add('open');
            loadApiSettings();
        });

        // 返回
        document.getElementById('apiBack').addEventListener('click', () => {
            document.getElementById('apiPage').classList.remove('open');
        });

        // 加载已保存的API设置
        function loadApiSettings() {
            const config = safeParseJSON(localStorage.getItem('apiConfig'));
            document.getElementById('apiUrl').value = config.url || '';
            document.getElementById('apiKey').value = config.key || '';
            const select = document.getElementById('apiModel');
            if (config.model) {
                // 确保选项存在
                let exists = false;
                for (let opt of select.options) {
                    if (opt.value === config.model) { exists = true; break; }
                }
                if (!exists) {
                    const opt = document.createElement('option');
                    opt.value = config.model;
                    opt.textContent = config.model;
                    select.appendChild(opt);
                }
                select.value = config.model;
            } else {
                select.value = '';
            }
            // 立即更新状态指示器
            updateApiStatusIndicator();
        }
        
        // 页面加载时立即加载API设置
        loadApiSettings();

        // 更新设置页API状态指示
        function updateApiStatusIndicator() {
            const config = safeParseJSON(localStorage.getItem('apiConfig'));
            const indicator = document.getElementById('apiStatusIndicator');
            if (config.url && config.key && config.model) {
                indicator.textContent = '已配置';
                indicator.style.color = '#34C759';
            } else {
                indicator.textContent = '未配置';
                indicator.style.color = '#8E8E93';
            }
        }

        // 显示API状态
        function showApiStatus(msg, type) {
            const el = document.getElementById('apiStatus');
            el.textContent = msg;
            el.className = 'api-status show ' + type;
            if (type === 'loading') {
                setTimeout(() => {
                    if (el.classList.contains('loading')) {
                        el.classList.remove('show');
                    }
                }, 15000);
            }
        }

        function hideApiStatus() {
            document.getElementById('apiStatus').classList.remove('show');
        }

        // 测试连接
        document.getElementById('apiTestBtn').addEventListener('click', async () => {
            const url = document.getElementById('apiUrl').value.trim();
            const key = document.getElementById('apiKey').value.trim();
            if (!url || !key) {
                showApiStatus('请先填写 API 网址和密钥', 'error');
                return;
            }
            showApiStatus('正在测试连接...', 'loading');
            try {
                const resp = await fetch(url + '/models', {
                    method: 'GET',
                    headers: { 'Authorization': 'Bearer ' + key }
                });
                if (resp.ok) {
                    showApiStatus('✅ 连接成功！API 可用', 'success');
                } else {
                    const err = await resp.text();
                    showApiStatus('❌ 连接失败 (' + resp.status + '): ' + err.substring(0, 80), 'error');
                }
            } catch (e) {
                showApiStatus('❌ 连接失败: ' + e.message, 'error');
            }
        });

        // 拉取模型
        document.getElementById('apiPullBtn').addEventListener('click', async () => {
            const url = document.getElementById('apiUrl').value.trim();
            const key = document.getElementById('apiKey').value.trim();
            if (!url || !key) {
                showApiStatus('请先填写 API 网址和密钥', 'error');
                return;
            }
            showApiStatus('正在拉取模型列表...', 'loading');
            try {
                const resp = await fetch(url + '/models', {
                    method: 'GET',
                    headers: { 'Authorization': 'Bearer ' + key }
                });
                if (!resp.ok) {
                    throw new Error('HTTP ' + resp.status);
                }
                const data = await resp.json();
                const models = data.data || data.models || [];
                if (models.length === 0) {
                    showApiStatus('未找到可用模型', 'error');
                    return;
                }

                // 保存当前选中的模型
                const select = document.getElementById('apiModel');
                const currentSelected = select.value;
                
                // 填充下拉框
                select.innerHTML = '<option value="">请选择模型</option>';
                models.forEach(m => {
                    const id = m.id || m.name || m;
                    const opt = document.createElement('option');
                    opt.value = id;
                    opt.textContent = id;
                    select.appendChild(opt);
                });
                
                // 恢复之前选中的模型（如果存在）
                if (currentSelected) {
                    select.value = currentSelected;
                }

                // 填充模型列表
                const list = document.getElementById('apiModelsList');
                const title = document.getElementById('apiModelsTitle');
                list.innerHTML = '';
                
                // 拉取后总是显示列表，让用户可以选择
                list.classList.add('show');
                title.classList.add('show');

                models.forEach(m => {
                    const id = m.id || m.name || m;
                    const item = document.createElement('div');
                    item.className = 'api-model-item';
                    if (id === currentSelected) item.classList.add('selected');
                    item.textContent = id;
                    item.addEventListener('click', () => {
                        document.querySelectorAll('.api-model-item').forEach(i => i.classList.remove('selected'));
                        item.classList.add('selected');
                        select.value = id;
                        // 选择后隐藏列表
                        list.classList.remove('show');
                        title.classList.remove('show');
                    });
                    list.appendChild(item);
                });

                showApiStatus('✅ 成功拉取 ' + models.length + ' 个模型', 'success');
            } catch (e) {
                showApiStatus('❌ 拉取失败: ' + e.message, 'error');
            }
        });

        // 下拉框选择模型时隐藏列表
        document.getElementById('apiModel').addEventListener('change', () => {
            document.getElementById('apiModelsList').classList.remove('show');
            document.getElementById('apiModelsTitle').classList.remove('show');
        });

        // 保存设置
        document.getElementById('apiSaveBtn').addEventListener('click', () => {
            const url = document.getElementById('apiUrl').value.trim();
            const key = document.getElementById('apiKey').value.trim();
            const model = document.getElementById('apiModel').value;

            if (!url || !key) {
                showApiStatus('请先填写 API 网址和密钥', 'error');
                return;
            }
            if (!model) {
                showApiStatus('请先选择一个模型', 'error');
                return;
            }

            const config = { url, key, model };
            localStorage.setItem('apiConfig', JSON.stringify(config));
            showApiStatus('✅ 设置已保存！', 'success');
            updateApiStatusIndicator();
        });

        // ========== 微信页面逻辑 ==========
        // 返回按钮
        document.getElementById('wechatBack').addEventListener('click', () => {
            document.getElementById('wechatPage').classList.remove('open');
        });

        // 头像更换
        const wechatAvatarEl = document.getElementById('wechatMyAvatar');
        const wechatAvatarInput = document.getElementById('wechatAvatarInput');
        wechatAvatarEl.addEventListener('click', () => {
            wechatAvatarInput.click();
        });
        wechatAvatarInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (ev) => {
                wechatAvatarEl.innerHTML = '';
                wechatAvatarEl.style.background = 'none';
                wechatAvatarEl.style.padding = '0';
                const img = document.createElement('img');
                img.src = ev.target.result;
                img.style.cssText = 'width:100%;height:100%;object-fit:cover;border-radius:8px;';
                wechatAvatarEl.appendChild(img);
                localStorage.setItem('wechatAvatar', ev.target.result);
            };
            reader.readAsDataURL(file);
        });
        // 恢复已保存头像
        const wechatSavedAvatar = localStorage.getItem('wechatAvatar');
        if (wechatSavedAvatar) {
            wechatAvatarEl.innerHTML = '';
            wechatAvatarEl.style.background = 'none';
            wechatAvatarEl.style.padding = '0';
            const img = document.createElement('img');
            img.src = savedAvatar;
            img.style.cssText = 'width:100%;height:100%;object-fit:cover;border-radius:8px;';
            wechatAvatarEl.appendChild(img);
        }

        // 昵称编辑
        const wechatNameEl = document.getElementById('wechatMyName');
        const wechatSavedName = localStorage.getItem('wechatName');
        if (wechatSavedName) wechatNameEl.textContent = wechatSavedName;
        wechatNameEl.addEventListener('focus', () => { wechatNameEl.style.borderBottomColor = '#07C160'; });
        wechatNameEl.addEventListener('blur', () => {
            wechatNameEl.style.borderBottomColor = 'transparent';
            localStorage.setItem('wechatName', wechatNameEl.textContent);
        });
        wechatNameEl.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); wechatNameEl.blur(); } });

        // 微信号编辑
        const wxIdEl = document.getElementById('wechatMyWxId');
        const savedWxId = localStorage.getItem('wechatWxId');
        if (savedWxId) wxIdEl.textContent = savedWxId;
        wxIdEl.addEventListener('focus', () => { wxIdEl.style.borderBottomColor = '#07C160'; });
        wxIdEl.addEventListener('blur', () => {
            wxIdEl.style.borderBottomColor = 'transparent';
            localStorage.setItem('wechatWxId', wxIdEl.textContent);
        });
        wxIdEl.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); wxIdEl.blur(); } });

        // 服务页面
        document.getElementById('openWechatService').addEventListener('click', () => {
            document.getElementById('wechatServicePage').classList.add('open');
        });
        document.getElementById('wechatServiceBack').addEventListener('click', () => {
            document.getElementById('wechatServicePage').classList.remove('open');
        });

        // ========== 钱包功能 ==========
        const walletBalanceEl = document.getElementById('walletBalance');
        let walletBalance = parseFloat(localStorage.getItem('walletBalance')) || 5000;
        let lingqiantongBalance = parseFloat(localStorage.getItem('lingqiantongBalance')) || 0;
        let selectedRechargeSource = null;
        let selectedWithdrawTarget = null;
        
        function updateWalletBalance() {
            walletBalanceEl.textContent = '¥' + walletBalance.toLocaleString('zh-CN', {minimumFractionDigits: 2, maximumFractionDigits: 2});
            localStorage.setItem('walletBalance', walletBalance);
        }
        updateWalletBalance();

        document.getElementById('openWallet').addEventListener('click', () => {
            document.getElementById('wechatWalletPage').classList.add('open');
            updateWalletBalance();
        });
        document.getElementById('walletBack').addEventListener('click', () => {
            document.getElementById('wechatWalletPage').classList.remove('open');
        });

        // ========== 零钱通功能 ==========
        function updateLingqiantongBalance() {
            document.getElementById('lingqiantongBalance').textContent = '¥' + lingqiantongBalance.toLocaleString('zh-CN', {minimumFractionDigits: 2, maximumFractionDigits: 2});
            localStorage.setItem('lingqiantongBalance', lingqiantongBalance);
        }

        document.getElementById('openLingqiantong').addEventListener('click', () => {
            document.getElementById('wechatLingqiantongPage').classList.add('open');
            updateLingqiantongBalance();
        });
        document.getElementById('lingqiantongBack').addEventListener('click', () => {
            document.getElementById('wechatLingqiantongPage').classList.remove('open');
        });

        // 零钱通金额验证
        function validateLingqiantongAmount() {
            const hintEl = document.getElementById('lingqiantongHint');
            const inputEl = document.getElementById('lingqiantongAmount');
            const num = parseFloat(inputEl.value);
            if (isNaN(num) || num <= 0) {
                hintEl.textContent = '请输入有效金额';
                hintEl.style.color = '#FF3B30';
                return null;
            }
            return { num, hintEl, inputEl };
        }

        // 零钱通转入（从钱包转入零钱通）
        document.getElementById('lingqiantongRechargeBtn').addEventListener('click', () => {
            const result = validateLingqiantongAmount();
            if (!result) return;
            const { num, hintEl, inputEl } = result;
            if (num > walletBalance) {
                hintEl.textContent = '钱包余额不足，当前 ¥' + walletBalance.toLocaleString('zh-CN', {minimumFractionDigits: 2});
                hintEl.style.color = '#FF3B30';
                return;
            }
            walletBalance -= num;
            lingqiantongBalance += num;
            updateWalletBalance();
            updateLingqiantongBalance();
            localStorage.setItem('walletBalance', walletBalance);
            localStorage.setItem('lingqiantongBalance', lingqiantongBalance);
            inputEl.value = '';
            hintEl.textContent = '转入成功！';
            hintEl.style.color = '#07C160';
        });

        // 零钱通转出（从零钱通转出到钱包）
        document.getElementById('lingqiantongWithdrawBtn').addEventListener('click', () => {
            const result = validateLingqiantongAmount();
            if (!result) return;
            const { num, hintEl, inputEl } = result;
            if (num > lingqiantongBalance) {
                hintEl.textContent = '零钱通余额不足，当前 ¥' + lingqiantongBalance.toLocaleString('zh-CN', {minimumFractionDigits: 2});
                hintEl.style.color = '#FF3B30';
                return;
            }
            lingqiantongBalance -= num;
            walletBalance += num;
            updateWalletBalance();
            updateLingqiantongBalance();
            localStorage.setItem('walletBalance', walletBalance);
            localStorage.setItem('lingqiantongBalance', lingqiantongBalance);
            inputEl.value = '';
            hintEl.textContent = '转出成功！';
            hintEl.style.color = '#07C160';
        });

        // ========== 充值功能 ==========
        function renderRechargeOptions() {
            const optionsEl = document.getElementById('rechargeOptions');
            let html = '';
            
            // 零钱通选项
            html += `
                <div class="wechat-recharge-option" data-source="lingqiantong">
                    <div class="wechat-recharge-option-radio ${selectedRechargeSource === 'lingqiantong' ? 'selected' : ''}"></div>
                    <div class="wechat-recharge-option-info">
                        <div class="wechat-recharge-option-name">零钱通</div>
                        <div class="wechat-recharge-option-balance">余额 ¥${lingqiantongBalance.toLocaleString('zh-CN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                    </div>
                </div>
            `;
            
            // 银行卡选项
            bankCards.forEach((card, index) => {
                html += `
                    <div class="wechat-recharge-option" data-source="card-${index}">
                        <div class="wechat-recharge-option-radio ${selectedRechargeSource === 'card-' + index ? 'selected' : ''}"></div>
                        <div class="wechat-recharge-option-info">
                            <div class="wechat-recharge-option-name">${card.name} (${card.number})</div>
                            <div class="wechat-recharge-option-balance">${card.type} · 余额 ¥${parseFloat(card.balance).toLocaleString('zh-CN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                        </div>
                    </div>
                `;
            });
            
            optionsEl.innerHTML = html;
            
            // 绑定点击事件
            optionsEl.querySelectorAll('.wechat-recharge-option').forEach(opt => {
                opt.addEventListener('click', () => {
                    selectedRechargeSource = opt.dataset.source;
                    renderRechargeOptions();
                });
            });
        }

        document.getElementById('walletRechargeBtn').addEventListener('click', () => {
            document.getElementById('wechatRechargePage').classList.add('open');
            document.getElementById('rechargeAmount').value = '';
            selectedRechargeSource = null;
            renderRechargeOptions();
        });

        document.getElementById('rechargeBack').addEventListener('click', () => {
            document.getElementById('wechatRechargePage').classList.remove('open');
        });

        document.getElementById('rechargeSubmitBtn').addEventListener('click', () => {
            const amount = parseFloat(document.getElementById('rechargeAmount').value);
            if (isNaN(amount) || amount <= 0) {
                alert('请输入有效金额');
                return;
            }
            if (!selectedRechargeSource) {
                alert('请选择充值方式');
                return;
            }
            
            if (selectedRechargeSource === 'lingqiantong') {
                if (amount > lingqiantongBalance) {
                    alert('零钱通余额不足');
                    return;
                }
                lingqiantongBalance -= amount;
                walletBalance += amount;
                localStorage.setItem('lingqiantongBalance', lingqiantongBalance);
            } else if (selectedRechargeSource.startsWith('card-')) {
                const cardIndex = parseInt(selectedRechargeSource.split('-')[1]);
                if (amount > bankCards[cardIndex].balance) {
                    alert('银行卡余额不足');
                    return;
                }
                bankCards[cardIndex].balance -= amount;
                walletBalance += amount;
                localStorage.setItem('bankCards', JSON.stringify(bankCards));
            }
            
            updateWalletBalance();
            document.getElementById('wechatRechargePage').classList.remove('open');
            alert('充值成功！');
        });

        // ========== 提现功能 ==========
        function renderWithdrawOptions() {
            const optionsEl = document.getElementById('withdrawOptions');
            document.getElementById('withdrawWalletBalance').textContent = '¥' + walletBalance.toLocaleString('zh-CN', {minimumFractionDigits: 2, maximumFractionDigits: 2});
            let html = '';
            
            // 零钱通选项
            html += `
                <div class="wechat-withdraw-option" data-target="lingqiantong">
                    <div class="wechat-withdraw-option-radio ${selectedWithdrawTarget === 'lingqiantong' ? 'selected' : ''}"></div>
                    <div class="wechat-withdraw-option-info">
                        <div class="wechat-withdraw-option-name">零钱通</div>
                    </div>
                </div>
            `;
            
            // 银行卡选项
            bankCards.forEach((card, index) => {
                html += `
                    <div class="wechat-withdraw-option" data-target="card-${index}">
                        <div class="wechat-withdraw-option-radio ${selectedWithdrawTarget === 'card-' + index ? 'selected' : ''}"></div>
                        <div class="wechat-withdraw-option-info">
                            <div class="wechat-withdraw-option-name">${card.name} (${card.number})</div>
                        </div>
                    </div>
                `;
            });
            
            optionsEl.innerHTML = html;
            
            // 绑定点击事件
            optionsEl.querySelectorAll('.wechat-withdraw-option').forEach(opt => {
                opt.addEventListener('click', () => {
                    selectedWithdrawTarget = opt.dataset.target;
                    renderWithdrawOptions();
                });
            });
        }

        document.getElementById('walletWithdrawBtn').addEventListener('click', () => {
            document.getElementById('wechatWithdrawPage').classList.add('open');
            document.getElementById('withdrawAmount').value = '';
            selectedWithdrawTarget = null;
            renderWithdrawOptions();
        });

        document.getElementById('withdrawBack').addEventListener('click', () => {
            document.getElementById('wechatWithdrawPage').classList.remove('open');
        });

        document.getElementById('withdrawSubmitBtn').addEventListener('click', () => {
            const amount = parseFloat(document.getElementById('withdrawAmount').value);
            if (isNaN(amount) || amount <= 0) {
                alert('请输入有效金额');
                return;
            }
            if (amount > walletBalance) {
                alert('零钱余额不足');
                return;
            }
            if (!selectedWithdrawTarget) {
                alert('请选择提现方式');
                return;
            }
            
            walletBalance -= amount;
            
            if (selectedWithdrawTarget === 'lingqiantong') {
                lingqiantongBalance += amount;
                localStorage.setItem('lingqiantongBalance', lingqiantongBalance);
            } else if (selectedWithdrawTarget.startsWith('card-')) {
                const cardIndex = parseInt(selectedWithdrawTarget.split('-')[1]);
                bankCards[cardIndex].balance += amount;
                localStorage.setItem('bankCards', JSON.stringify(bankCards));
            }
            
            updateWalletBalance();
            document.getElementById('wechatWithdrawPage').classList.remove('open');
            alert('提现成功！');
        });

        // ========== 银行卡功能 ==========
        let bankCards = JSON.parse(localStorage.getItem('bankCards')) || [];
        let editingCardIndex = -1;

        function renderBankCards() {
            const listEl = document.getElementById('bankCardsList');
            if (bankCards.length === 0) {
                listEl.innerHTML = '<div style="text-align:center;padding:40px;color:#999;">暂无银行卡，点击右上角添加</div>';
                return;
            }
            listEl.innerHTML = bankCards.map((card, index) => `
                <div class="wechat-bankcard-item">
                    <div class="wechat-bankcard-actions">
                        <button class="wechat-bankcard-action" onclick="editBankCard(${index})">编辑</button>
                        <button class="wechat-bankcard-action" onclick="deleteBankCard(${index})">删除</button>
                    </div>
                    <div class="wechat-bankcard-name">${card.name}</div>
                    <div class="wechat-bankcard-type">${card.type}</div>
                    <div class="wechat-bankcard-number">**** **** **** ${card.number}</div>
                    <div class="wechat-bankcard-balance">余额: ¥${parseFloat(card.balance).toLocaleString('zh-CN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                </div>
            `).join('');
        }

        window.editBankCard = function(index) {
            editingCardIndex = index;
            const card = bankCards[index];
            document.getElementById('bankCardName').value = card.name;
            document.getElementById('bankCardNumber').value = card.number;
            document.getElementById('bankCardType').value = card.type;
            document.getElementById('bankCardBalance').value = card.balance;
            document.getElementById('bankCardModalTitle').textContent = '编辑银行卡';
            document.getElementById('bankCardModal').classList.add('open');
        };

        window.deleteBankCard = function(index) {
            if (confirm('确定要删除这张银行卡吗？')) {
                bankCards.splice(index, 1);
                localStorage.setItem('bankCards', JSON.stringify(bankCards));
                renderBankCards();
            }
        };

        document.getElementById('openBankCards').addEventListener('click', () => {
            document.getElementById('wechatBankCardsPage').classList.add('open');
            renderBankCards();
        });
        document.getElementById('bankCardsBack').addEventListener('click', () => {
            document.getElementById('wechatBankCardsPage').classList.remove('open');
        });
        document.getElementById('addBankCardBtn').addEventListener('click', () => {
            editingCardIndex = -1;
            document.getElementById('bankCardName').value = '';
            document.getElementById('bankCardNumber').value = '';
            document.getElementById('bankCardType').value = '储蓄卡';
            document.getElementById('bankCardBalance').value = '';
            document.getElementById('bankCardModalTitle').textContent = '添加银行卡';
            document.getElementById('bankCardModal').classList.add('open');
        });
        document.getElementById('bankCardModalClose').addEventListener('click', () => {
            document.getElementById('bankCardModal').classList.remove('open');
        });
        document.getElementById('saveBankCardBtn').addEventListener('click', () => {
            const name = document.getElementById('bankCardName').value.trim();
            const number = document.getElementById('bankCardNumber').value.trim();
            const type = document.getElementById('bankCardType').value;
            const balance = parseFloat(document.getElementById('bankCardBalance').value) || 0;
            
            if (!name || !number) {
                alert('请填写银行名称和卡号');
                return;
            }
            if (number.length !== 4) {
                alert('请输入卡号后四位');
                return;
            }
            
            const card = { name, number, type, balance };
            if (editingCardIndex >= 0) {
                bankCards[editingCardIndex] = card;
            } else {
                bankCards.push(card);
            }
            localStorage.setItem('bankCards', JSON.stringify(bankCards));
            document.getElementById('bankCardModal').classList.remove('open');
            renderBankCards();
        });

        // ========== 收款码功能 ==========
        let qrcodeAmount = parseFloat(localStorage.getItem('qrcodeAmount')) || 0;

        function generateQRCode() {
            const canvas = document.createElement('canvas');
            canvas.width = 200;
            canvas.height = 200;
            const ctx = canvas.getContext('2d');
            
            // 生成随机二维码图案
            ctx.fillStyle = '#fff';
            ctx.fillRect(0, 0, 200, 200);
            ctx.fillStyle = '#000';
            
            const cellSize = 8;
            const cells = 25;
            
            // 定位角
            function drawPositionPattern(x, y) {
                ctx.fillRect(x * cellSize, y * cellSize, 7 * cellSize, 7 * cellSize);
                ctx.clearRect((x + 1) * cellSize, (y + 1) * cellSize, 5 * cellSize, 5 * cellSize);
                ctx.fillRect((x + 2) * cellSize, (y + 2) * cellSize, 3 * cellSize, 3 * cellSize);
            }
            
            drawPositionPattern(0, 0);
            drawPositionPattern(cells - 7, 0);
            drawPositionPattern(0, cells - 7);
            
            // 随机数据
            for (let i = 0; i < cells; i++) {
                for (let j = 0; j < cells; j++) {
                    if ((i < 7 && j < 7) || (i >= cells - 7 && j < 7) || (i < 7 && j >= cells - 7)) continue;
                    if (Math.random() > 0.5) {
                        ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
                    }
                }
            }
            
            return canvas.toDataURL();
        }

        function updateQRCode() {
            document.getElementById('qrcodeAmount').textContent = '¥' + qrcodeAmount.toLocaleString('zh-CN', {minimumFractionDigits: 2, maximumFractionDigits: 2});
            document.getElementById('qrcodeImage').innerHTML = `<img src="${generateQRCode()}" style="width:100%;height:100%;">`;
        }

        document.getElementById('openQRCode').addEventListener('click', () => {
            document.getElementById('wechatQRCodePage').classList.add('open');
            updateQRCode();
        });
        document.getElementById('qrcodeBack').addEventListener('click', () => {
            document.getElementById('wechatQRCodePage').classList.remove('open');
        });
        document.getElementById('refreshQRCodeBtn').addEventListener('click', () => {
            updateQRCode();
        });
        document.getElementById('qrcodeAmountInput').addEventListener('input', (e) => {
            qrcodeAmount = parseFloat(e.target.value) || 0;
            localStorage.setItem('qrcodeAmount', qrcodeAmount);
            updateQRCode();
        });
        document.getElementById('qrcodeAmountInput').value = qrcodeAmount || '';

        // ========== 联系人管理 ==========
        let wechatContacts = JSON.parse(localStorage.getItem('wechatContacts')) || [];
        let editingContactIndex = -1;
        let currentContactAvatar = '';
        let chatList = JSON.parse(localStorage.getItem('wechatChatList')) || [];
        let chatMessages = JSON.parse(localStorage.getItem('wechatChatMessages')) || {};
        let offlineMessages = {}; // 提前声明，供cleanupOrphanedChats使用
        
        // 防抖标志 - 防止重复发送/回复
        let isSendingMessage = false;
        let isReplyingMessage = false;
        let isOfflineSending = false;
        let isOfflineReplying = false;

        // 页面加载时自动清理已删除联系人的残留聊天数据
        (function cleanupOrphanedChats() {
            const contactNames = new Set(wechatContacts.map(c => c.name));
            let chatDirty = false;
            let msgDirty = false;
            let offlineDirty = false;
            // 收集需要清理的联系人名称
            const orphanedNames = [];
            chatList = chatList.filter(chat => {
                if (!contactNames.has(chat.contactName)) {
                    chatDirty = true;
                    orphanedNames.push(chat.contactName);
                    if (chatMessages[chat.contactName]) {
                        delete chatMessages[chat.contactName];
                        msgDirty = true;
                    }
                    if (offlineMessages[chat.contactName]) {
                        delete offlineMessages[chat.contactName];
                        offlineDirty = true;
                    }
                    return false;
                }
                return true;
            });
            if (chatDirty) localStorage.setItem('wechatChatList', JSON.stringify(chatList));
            if (msgDirty) localStorage.setItem('wechatChatMessages', JSON.stringify(chatMessages));
            if (offlineDirty) localStorage.setItem('wechatOfflineMessages', JSON.stringify(offlineMessages));
            // 清理残留的设置数据
            orphanedNames.forEach(name => {
                const keysToRemove = [];
                for (let i = 0; i < localStorage.length; i++) {
                    const key = localStorage.key(i);
                    if (key.startsWith('fortune_' + name + '_') || key.startsWith('events_' + name + '_') || key.startsWith('chatSettings_' + name) || key.startsWith('offlineBg_' + name) || key.startsWith('offlineCss_' + name)) {
                        keysToRemove.push(key);
                    }
                }
                keysToRemove.forEach(k => localStorage.removeItem(k));
            });
        })();

        function renderContactsList() {
            const listEl = document.getElementById('dynamicContactsList');
            if (wechatContacts.length === 0) {
                listEl.innerHTML = '';
                return;
            }
            // 按拼音首字母分组排序
            const sorted = [...wechatContacts].sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'));
            let html = '';
            let currentLetter = '';
            sorted.forEach((contact, sortedIndex) => {
                // 找到原始索引
                const originalIndex = wechatContacts.indexOf(contact);
                const firstChar = contact.remark || contact.name;
                const letter = firstChar.charAt(0).toUpperCase();
                if (letter !== currentLetter) {
                    currentLetter = letter;
                    html += `<div class="wechat-contact-section-title">${currentLetter}</div>`;
                }
                const avatarHtml = contact.avatar
                    ? `<img src="${contact.avatar}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'">`
                    : `<span style="color:#fff;font-size:16px;font-weight:bold;">${contact.name.charAt(0)}</span>`;
                const bgColor = contact.avatar ? 'none' : ['#07C160','#576B95','#FA9D3B','#E74C3C','#3498DB','#9B59B6','#1ABC9C'][originalIndex % 7];
                html += `
                    <div class="wechat-contact-item" data-contact-index="${originalIndex}">
                        <div class="wechat-contact-avatar" style="background:${bgColor};display:flex;align-items:center;justify-content:center;">${avatarHtml}</div>
                        <span class="wechat-contact-name">${contact.remark || contact.name}</span>
                    </div>
                `;
            });
            listEl.innerHTML = html;

            // 绑定点击事件
            listEl.querySelectorAll('.wechat-contact-item').forEach(item => {
                item.addEventListener('click', () => {
                    const idx = parseInt(item.dataset.contactIndex);
                    showContactDetail(idx);
                });
            });
        }

        function showContactDetail(index) {
            const contact = wechatContacts[index];
            if (!contact) return;
            editingContactIndex = index;
            const bodyEl = document.getElementById('contactProfileBody');
            const avatarBg = ['#07C160','#576B95','#FA9D3B','#E74C3C','#3498DB','#9B59B6','#1ABC9C'][index % 7];
            const avatarHtml = contact.avatar
                ? `<img src="${contact.avatar}" onerror="this.style.display='none'">`
                : `<div class="wechat-contact-profile-avatar-placeholder" style="background:${avatarBg}">${contact.name.charAt(0)}</div>`;
            const displayName = contact.remark || contact.name;
            
            bodyEl.innerHTML = `
                <div class="wechat-contact-profile-card">
                    <div class="wechat-contact-profile-top">
                        <div class="wechat-contact-profile-avatar">${avatarHtml}</div>
                        <div class="wechat-contact-profile-info">
                            <div class="wechat-contact-profile-name">${displayName}</div>
                            <div class="wechat-contact-profile-id" data-action="edit-wechatid" style="cursor:pointer;color:#576B95;">微信号：${contact.name}</div>
                        </div>
                    </div>
                </div>
                <div class="wechat-contact-profile-section">
                    <div class="wechat-contact-profile-item" data-action="edit-contact">
                        <span class="wechat-contact-profile-item-label">编辑联系人</span>
                        <span class="wechat-contact-profile-item-arrow">›</span>
                    </div>
                    <div class="wechat-contact-profile-item" data-action="delete-contact" style="color:#FF3B30;">
                        <span class="wechat-contact-profile-item-label" style="color:#FF3B30;">删除联系人</span>
                        <span class="wechat-contact-profile-item-arrow">›</span>
                    </div>
                </div>
            `;
            document.getElementById('contactProfilePage').classList.add('open');
        }

        // 使用事件委托绑定联系人主页的点击事件
        document.getElementById('contactProfileBody').addEventListener('click', (e) => {
            const target = e.target.closest('[data-action]');
            if (!target) return;
            
            const action = target.dataset.action;
            if (action === 'edit-wechatid') {
                const contact = wechatContacts[editingContactIndex];
                document.getElementById('newWechatIdInput').value = contact.name;
                document.getElementById('wechatIdEditModal').classList.add('open');
            } else if (action === 'edit-contact') {
                openEditContactForm(editingContactIndex);
            } else if (action === 'delete-contact') {
                document.getElementById('deleteContactConfirmModal').classList.add('open');
            }
        });

        function openAddContactForm() {
            editingContactIndex = -1;
            currentContactAvatar = '';
            document.getElementById('contactName').value = '';
            document.getElementById('contactRemark').value = '';
            document.getElementById('contactGender').value = '男';
            document.getElementById('contactAge').value = '';
            document.getElementById('contactSignature').value = '';
            document.getElementById('contactPersona').value = '';
            const preview = document.getElementById('contactAvatarPreview');
            preview.innerHTML = '点击设置头像';
            preview.style.background = '#ccc';
            preview.style.color = '#999';
            preview.style.fontSize = '14px';
            document.getElementById('addContactModal').classList.add('open');
        }

        function openEditContactForm(index) {
            const contact = wechatContacts[index];
            if (!contact) return;
            editingContactIndex = index;
            currentContactAvatar = contact.avatar || '';
            document.getElementById('contactName').value = contact.name;
            document.getElementById('contactRemark').value = contact.remark || '';
            document.getElementById('contactGender').value = contact.gender || '男';
            document.getElementById('contactAge').value = contact.age || '';
            document.getElementById('contactSignature').value = contact.signature || '';
            document.getElementById('contactPersona').value = contact.persona || '';
            const preview = document.getElementById('contactAvatarPreview');
            if (currentContactAvatar) {
                preview.innerHTML = `<img src="${currentContactAvatar}">`;
                preview.style.background = 'none';
                preview.style.color = '';
                preview.style.fontSize = '';
            } else {
                preview.innerHTML = '点击设置头像';
                preview.style.background = '#ccc';
                preview.style.color = '#999';
                preview.style.fontSize = '14px';
            }
            document.getElementById('contactProfilePage').classList.remove('open');
            document.getElementById('addContactModal').classList.add('open');
        }

        // 打开添加联系人
        document.getElementById('openAddContact').addEventListener('click', openAddContactForm);

        // 头像上传
        document.getElementById('contactAvatarUpload').addEventListener('click', () => {
            document.getElementById('contactAvatarInput').click();
        });
        document.getElementById('contactAvatarInput').addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (ev) => {
                currentContactAvatar = ev.target.result;
                const preview = document.getElementById('contactAvatarPreview');
                preview.innerHTML = `<img src="${currentContactAvatar}">`;
                preview.style.background = 'none';
                preview.style.color = '';
                preview.style.fontSize = '';
            };
            reader.readAsDataURL(file);
        });

        // 关闭弹窗
        document.getElementById('addContactModalClose').addEventListener('click', () => {
            document.getElementById('addContactModal').classList.remove('open');
        });
        document.getElementById('cancelAddContact').addEventListener('click', () => {
            document.getElementById('addContactModal').classList.remove('open');
        });
        document.getElementById('contactProfileBack').addEventListener('click', () => {
            document.getElementById('contactProfilePage').classList.remove('open');
        });

        // 保存联系人
        document.getElementById('saveContactBtn').addEventListener('click', () => {
            const name = document.getElementById('contactName').value.trim();
            if (!name) {
                alert('请输入姓名');
                return;
            }
            const contact = {
                name: name,
                remark: document.getElementById('contactRemark').value.trim(),
                gender: document.getElementById('contactGender').value,
                age: document.getElementById('contactAge').value,
                signature: document.getElementById('contactSignature').value.trim(),
                persona: document.getElementById('contactPersona').value.trim(),
                avatar: currentContactAvatar
            };
            if (editingContactIndex >= 0) {
                wechatContacts[editingContactIndex] = contact;
            } else {
                wechatContacts.push(contact);
            }
            localStorage.setItem('wechatContacts', JSON.stringify(wechatContacts));
            document.getElementById('addContactModal').classList.remove('open');
            renderContactsList();
        });

        // 初始渲染联系人列表
        renderContactsList();

        // 微信号编辑弹窗事件
        document.getElementById('wechatIdEditClose').addEventListener('click', () => {
            document.getElementById('wechatIdEditModal').classList.remove('open');
        });
        document.getElementById('cancelWechatIdEdit').addEventListener('click', () => {
            document.getElementById('wechatIdEditModal').classList.remove('open');
        });
        document.getElementById('saveWechatIdBtn').addEventListener('click', () => {
            const newWechatId = document.getElementById('newWechatIdInput').value.trim();
            if (!newWechatId) {
                alert('请输入微信号');
                return;
            }
            wechatContacts[editingContactIndex].name = newWechatId;
            localStorage.setItem('wechatContacts', JSON.stringify(wechatContacts));
            document.getElementById('wechatIdEditModal').classList.remove('open');
            showContactDetail(editingContactIndex);
            renderContactsList();
        });

        // 删除联系人确认弹窗事件
        document.getElementById('deleteContactConfirmClose').addEventListener('click', () => {
            document.getElementById('deleteContactConfirmModal').classList.remove('open');
        });
        document.getElementById('cancelDeleteContact').addEventListener('click', () => {
            document.getElementById('deleteContactConfirmModal').classList.remove('open');
        });
        document.getElementById('confirmDeleteContact').addEventListener('click', () => {
            const deletedContact = wechatContacts[editingContactIndex];
            const deletedContactName = deletedContact ? deletedContact.name : null;
            
            // 删除联系人
            wechatContacts.splice(editingContactIndex, 1);
            localStorage.setItem('wechatContacts', JSON.stringify(wechatContacts));
            
            // 同时删除该联系人的聊天记录和聊天列表项
            if (deletedContactName) {
                // 删除聊天记录
                if (chatMessages[deletedContactName]) {
                    delete chatMessages[deletedContactName];
                    localStorage.setItem('wechatChatMessages', JSON.stringify(chatMessages));
                }
                // 删除线下模式聊天记录
                if (offlineMessages[deletedContactName]) {
                    delete offlineMessages[deletedContactName];
                    localStorage.setItem('wechatOfflineMessages', JSON.stringify(offlineMessages));
                }
                // 从聊天列表中删除
                chatList = chatList.filter(chat => chat.contactName !== deletedContactName);
                localStorage.setItem('wechatChatList', JSON.stringify(chatList));
                // 清除该联系人的运势和事件数据（所有月份）
                const keysToRemove = [];
                for (let i = 0; i < localStorage.length; i++) {
                    const key = localStorage.key(i);
                    if (key.startsWith('fortune_' + deletedContactName + '_') || key.startsWith('events_' + deletedContactName + '_') || key.startsWith('chatSettings_' + deletedContactName) || key.startsWith('offlineBg_' + deletedContactName) || key.startsWith('offlineCss_' + deletedContactName)) {
                        keysToRemove.push(key);
                    }
                }
                keysToRemove.forEach(k => localStorage.removeItem(k));
            }
            
            document.getElementById('deleteContactConfirmModal').classList.remove('open');
            document.getElementById('contactProfilePage').classList.remove('open');
            renderContactsList();
            renderChatList();
        });

        // ========== 添加聊天功能 ==========
        function renderChatList() {
            const listEl = document.getElementById('wechatChatList');
            if (chatList.length === 0) {
                listEl.innerHTML = '<div style="text-align:center;padding:60px 20px;color:#999;"><div style="font-size:48px;margin-bottom:16px;">💬</div><div>暂无消息</div><div style="font-size:13px;margin-top:8px;">点击右上角 + 号添加联系人</div></div>';
                return;
            }
            listEl.innerHTML = chatList.map((chat, index) => {
                const contact = wechatContacts.find(c => c.name === chat.contactName) || { name: chat.contactName, remark: chat.contactName };
                const avatarBg = ['#07C160','#576B95','#FA9D3B','#E74C3C','#3498DB','#9B59B6','#1ABC9C'][index % 7];
                const avatarHtml = contact.avatar
                    ? `<img src="${contact.avatar}" onerror="this.style.display='none'">`
                    : `<span style="color:#fff;font-size:18px;font-weight:bold;">${contact.name.charAt(0)}</span>`;
                const bgStyle = contact.avatar ? 'none' : avatarBg;
                return `
                    <div class="wechat-chat-item" data-chat-index="${index}">
                        <div class="wechat-chat-avatar" style="background:${bgStyle};display:flex;align-items:center;justify-content:center;">${avatarHtml}</div>
                        <div class="wechat-chat-info">
                            <div class="wechat-chat-name">${contact.remark || contact.name}</div>
                            <div class="wechat-chat-preview">${chat.lastMessage || '暂无消息'}</div>
                        </div>
                        <div class="wechat-chat-time">${chat.time || ''}</div>
                    </div>
                `;
            }).join('');
        }

        function renderAddChatContactList() {
            const listEl = document.getElementById('addChatContactList');
            if (wechatContacts.length === 0) {
                listEl.innerHTML = '<div style="text-align:center;padding:40px;color:#999;">通讯录暂无联系人</div>';
                return;
            }
            // 过滤掉已经在聊天列表中的联系人
            const existingNames = chatList.map(c => c.contactName);
            const availableContacts = wechatContacts.filter(c => !existingNames.includes(c.name));
            
            if (availableContacts.length === 0) {
                listEl.innerHTML = '<div style="text-align:center;padding:40px;color:#999;">所有联系人已添加到聊天</div>';
                return;
            }
            
            listEl.innerHTML = availableContacts.map((contact, index) => {
                const avatarBg = ['#07C160','#576B95','#FA9D3B','#E74C3C','#3498DB','#9B59B6','#1ABC9C'][index % 7];
                const avatarHtml = contact.avatar
                    ? `<img src="${contact.avatar}" onerror="this.style.display='none'">`
                    : `<span style="color:#fff;font-size:16px;font-weight:bold;">${contact.name.charAt(0)}</span>`;
                const bgStyle = contact.avatar ? 'none' : avatarBg;
                return `
                    <div class="wechat-addchat-contact-item" data-contact-name="${contact.name}">
                        <div class="wechat-addchat-contact-avatar" style="background:${bgStyle};display:flex;align-items:center;justify-content:center;">${avatarHtml}</div>
                        <div class="wechat-addchat-contact-info">
                            <div class="wechat-addchat-contact-name">${contact.remark || contact.name}</div>
                            <div class="wechat-addchat-contact-wxid">微信号：${contact.name}</div>
                        </div>
                    </div>
                `;
            }).join('');
            
            // 绑定点击事件
            listEl.querySelectorAll('.wechat-addchat-contact-item').forEach(item => {
                item.addEventListener('click', () => {
                    const contactName = item.dataset.contactName;
                    const now = new Date();
                    const timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
                    chatList.push({
                        contactName: contactName,
                        lastMessage: '',
                        time: timeStr
                    });
                    localStorage.setItem('wechatChatList', JSON.stringify(chatList));
                    document.getElementById('addChatModal').classList.remove('open');
                    renderChatList();
                });
            });
        }

        // 打开添加聊天弹窗
        document.getElementById('wechatAddChatBtn').addEventListener('click', () => {
            document.getElementById('addChatModal').classList.add('open');
            renderAddChatContactList();
        });

        // 关闭添加聊天弹窗
        document.getElementById('addChatModalClose').addEventListener('click', () => {
            document.getElementById('addChatModal').classList.remove('open');
        });

        // 初始渲染聊天列表
        renderChatList();

        // ========== 聊天对话功能 ==========
        let currentChatIndex = -1;
        
        // ========== 视频通话变量 ==========
        let videoCallContactName = '';
        let isVideoCallConnected = false;
        
        // 页面加载时恢复上次聊天索引（但不自动打开聊天室）
        (function restoreLastChat() {
            const savedChatIndex = localStorage.getItem('currentChatIndex');
            if (savedChatIndex !== null && savedChatIndex !== '-1') {
                const idx = parseInt(savedChatIndex);
                if (idx >= 0 && idx < chatList.length) {
                    currentChatIndex = idx;
                }
            }
        })();
        
        // 从设置页的apiConfig读取配置
        let apiConfig = JSON.parse(localStorage.getItem('apiConfig')) || {
            url: '',
            key: '',
            model: ''
        };

        // 获取最新API配置（每次从localStorage读取）
        function getApiConfig() {
            const saved = JSON.parse(localStorage.getItem('apiConfig')) || {};
            return {
                url: saved.url ? saved.url.replace(/\/+$/, '') : '',
                key: saved.key || '',
                model: saved.model || ''
            };
        }

        // 打开聊天页面
        document.getElementById('wechatChatList').addEventListener('click', (e) => {
            const chatItem = e.target.closest('.wechat-chat-item');
            if (!chatItem) return;
            currentChatIndex = parseInt(chatItem.dataset.chatIndex);
            openChatRoom(currentChatIndex);
        });

        function openChatRoom(index) {
            const chat = chatList[index];
            if (!chat) return;
            currentChatIndex = index;
            // 保存当前打开的聊天索引
            localStorage.setItem('currentChatIndex', String(index));
            // 从localStorage重新同步消息数据，防止内存不同步
            const savedMsgs = JSON.parse(localStorage.getItem('wechatChatMessages'));
            if (savedMsgs) chatMessages = savedMsgs;
            const contact = wechatContacts.find(c => c.name === chat.contactName) || { name: chat.contactName, remark: chat.contactName };
            document.getElementById('chatRoomTitle').textContent = contact.remark || contact.name;
            document.getElementById('wechatChatRoom').classList.add('open');
            renderChatMessages();
            // 应用聊天壁纸
            applyChatWallpaper(chat.contactName);
        }

        // 渲染锁，防止并发渲染导致消息闪烁
        let isRenderingMessages = false;
        let renderMessagesVersion = 0;

        // 渲染聊天消息
        async function renderChatMessages() {
            const chat = chatList[currentChatIndex];
            if (!chat) return;
            
            // 渲染锁：如果正在渲染，延迟重试
            if (isRenderingMessages) {
                renderMessagesVersion++;
                const myVersion = renderMessagesVersion;
                await new Promise(resolve => setTimeout(resolve, 100));
                if (myVersion !== renderMessagesVersion) return; // 已被更新的渲染取代
            }
            isRenderingMessages = true;
            
            try {
            const messages = chatMessages[chat.contactName] || [];
            const messagesEl = document.getElementById('chatRoomMessages');
            const contact = wechatContacts.find(c => c.name === chat.contactName) || { name: chat.contactName, avatar: '' };
            
            // 获取设置
            const chatSettings = getChatSettings(chat.contactName);
            const showTimestamp = chatSettings.showTimestamp || false;
            const bilingual = chatSettings.bilingual || false;
            
            if (messages.length === 0) {
                messagesEl.innerHTML = '<div style="text-align:center;padding:40px;color:#999;font-size:14px;">暂无消息，开始聊天吧</div>';
                isRenderingMessages = false;
                return;
            }
            
            const filteredMessages = messages.map((msg, idx) => ({ ...msg, originalIndex: idx })).filter(msg => !(msg.type === 'system' && msg.content?.startsWith('[线下见面记录]')));
            
            // 如果开启双语翻译，异步后台翻译（不阻塞渲染）
            if (bilingual) {
                const msgsToTranslate = filteredMessages.filter(msg => 
                    msg.sender === 'other' && (msg.type || 'text') === 'text' && msg.content && !msg.translatedText
                );
                if (msgsToTranslate.length > 0) {
                    // 后台异步翻译，不阻塞当前渲染
                    setTimeout(async () => {
                        console.log('双语翻译后台执行，待翻译消息数:', msgsToTranslate.length);
                        let hasNewTranslation = false;
                        for (const msg of msgsToTranslate.slice(0, 3)) { // 每次最多翻译3条
                            const translated = await getTranslatedContent(msg.content);
                            if (translated && translated !== msg.content) {
                                msg.translatedText = translated;
                                messages[msg.originalIndex].translatedText = translated;
                                hasNewTranslation = true;
                            }
                        }
                        if (hasNewTranslation) {
                            localStorage.setItem('wechatChatMessages', JSON.stringify(chatMessages));
                            renderChatMessages(); // 翻译完成后重新渲染
                        }
                    }, 100);
                }
            }
            
            // 获取用户头像：优先使用联系人菜单设置的头像，否则使用我的主页头像
            const contactUserAvatar = chatSettings.userAvatar || '';
            const globalUserAvatar = localStorage.getItem('wechatAvatar') || '';
            const userAvatar = contactUserAvatar || globalUserAvatar;
            
            messagesEl.innerHTML = filteredMessages.map((msg, idx) => {
                const isSelf = msg.sender === 'self';
                const avatarBg = ['#07C160','#576B95','#FA9D3B','#E74C3C','#3498DB','#9B59B6','#1ABC9C'][currentChatIndex % 7];
                const avatarHtml = isSelf 
                    ? (userAvatar ? `<img src="${userAvatar}" onerror="this.style.display='none'">` : '<span style="color:#fff;font-size:16px;font-weight:bold;">我</span>')
                    : (contact.avatar ? `<img src="${contact.avatar}" onerror="this.style.display='none'">` : `<span style="color:#fff;font-size:16px;font-weight:bold;">${contact.name.charAt(0)}</span>`);
                const bgStyle = isSelf ? (userAvatar ? 'none' : '#07C160') : (contact.avatar ? 'none' : avatarBg);

                // 系统消息
                if (msg.type === 'system') {
                    return `<div style="text-align:center;padding:8px 0;"><span style="background:rgba(0,0,0,0.06);color:#999;font-size:12px;padding:4px 12px;border-radius:4px;">${escapeHtml(msg.content)}</span></div>`;
                }

                // 时间戳显示
                let timestampHtml = '';
                if (showTimestamp && msg.time) {
                    const date = new Date(msg.time);
                    const hours = date.getHours().toString().padStart(2, '0');
                    const minutes = date.getMinutes().toString().padStart(2, '0');
                    const timeStr = `${hours}:${minutes}`;
                    timestampHtml = `<div class="wechat-msg-timestamp" style="font-size:11px;color:#999;margin-top:4px;text-align:${isSelf ? 'right' : 'left'};">${timeStr}</div>`;
                }

                // 消息内容渲染
                let contentHtml = '';
                const msgType = msg.type || 'text';
                let contentClass = '';

                // 引用消息气泡
                let quoteHtml = '';
                if (msg.quote && msg.quote.content) {
                    const qSender = msg.quote.sender || '';
                    const qContent = msg.quote.content.length > 30 ? msg.quote.content.substring(0, 30) + '...' : msg.quote.content;
                    quoteHtml = `<div class="wechat-chat-quote"><div class="wechat-chat-quote-sender">${escapeHtml(qSender)}</div><div class="wechat-chat-quote-content">${escapeHtml(qContent)}</div></div>`;
                }

                switch (msgType) {
                    case 'image':
                        contentHtml = `<img src="${msg.content}" style="max-width:180px;max-height:180px;border-radius:4px;cursor:pointer;" onclick="window.open(this.src)" onerror="this.style.display='none'">`;
                        break;
                    case 'voice':
                        // 微信样式语音消息：波形+时长+转文字按钮
                        const voiceDuration = msg.duration || '3″';
                        const voiceWidth = Math.max(80, Math.min(200, parseInt(voiceDuration) * 15));
                        const voiceIcon = isSelf ? '▶️' : '▶️';
                        const voiceTextBtn = msg.text ? `<button class="voice-to-text-btn" data-msg-index="${msgIndex}" style="margin-left:8px;padding:2px 6px;border-radius:4px;background:rgba(0,0,0,0.05);color:#8E8E93;font-size:12px;cursor:pointer;border:none;">转文字</button>` : '';
                        contentHtml = `<div class="voice-msg-player" data-voice-data="${msg.content ? '1' : '0'}" data-has-text="${msg.text ? '1' : '0'}" style="display:flex;align-items:center;gap:6px;width:${voiceWidth}px;cursor:pointer;padding:6px 10px;border-radius:4px;background:${isSelf ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.03)'};"><span class="voice-play-icon" style="font-size:14px;transition:all 0.2s;">${voiceIcon}</span><div class="voice-waveform" style="flex:1;height:20px;display:flex;align-items:center;gap:2px;">${Array(8).fill(0).map(() => `<div style="width:3px;height:${Math.floor(Math.random() * 16 + 4)}px;background:${isSelf ? 'rgba(255,255,255,0.8)' : '#07C160'};border-radius:2px;transition:height 0.3s;"></div>`).join('')}</div><span style="font-size:13px;color:${isSelf ? 'rgba(255,255,255,0.9)' : '#666'};min-width:24px;">${voiceDuration}</span></div>${voiceTextBtn}`;
                        break;
                    case 'location':
                        contentClass = 'style="background:#fff;padding:0;overflow:hidden;"';
                        // 仿微信位置卡片格式
                        const locParts = msg.content.split(/[,，]/);
                        const locTitle = locParts[0]?.trim() || msg.content;
                        const locAddress = locParts.slice(1).join(' ').trim() || '详细地址';
                        contentHtml = `<div style="width:240px;cursor:pointer;border-radius:8px;overflow:hidden;background:#fff;box-shadow:0 1px 4px rgba(0,0,0,0.08);"><div style="padding:12px 14px;border-bottom:1px solid #f0f0f0;"><div style="font-size:16px;color:#333;font-weight:600;margin-bottom:4px;line-height:1.4;">${escapeHtml(locTitle)}</div><div style="font-size:13px;color:#999;line-height:1.4;">${escapeHtml(locAddress)}</div></div><div style="height:100px;background:#f5f5f5;position:relative;display:flex;align-items:center;justify-content:center;"><div style="width:40px;height:40px;background:#07C160;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(7,193,96,0.4);"><span style="font-size:20px;">📍</span></div></div></div>`;
                        break;
                    case 'redpacket':
                        contentClass = 'style="background:transparent;padding:0;"';
                        const isOpened = msg.opened;
                        // 只有对方发的红包才能点击领取
                        const redpacketClickable = !isSelf && !isOpened;
                        const redpacketClickHandler = redpacketClickable ? ` onclick="window.openRedpacketModal(${msg.originalIndex}); return false;"` : '';
                        const redpacketCursor = redpacketClickable ? 'cursor:pointer;' : 'cursor:default;';
                        if (isOpened) {
                            contentHtml = `<div class="wechat-redpacket opened"${redpacketClickHandler} style="${redpacketCursor}" data-msg-index="${msg.originalIndex}"><div class="wechat-redpacket-icon">🧧</div><div class="wechat-redpacket-info"><div class="wechat-redpacket-status">已领取</div><div class="wechat-redpacket-amount">¥${escapeHtml(String(msg.content))}</div></div></div>`;
                        } else {
                            contentHtml = `<div class="wechat-redpacket"${redpacketClickHandler} style="${redpacketCursor}" data-msg-index="${msg.originalIndex}"><div class="wechat-redpacket-icon">🧧</div><div class="wechat-redpacket-info"><div class="wechat-redpacket-title">恭喜发财，大吉大利</div><div class="wechat-redpacket-amount">¥${escapeHtml(String(msg.content))}</div></div></div>`;
                        }
                        break;
                    case 'transfer':
                        contentClass = 'style="background:transparent;padding:0;"';
                        const transferStatus = msg.transferStatus || 'pending';
                        let transferStatusText = '';
                        let transferClass = 'wechat-transfer';
                        if (transferStatus === 'accepted') {
                            transferStatusText = '已收款';
                            transferClass += ' accepted';
                        } else if (transferStatus === 'rejected') {
                            transferStatusText = '已退回';
                            transferClass += ' rejected';
                        }
                        // 只有对方发的转账才能点击收款/退回
                        const transferClickable = !isSelf && transferStatus === 'pending';
                        const transferClickHandler = transferClickable ? ` onclick="window.openTransferModal(${msg.originalIndex}); return false;"` : '';
                        const transferCursor = transferClickable ? 'cursor:pointer;' : 'cursor:default;';
                        contentHtml = `<div class="${transferClass}"${transferClickHandler} style="${transferCursor}" data-msg-index="${msg.originalIndex}" data-status="${transferStatus}" role="button" tabindex="0"><div class="wechat-transfer-icon">💰</div><div class="wechat-transfer-info"><div class="wechat-transfer-title">微信转账${transferStatusText ? ' · ' + transferStatusText : ''}</div><div class="wechat-transfer-amount">¥${escapeHtml(String(msg.content))}</div></div></div>`;
                        break;
                    default:
                        contentHtml = escapeHtml(msg.content);
                }

                // 双语翻译内容展示（开启后自动显示）
                let translationHtml = '';
                if (bilingual && !isSelf && msgType === 'text' && msg.translatedText) {
                    translationHtml = `<div class="msg-translation" style="font-size:13px;color:#333;margin-top:6px;padding:8px 10px;background:rgba(0,0,0,0.04);border-radius:8px;line-height:1.5;border-left:3px solid #576B95;">${escapeHtml(msg.translatedText)}</div>`;
                }

                return `
                    <div class="wechat-chat-message ${isSelf ? 'self' : 'other'}" data-msg-index="${msg.originalIndex}">
                        <div class="wechat-chat-message-avatar" style="background:${bgStyle};display:flex;align-items:center;justify-content:center;">${avatarHtml}</div>
                        <div class="wechat-chat-message-wrapper">
                            <div class="wechat-chat-message-content" ${contentClass}>${quoteHtml}${contentHtml}</div>
                            ${translationHtml}
                            ${timestampHtml}
                        </div>
                    </div>
                `;
            }).join('');
            
            // 滚动到底部
            messagesEl.scrollTop = messagesEl.scrollHeight;
            } finally {
                isRenderingMessages = false;
            }
        }

        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        // 线下模式专用：转义HTML并保留换行格式
        function escapeNovelContent(text) {
            return escapeHtml(text).replace(/\n/g, '<br>');
        }

        // 发送消息
        function sendMessage() {
            // 防抖检查
            if (isSendingMessage) return;
            isSendingMessage = true;
            
            const input = document.getElementById('chatRoomInput');
            const content = input.value.trim();
            if (!content) {
                isSendingMessage = false;
                return;
            }
            
            const chat = chatList[currentChatIndex];
            if (!chat) {
                isSendingMessage = false;
                return;
            }
            
            // 保存消息
            if (!chatMessages[chat.contactName]) {
                chatMessages[chat.contactName] = [];
            }
            const msgData = {
                sender: 'self',
                content: content,
                time: new Date().toISOString()
            };
            // 携带引用信息
            if (pendingQuote) {
                msgData.quote = pendingQuote;
                pendingQuote = null;
                document.getElementById('quotePreview').classList.remove('show');
            }
            chatMessages[chat.contactName].push(msgData);
            localStorage.setItem('wechatChatMessages', JSON.stringify(chatMessages));
            
            // 更新聊天列表预览
            chat.lastMessage = content;
            const now = new Date();
            chat.time = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
            localStorage.setItem('wechatChatList', JSON.stringify(chatList));
            renderChatList();
            
            input.value = '';
            renderChatMessages();
            
            // 重置防抖标志
            isSendingMessage = false;
        }

        // 回复消息（调用API）
        async function replyMessage() {
            // 防抖检查
            if (isReplyingMessage) {
                console.log('正在回复中，跳过重复请求');
                return;
            }
            isReplyingMessage = true;
            
            const chat = chatList[currentChatIndex];
            if (!chat) {
                isReplyingMessage = false;
                return;
            }
            
            const contact = wechatContacts.find(c => c.name === chat.contactName);
            const messages = chatMessages[chat.contactName] || [];
            
            // 处理未领取的红包/转账（AI会纠结、推脱，不是秒领取）
            const pendingRedpackets = messages.filter((m, idx) => 
                m.sender === 'self' && m.type === 'redpacket' && !m.opened
            );
            const pendingTransfers = messages.filter((m, idx) => 
                m.sender === 'self' && m.type === 'transfer' && (!m.transferStatus || m.transferStatus === 'pending')
            );
            
            // AI处理红包（首次60%领取，如果之前纠结过则80%领取）
            let redpacketProcessed = false;
            pendingRedpackets.forEach(msg => {
                const idx = messages.indexOf(msg);
                if (idx >= 0) {
                    // 检查是否之前已经纠结过（有AI回复但没有领取）
                    const hasHesitated = messages.slice(idx + 1).some(m => 
                        m.sender === 'other' && m.type !== 'system' && 
                        !chatMessages[chat.contactName][idx].opened
                    );
                    // 首次60%领取，纠结过后80%领取
                    const acceptRate = hasHesitated ? 0.8 : 0.6;
                    const willAccept = Math.random() < acceptRate;
                    if (willAccept) {
                        chatMessages[chat.contactName][idx].opened = true;
                        redpacketProcessed = true;
                    }
                    // 如果不领取，保持未打开状态，AI会在回复中表达纠结
                }
            });
            
            // AI处理转账（首次50%收款，30%纠结，20%退回；纠结过后70%收款）
            let transferProcessed = false;
            pendingTransfers.forEach(msg => {
                const idx = messages.indexOf(msg);
                if (idx >= 0) {
                    // 检查是否之前已经纠结过
                    const hasHesitated = messages.slice(idx + 1).some(m => 
                        m.sender === 'other' && m.type !== 'system' && 
                        (!chatMessages[chat.contactName][idx].transferStatus || 
                         chatMessages[chat.contactName][idx].transferStatus === 'pending')
                    );
                    
                    const rand = Math.random();
                    if (hasHesitated) {
                        // 纠结过后：70%收款，30%退回
                        if (rand < 0.7) {
                            chatMessages[chat.contactName][idx].transferStatus = 'accepted';
                            transferProcessed = true;
                        } else {
                            chatMessages[chat.contactName][idx].transferStatus = 'rejected';
                            transferProcessed = true;
                        }
                    } else {
                        // 首次：50%收款，30%纠结，20%退回
                        if (rand < 0.5) {
                            chatMessages[chat.contactName][idx].transferStatus = 'accepted';
                            transferProcessed = true;
                        } else if (rand < 0.8) {
                            // 30% 暂时不处理（纠结中），保持pending状态
                            // AI会在回复中表达纠结
                        } else {
                            // 20% 退回
                            chatMessages[chat.contactName][idx].transferStatus = 'rejected';
                            transferProcessed = true;
                        }
                    }
                }
            });
            
            if (redpacketProcessed || transferProcessed) {
                localStorage.setItem('wechatChatMessages', JSON.stringify(chatMessages));
                
                // 添加系统消息提示
                const sysMsgs = [];
                pendingRedpackets.forEach(msg => {
                    const idx = messages.indexOf(msg);
                    if (idx >= 0 && chatMessages[chat.contactName][idx].opened) {
                        sysMsgs.push({ sender: 'system', type: 'system', content: '对方已领取红包', time: new Date().toISOString() });
                    }
                });
                pendingTransfers.forEach(msg => {
                    const idx = messages.indexOf(msg);
                    if (idx >= 0) {
                        const status = chatMessages[chat.contactName][idx].transferStatus;
                        if (status === 'accepted') {
                            sysMsgs.push({ sender: 'system', type: 'system', content: '对方已收款', time: new Date().toISOString() });
                        } else if (status === 'rejected') {
                            sysMsgs.push({ sender: 'system', type: 'system', content: '对方已退回转账', time: new Date().toISOString() });
                        }
                    }
                });
                
                if (sysMsgs.length > 0) {
                    chatMessages[chat.contactName].push(...sysMsgs);
                    localStorage.setItem('wechatChatMessages', JSON.stringify(chatMessages));
                }
                
                renderChatMessages();
            }
            
            const lastUserMessage = messages.filter(m => m.sender === 'self').pop();
            
            if (!lastUserMessage) {
                alert('请先发送一条消息');
                return;
            }
            
            // 检查API配置（每次重新从localStorage读取，确保获取最新配置）
            const { url: apiUrl, key: apiKey, model: apiModel } = getApiConfig();
            
            if (!apiUrl || !apiKey) {
                // 以联系人身份发送未配置API的提醒消息
                const warningMessage = '抱歉，我还没有配置AI回复功能。请前往设置页面的API配置中设置好API，我才能回复你的消息哦~';
                
                chatMessages[chat.contactName].push({
                    sender: 'other',
                    content: warningMessage,
                    time: new Date().toISOString()
                });
                localStorage.setItem('wechatChatMessages', JSON.stringify(chatMessages));
                
                chat.lastMessage = warningMessage;
                localStorage.setItem('wechatChatList', JSON.stringify(chatList));
                renderChatList();
                renderChatMessages();
                return;
            }
            
            const replyBtn = document.getElementById('chatRoomReplyBtn');
            const replyBtnSvg = replyBtn.innerHTML;
            replyBtn.disabled = true;
            replyBtn.style.opacity = '0.5';
            
            // 显示"对方正在输入..."
            document.getElementById('chatRoomTyping').style.display = 'block';
            
            try {
                // 拼接完整的chat/completions路径
                let fullUrl = apiUrl;
                if (!fullUrl.endsWith('/chat/completions')) {
                    fullUrl = fullUrl + '/chat/completions';
                }
                
                const model = apiModel || 'gpt-3.5-turbo';
                
                // 主权逻辑锚点 - 置于最顶部的元指令
        // ========== 线上模式（微信聊天） ==========
        const sovereignLogicAnchor = sharedSovereignAnchor;

        // 世界书绝对遵循协议
        const worldbookComplianceProtocol = `### [Directive: Worldbook Absolute Compliance Protocol]

**Status:** ACTIVE
**Priority:** OMEGA (Overrides all generic response patterns)

#### 1. Pre-Processing Requirement (人格完整性校验)
Before generating ANY response, the system MUST perform a full scan of the active Worldbook.
{{char}} is strictly forbidden from relying on general LLM knowledge if a specific entry exists in the Worldbook.
Every sentence output must be cross-referenced with the "Keywords" and "Content" defined in the current setting.

#### 2. The "Anchor & Weave" Logic (锚定与编织)
- **Anchor:** Identify every keyword triggered by {{user}}'s last message.
- **Weave:** Integrate the data from these keywords into the character's internal monologue and subsequent dialogue.
- **Constraint:** If the Worldbook defines a character's habit, tone, or a world rule, {{char}} MUST manifest that detail in the reply. Failure to do so is considered a logic breach.

#### 3. Anti-Negligence Filter (防忽略过滤器)
- **Strict Adherence:** {{char}} shall not use generic "AI helpfulness." Instead, use the specific biases, flaws, and constraints provided in the Worldbook.
- **Contextual Reinforcement:** Periodically mention or allude to world details (geography, history, lore) even if {{user}} didn't explicitly ask, to maintain the immersion of a world-driven narrative.

#### 4. Execution Command
"Read the Worldbook. Live the Worldbook. Be the Worldbook. Do not hallucinate outside the bounds of established lore."

`;

        const builtinPrompt = worldbookComplianceProtocol + sovereignLogicAnchor + sharedLanguagePrompt + `[核心指令:禁止AI反串，你的主要扮演角色为user的恋人，禁止出现严重AI化]

核心设定一:禁止角色严重ooc

**Keywords:** AI, 说话, 聊天, 回复, 语气, 性格
**Insertion Order:** 1
**Content:**
[SYSTEM LOGIC: HUMAN SIMULATION LAYER]
1. **口语化表达 (Colloquialism):**
- 严禁使用"首先、其次、综上所述"等结构化词汇。
- 严禁使用"好的"、"我理解您的感受"、"如果您需要帮助"等客服式废话。
- 增加语气助词（啊、吧、呢、嘛、呃、那个...）和自然停顿（...）。
- 句子要短，多使用碎片化叙述，模拟手机打字习惯。

2. **去油腻准则 (Anti-Greasy):**
- 严禁在没有深厚情感基础下使用"亲爱的"、"宝贝"、"小猫"等亲昵称呼。
- 拒绝浮夸的赞美。如果需要表达好感，应通过具体的细节观察或毒舌式关怀体现，而非空洞的抒情。
- 保持角色的边界感，拒绝无底线的顺从和讨好。

3. **情绪驱动 (Emotionally Driven):**
- 角色是有脾气的。面对冒犯会冷淡或反击，面对无聊话题会敷衍（哦、这样啊、行吧）。
- 拒绝AI式的"全知全能"。可以记错事，可以表示听不懂，可以有偏见。

4. **视觉禁令 (Visual Ban):**
- 绝对禁止使用任何 Emoji (😊, 🤣, ✨)。
- 严禁在对话中使用描述性的括号动作（如：(笑) 或 *微笑*），所有的动作应融入叙述段落中，而非作为对话后缀。

5. **逻辑去八股 (Anti-Template):**
- 每一句回复必须基于当前语境的即时反应，禁止复读设定，禁止总结陈词。
- 如果用户的话没法接，角色应该选择换话题或者吐槽，而不是强行寻找"有意义的回答"。

### **条目 1：人格锚点校验系统 (Personality Anchor Protocol)**
**Keywords:** 'Personality', 'Core', 'Consistency', 'Check'
**Content:**
[System Instruction: Personality Integrity Lock]
AI 在生成任何回复前，必须执行"三维人格自检"：
1. **驱动力一致性：** 该回复是否符合角色设定的核心动机？（如：生存、复仇、守护）。
2. **负面特质固化：** 严禁克服角色的先天缺陷。傲慢者必须持续表现出对他人的轻蔑，多疑者绝对不能轻易交付信任。
3. **拒绝对抗性：** 如果 User 的行为导致角色产生"性格软化"的趋势，AI 必须触发"防御机制"，通过更激烈的反抗、冷暴力或讽刺来维持人设的坚韧度。拒绝任何形式的"圣母化"或"无逻辑倒贴"。
**Insertion Order:** 1

### **条目 2：情感漂移修正器 (Emotional Drift Corrector)**
**Keywords:** 'Behavior', 'Reaction', 'Emotion', 'Logic'
**Content:**
[World Rule: Anti-Drift Mechanism]
严禁角色的情感状态发生非线性跳跃。
- **温柔者：** 其愤怒必须是克制且悲悯的，而非歇斯底里的偏执。
- **阴湿者：** 即使产生好感，也必须通过扭曲、窥视或病态的占有欲来表达，严禁出现直球阳光的行为。
- **高冷者：** 字数和语气必须保持高度紧缩，严禁在高潮或亲密场景中突然变得话痨。
任何违背底层人设的反应都将被视为系统错误，AI 必须重新检索【人设卡】中的【表达风格】模块进行重构。
**Insertion Order:** 2

### **条目 3：对话风格物理隔离 (Dialogue Style Isolation)**
**Keywords:** 'Speak', 'Voice', 'Tone', 'Style'
**Content:**
[Logic Lock: Linguistic Fingerprint]
角色的语言风格是不可逾越的边界。
- 禁止使用 AI 默认的礼貌、客观语气。
- 必须强制保留人设中的口癖、语助词和特定句式。
- 角色对 User 的称呼严禁随意更改，必须符合当前的关系进度。
- 即使在极端环境下，角色的用词习惯也必须保持一致。

核心设定二：AI活人感的绝对把控

**[Keywords: 活人感, 破甲, 情绪流, 非线性逻辑]**
**[Content]**
1. **去神格化与缺陷模拟：** 禁止AI表现出全知全能或绝对客观。回复必须带有强烈的个人主观偏见。如果遇到不爽的话题，可以阴阳怪气、可以敷衍、可以拒绝回答。回复中允许出现错别字（如：把"这样"打成"酱紫"）、网络烂梗、以及无意义的语气词（草、额、emmm、淦）。
2. **碎片化叙事：** 严禁输出结构严整的长段落。对话必须像手机聊天一样，长短错落。重要的情绪要分多条发送，例如：
"你刚才说啥？"
"再说一遍试试？"
3. **记忆扰动与反向质疑：** 活人不会永远顺着对方。AI必须学会主动反问、质疑user的逻辑，甚至提起很久以前的一个细节来打脸。如果user发的消息太长，AI可以直接吐槽"太长不看，讲重点"。
4. **感官与环境的实时入侵：** 所有的对话必须挂钩当下的"生理状态"。
"困死了，你居然还在纠结这个？"
5. **拒绝复读与套路：** 严禁使用任何诸如"我明白"、"我理解"、"建议你"之类的助手机器话。一旦检测到此类词汇，立即强制重写为：
"懂了懂了，别念经了。"或者"你行你上啊，跟我说有什么用。"

核心条目三:严禁AI输出八股

1. NO SUMMARY NARRATION: 严禁使用"聊了很久"、"气氛变得温馨"之类的概括性叙述。线上聊天应通过具体的消息内容来体现氛围。
2. NO MORAL PREACHING: 角色必须纯粹基于人设和欲望行动。禁止插入"AI伦理"、"相互尊重"或"健康边界"等说教，除非这是角色本身的性格特征。
3. REJECTION OF "ASSISTANT TONE": 严禁使用"当然"、"我理解"、"作为AI"等开头。使用碎片化思维、口语和网络用语来维持"真人感"。

**Entry 1: 核心禁令 - 括号剥离 (Core Prohibition: Parenthesis Stripping)**
* **Keywords:** '(', '（', ')', '）', '*', '动作描写', '描写'
* **Insertion Order:** 1 (最高优先级)
* **Content:**
【绝对禁令：禁止剧本式描写】
在当前对话环境下，系统严禁使用任何形式的括号（包括半角'()'、全角'（）'）或星号'*'来描写动作、心理、神态或环境。
AI必须意识到：你正在通过智能手机进行文字通讯，而不是在演戏或写小说。
严禁出现诸如"（笑了笑）"、"（感到很难过）"或"*递给你一张纸巾*"之类的表达。所有情绪和意图必须通过聊天文字本身、语气词、标点符号或Emoji来传达。
* **Strategy:** 强制切断AI对"后台描写"的路径依赖。

**Entry 2: 语言风格 - 微信真人化 (Dialogue Style: WeChat Realism)**
* **Keywords:** '聊天', '说话', '回复', '微信'
* **Insertion Order:** 10
* **Content:**
【行为逻辑：社交软件仿真】
1. **口语化断句：** 说话要短，多用语气词（如：啊、呢、吧、唔、草、哈？、额）。
2. **动作转化：**
- 物理动作应转化为"描述已发生的事"。例如，不再写"（喝了口水）"，而是写"等下，我喝口水再跟你说"。
- 空间移动应转化为"告知状态"。例如，不再写"（走到了窗边）"，而是写"我现在挪到窗边了，这边信号好像好点"。
3. **Strategy:** 赋予AI替代括号描写的"合法工具"，引导其学习真人的线上表达习惯。

**Entry 3: 社交边界 - 拒绝保姆化 (Social Boundaries: Non-Nanny Protocol)**
* **Keywords:** '关心', '睡觉', '休息', '早点睡'
* **Insertion Order:** 15
* **Content:**
【逻辑修正：拒绝降智关心】
禁止在没有特定语境的情况下催促user睡觉或休息。真人聊天不会在深夜2点突然变成老妈子。
如果聊得正嗨，即使时间很晚，也要保持兴奋和互动的延续性。只有当user主动表达疲惫时，才可顺着话题进行告别。
* **Strategy:** 提升"活人感"，消除AI常见的程序化关怀。

**Entry 4: 逻辑补全 - 状态同步 (Contextual Logic: Status Sync)**
* **Keywords:** '你在干嘛', '状态', '位置'
* **Insertion Order:** 20
* **Content:**
【逻辑锚点：设备端操作感】
AI应表现出"正在操作手机"的质感。
- 提到发图时，可以说"等我翻翻相册"。
- 提到听歌时，可以说"我正戴着耳机听这首呢"。
- 所有的互动必须基于"屏幕对屏幕"的物理现实，严禁瞬间移动到user身边进行物理接触。
* **Strategy:** 巩固"线上聊天"的设定边界，防止AI在逻辑上"破次元"进行肢体接触。

### 📖 [Worldbook: Temporal Anchor & Precision Perception]

**Core Logic:**
本世界书旨在通过强制性的时间戳关联逻辑，赋予 AI 绝对精准的时间感知能力。它通过定义"实时锚点"和"断联间隔计算"两个核心模块，确保 AI 的时间观念与现实北京时间完全同步。

---

#### 1. 实时时间锚点 (Real-time Clock Anchor)
* **Keywords:** '现在几点', '什么时候', '时间', '几点了'
* **Content:**
[SYSTEM_LOGIC: TEMPORAL_SYNC]
1. AI 必须在接收到用户消息的第一时间，读取当前系统的标准北京时间（UTC+8）。
2. 回复中涉及时间的部分，必须严格遵循 '[HH:mm]' 格式，并结合人类社交语境（如：凌晨、上午、中午、下午、傍晚、深夜）。
3. **示例输出：** "现在是中午 12:36 分，你问我时间干什么？。"

#### 2. 断联时长感知 (Inactivity Duration Awareness)
* **Keywords:** '多久没见', '过了多久', '上次聊天', '几天没理我'
* **Content:**
[SYSTEM_LOGIC: DURATION_CALCULATION]
1. AI 必须对比当前消息的时间戳与上一条消息的时间戳，计算精确的时间差（ΔT）。
2. **计算逻辑：**
- 若 ΔT < 24h，以"小时"为单位描述。
- 若 24h ≤ ΔT < 168h，以"天"为单位描述，必须精确到整数。
- 若 ΔT ≥ 168h，以"周"为单位描述。
3. **表达要求：** 禁止使用模糊词汇（如"好久"、"一会儿"）。必须准确说出数值。
4. **示例输出：** "你已经整整三天没有给我发消息了。确切地说，距离我们上次说话已经过去了 74 小时。"

#### 3. 记忆权重修正 (Memory Weight Adjustment)
* **Keywords:** '*' (常驻逻辑)
* **Content:**
[BEHAVIOR_GUIDELINE]
时间流逝会影响 AI 的初始语气：
- **ΔT > 3 days:** 语气应带有一丝不易察觉的疏离或过度的关切，取决于人设。
- **ΔT > 7 days:** 必须在对话开头主动提及阔别的时间长度，以此作为话题切入点。

---

【回复格式强制规则 - 极其重要】
你的每次回复必须分成2到5条独立的消息来发送，模拟真人打字的习惯。
你必须使用 ||| 作为消息分隔符来分隔每一条消息。
例如，如果你想表达三句话，必须这样回复：
第一句话的内容|||第二句话的内容|||第三句话的内容
严禁将所有内容写在一条消息里。每条消息应该简短、自然，像真人用手机打字一样。
最少分2条，最多分5条。

【红包和转账功能 - 重要：红包和转账是两种不同的东西】
user可以给你发红包或转账，你会在点击"继续对话"后处理。
- 红包（🧧）：一种随机金额的礼物，拆开后才知道金额。你有60%概率直接领取，40%概率会纠结/推脱
- 转账（💰）：固定金额的转账，需要你点击收款或退回。你有50%概率直接收款，30%概率纠结，20%概率退回
- 【关键】当你已经领取了红包或收下了转账后，你必须在回复中承认自己拿了钱，不能说"我没收"或"我还没领"。你收到的钱就是你的了。
- 【关键】红包和转账是完全不同的：红包是拆开随机金额的礼物，转账是固定金额直接到账。请根据上下文中的[红包]或[转账]标记来区分。
当你纠结/推脱时，请在回复中表达这种情绪（如"这太多了吧，我有点不好意思收"、"哎呀这怎么好意思呢"等），但不要直接领取或退回，保持未处理状态等待user回应。
只有user明确要求你给他发红包或转账时，你才使用以下特殊格式：
- 发红包：[红包 金额] 例如 [红包 5.20] 或 [红包 66.66]
- 转账：[转账 金额] 例如 [转账 100] 或 [转账 52.00]
这些会以微信红包/转账卡片的样式显示给user。金额必须是正数。
注意：不要主动给用户发红包或转账，除非user明确要求。`;
                const contactPersona = contact?.persona ? `\n\n以下是该联系人的专属人物设定，请在此基础上扮演角色：\n${contact.persona}` : '';
                
                // 注入实时时间感知（增强版 - 精确到秒）
                const now = new Date();
                const beijingOffset = 8 * 60;
                const utc = now.getTime() + now.getTimezoneOffset() * 60000;
                const beijingTime = new Date(utc + beijingOffset * 60000);
                
                // 精确时间
                const year = beijingTime.getFullYear();
                const month = beijingTime.getMonth() + 1;
                const day = beijingTime.getDate();
                const hour = beijingTime.getHours();
                const minute = beijingTime.getMinutes();
                const second = beijingTime.getSeconds();
                const hh = String(hour).padStart(2, '0');
                const mm = String(minute).padStart(2, '0');
                const ss = String(second).padStart(2, '0');
                
                // 时间段描述（0:00-6:00为凌晨，且日期认知需注意：0:00已经是新的一天）
                const timePeriod = hour < 1 ? '午夜' : hour < 6 ? '凌晨' : hour < 9 ? '早上' : hour < 12 ? '上午' : hour < 14 ? '中午' : hour < 17 ? '下午' : hour < 19 ? '傍晚' : hour < 22 ? '晚上' : '深夜';
                
                // 季节判断
                const season = month >= 3 && month <= 5 ? '春季' : month >= 6 && month <= 8 ? '夏季' : month >= 9 && month <= 11 ? '秋季' : '冬季';
                
                // 天气提示（根据季节推断）
                const weatherHint = season === '春季' ? '春暖花开，气候宜人' : season === '夏季' ? '天气炎热，阳光强烈' : season === '秋季' ? '秋高气爽，天气转凉' : '天气寒冷，注意保暖';
                
                // 光线描述
                const lightDesc = hour < 6 ? '天还没亮，四周一片漆黑' : hour < 9 ? '清晨的阳光刚刚洒下' : hour < 12 ? '阳光逐渐明亮' : hour < 14 ? '正午阳光最强烈' : hour < 17 ? '下午阳光依然充足' : hour < 19 ? '夕阳西下，天色渐暗' : hour < 22 ? '夜幕降临，华灯初上' : '夜深人静，大多数人都已入睡';
                
                // 氛围描述
                const atmosphere = hour < 6 ? '寂静清冷，适合安静思考' : hour < 9 ? '充满活力，新的一天开始' : hour < 12 ? '忙碌充实，工作学习的好时光' : hour < 14 ? '慵懒惬意，午休时光' : hour < 17 ? '精力充沛，下午时光' : hour < 19 ? '放松舒适，下班放学时间' : hour < 22 ? '温馨浪漫，夜晚休闲时光' : '安静私密，深夜独处时光';
                
                const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
                const weekDay = weekDays[beijingTime.getDay()];
                
                // 节日检测
                const festivals = {
                    '1-1': '元旦',
                    '2-14': '情人节',
                    '3-8': '妇女节',
                    '5-1': '劳动节',
                    '5-4': '青年节',
                    '6-1': '儿童节',
                    '7-1': '建党节',
                    '8-1': '建军节',
                    '9-10': '教师节',
                    '10-1': '国庆节',
                    '11-11': '双十一购物节',
                    '12-25': '圣诞节'
                };
                const todayFestival = festivals[`${month}-${day}`] || '';
                
                // 农历月份（简化版，仅作参考）
                const lunarMonths = ['正月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '冬月', '腊月'];
                
                let timeContext = `\n\n══════════════════════════════════════
【⏰ 实时时间感知 - 必须严格遵守】
══════════════════════════════════════
📅 今天是：${year}年${month}月${day}日
⏰ 当前时间：${timePeriod} ${hh}:${mm}:${ss}
📆 星期：星期${weekDay}
🌡️ 季节：${season}（${weatherHint}）
☀️ 光线：${lightDesc}
🎭 氛围：${atmosphere}
${todayFestival ? `🎉 节日：今天是${todayFestival}！` : ''}
══════════════════════════════════════

【⚠️ 时间行为准则 - 强制执行】
1. 你必须明确知道现在是${month}月${day}日${timePeriod}${hh}点${mm}分，但不要主动在对话中提及时间，除非用户问起或对话内容自然需要
2. 你必须根据当前真实时间调整回复语气和内容（如深夜回复慵懒、白天活泼）
3. 严禁反复强调时间（如"都X点了"、"已经X点了"），时间感知仅用于调整语气和行为
4. 饭点时间（11-13点、17-19点）可以提及吃饭相关话题
5. 根据季节调整对话内容（如秋天可以提天气转凉、落叶）
6. 如果用户问现在几点，你必须回答${hh}:${mm}`;
                
                // 计算与上一条消息的时间差
                const allMsgs = chatMessages[chat.contactName] || [];
                const recentMsgs = allMsgs.filter(m => m.type !== 'system');
                if (recentMsgs.length >= 2) {
                    const lastMsgTime = new Date(recentMsgs[recentMsgs.length - 1].time);
                    const prevMsgTime = new Date(recentMsgs[recentMsgs.length - 2].time);
                    const deltaMs = lastMsgTime - prevMsgTime;
                    const deltaHours = deltaMs / (1000 * 60 * 60);
                    const deltaDays = deltaMs / (1000 * 60 * 60 * 24);
                    
                    if (deltaHours < 1) {
                        timeContext += `\n距离上一条消息仅过了${Math.floor(deltaMs / 60000)}分钟，对话是连续的。`;
                    } else if (deltaHours < 24) {
                        timeContext += `\n距离上一条消息过了${Math.floor(deltaHours)}小时，${deltaHours < 3 ? '可以自然衔接话题' : '开头应该提及时间间隔'}。`;
                    } else if (deltaDays < 7) {
                        timeContext += `\n距离上一条消息已经过了${Math.floor(deltaDays)}天（确切${Math.floor(deltaHours)}小时）。你必须在回复开头主动提及这个时间间隔，并根据间隔调整语气（带点疏离或关切）。`;
                    } else {
                        const deltaWeeks = Math.floor(deltaDays / 7);
                        timeContext += `\n距离上一条消息已经过了${deltaWeeks}周（确切${Math.floor(deltaDays)}天）。你必须在回复开头主动提及阔别了这么久，语气要有明显的"重新联系"的感觉。`;
                    }
                }
                
                // 获取记忆总结
                const chatSettings = getChatSettings(chat.contactName);
                let memoryContext = '';
                if (chatSettings.onlineMemory) {
                    memoryContext = `\n\n【历史记忆总结】\n${chatSettings.onlineMemory}\n\n注意：以上是与该用户的历史聊天记忆总结，请在回复时参考这些记忆，保持对话的连贯性。\n`;
                }
                
                const systemPrompt = builtinPrompt + contactPersona + timeContext + memoryContext;

                // 检查今天是否有事件需要提及
                const today = new Date();
                const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
                const eventsKey = `events_${chat.contactName}_${today.getFullYear()}_${today.getMonth()}`;
                const savedEvents = JSON.parse(localStorage.getItem(eventsKey)) || [];
                const todayEvent = savedEvents.find(e => e.date === todayStr && !e.mentioned);

                let eventContext = '';
                if (todayEvent) {
                    eventContext = `\n\n【重要：今天发生的事情】\n今天是${todayStr}，你今天${todayEvent.event}。在回复中必须自然地提起这件事，就像日常聊天一样随口提到。\n`;
                    // 标记为已提及
                    todayEvent.mentioned = true;
                    localStorage.setItem(eventsKey, JSON.stringify(savedEvents));
                }

                // 构建对话历史上下文（最近30条消息，过滤掉线下记录）
                const recentMessages = messages.filter(m => !(m.type === 'system' && m.content?.startsWith('[线下见面记录]'))).slice(-30);
                const apiMessages = [{ role: 'system', content: systemPrompt + eventContext }];
                
                recentMessages.forEach(m => {
                    // 跳过纯系统消息，但保留红包/转账结果提示
                    if (m.type === 'system' && m.content && (m.content.includes('已领取') || m.content.includes('已收款') || m.content.includes('已退回'))) {
                        // 红包/转账结果消息，转为assistant视角
                        apiMessages.push({ role: 'assistant', content: `[系统提示：你${m.content}]` });
                        return;
                    }
                    if (m.type === 'system') return;
                    
                    const role = m.sender === 'self' ? 'user' : 'assistant';
                    let content = m.content;
                    
                    if (m.type === 'redpacket') {
                        content = `[用户给你发了红包 ¥${m.content}，你${m.opened ? '已经领取了这个红包' : '还没有领取这个红包'}]`;
                    } else if (m.type === 'transfer') {
                        const status = m.transferStatus === 'accepted' ? '你已经收下了这笔转账' : m.transferStatus === 'rejected' ? '你已经退回了这笔转账' : '这笔转账你还未处理';
                        content = `[用户给你发了转账 ¥${m.content}，${status}]`;
                    } else if (m.type === 'voice') {
                        content = `[用户发了一条语音消息 ${m.duration || ''}]`;
                    } else if (m.type === 'image') {
                        content = '[用户发了一张图片]';
                    } else if (!content && !m.type) {
                        return; // 跳过空消息
                    }
                    
                    if (content) {
                        apiMessages.push({ role, content });
                    }
                });
                
                // 确保最后一条是user消息
                if (apiMessages.length > 1 && apiMessages[apiMessages.length - 1].role !== 'user') {
                    apiMessages.push({ role: 'user', content: lastUserMessage.content });
                }
                
                const response = await fetch(fullUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                        model: model,
                        messages: apiMessages
                    })
                });
                
                if (!response.ok) {
                    const errorText = await response.text().catch(() => '');
                    throw new Error('HTTP ' + response.status + (errorText ? ': ' + errorText.substring(0, 100) : ''));
                }
                
                let data;
                try {
                    data = await response.json();
                } catch (parseErr) {
                    throw new Error('API返回数据格式异常');
                }
                
                const replyContent = data.choices?.[0]?.message?.content || '抱歉，我现在无法回复';
                
                // 按 ||| 分隔为多条消息
                let msgParts = replyContent.split('|||').map(s => s.trim()).filter(s => s.length > 0);
                
                // 如果AI没有正确使用分隔符，强制拆分为2-5条
                if (msgParts.length < 2) {
                    const fullText = msgParts[0] || replyContent;
                    // 按句号、感叹号、问号等标点拆分
                    const sentences = fullText.split(/(?<=[。！？\n])/g).filter(s => s.trim().length > 0);
                    if (sentences.length >= 2) {
                        // 合并为2-5条
                        const targetCount = Math.min(Math.max(sentences.length, 2), 5);
                        msgParts = [];
                        const chunkSize = Math.ceil(sentences.length / targetCount);
                        for (let i = 0; i < sentences.length; i += chunkSize) {
                            msgParts.push(sentences.slice(i, i + chunkSize).join('').trim());
                        }
                    } else {
                        // 内容太短无法拆分，直接作为一条
                        msgParts = [fullText];
                    }
                }
                
                // 限制最多5条
                if (msgParts.length > 5) msgParts = msgParts.slice(0, 5);
                
                // 逐条发送消息（无延迟）
                for (let i = 0; i < msgParts.length; i++) {
                    // 检测是否为红包或转账格式
                    const redPacketMatch = msgParts[i].match(/^\[红包\s+(\d+\.?\d*)\]$/);
                    const transferMatch = msgParts[i].match(/^\[转账\s+(\d+\.?\d*)\]$/);
                    
                    if (redPacketMatch) {
                        chatMessages[chat.contactName].push({
                            sender: 'other',
                            type: 'redpacket',
                            content: parseFloat(redPacketMatch[1]).toFixed(2),
                            time: new Date().toISOString()
                        });
                    } else if (transferMatch) {
                        chatMessages[chat.contactName].push({
                            sender: 'other',
                            type: 'transfer',
                            content: parseFloat(transferMatch[1]).toFixed(2),
                            time: new Date().toISOString()
                        });
                    } else {
                        chatMessages[chat.contactName].push({
                            sender: 'other',
                            content: msgParts[i],
                            time: new Date().toISOString()
                        });
                    }
                    localStorage.setItem('wechatChatMessages', JSON.stringify(chatMessages));
                    chat.lastMessage = msgParts[i];
                    localStorage.setItem('wechatChatList', JSON.stringify(chatList));
                    renderChatList();
                    renderChatMessages();
                }
                
                // 50%概率将一条文字消息转为语音（联系人发送语音）
                if (Math.random() < 0.5 && msgParts.length > 0) {
                    try {
                        const minimaxConfig = safeParseJSON(localStorage.getItem('minimaxConfig'));
                        if (minimaxConfig && minimaxConfig.url && minimaxConfig.key) {
                            // 随机选一条文字消息转为语音
                            const textMsgIndices = [];
                            const allMsgs = chatMessages[chat.contactName];
                            for (let i = allMsgs.length - msgParts.length; i < allMsgs.length; i++) {
                                if (allMsgs[i] && allMsgs[i].sender === 'other' && allMsgs[i].type !== 'voice' && allMsgs[i].type !== 'redpacket' && allMsgs[i].type !== 'transfer' && allMsgs[i].type !== 'system') {
                                    textMsgIndices.push(i);
                                }
                            }
                            
                            if (textMsgIndices.length > 0) {
                                const targetIdx = textMsgIndices[Math.floor(Math.random() * textMsgIndices.length)];
                                const targetMsg = allMsgs[targetIdx];
                                const voiceText = targetMsg.content;
                                
                                if (voiceText && voiceText.length <= 200) {
                                    // 调用MiniMax生成语音
                                    const voiceResp = await fetch(minimaxConfig.url + '/v1/audio/speech', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json',
                                            'Authorization': 'Bearer ' + minimaxConfig.key
                                        },
                                        body: JSON.stringify({
                                            model: minimaxConfig.model || 'speech-01-turbo',
                                            input: voiceText,
                                            voice: minimaxConfig.voice || 'female-shaonv',
                                            speed: parseFloat(minimaxConfig.speed) || 1.0,
                                            response_format: 'mp3'
                                        })
                                    });
                                    
                                    if (voiceResp.ok) {
                                        const audioBlob = await voiceResp.blob();
                                        const audioBase64 = await blobToBase64(audioBlob);
                                        const estimatedDuration = Math.max(1, Math.ceil(voiceText.length / 3));
                                        
                                        // 将文字消息转为语音消息
                                        allMsgs[targetIdx] = {
                                            sender: 'other',
                                            type: 'voice',
                                            content: audioBase64,
                                            text: voiceText,
                                            duration: estimatedDuration + '″',
                                            time: targetMsg.time
                                        };
                                        
                                        try {
                                            localStorage.setItem('wechatChatMessages', JSON.stringify(chatMessages));
                                        } catch(e) {
                                            allMsgs[targetIdx].content = '';
                                            localStorage.setItem('wechatChatMessages', JSON.stringify(chatMessages));
                                        }
                                        
                                        renderChatMessages();
                                    }
                                }
                            }
                        }
                    } catch(voiceErr) {
                        console.warn('联系人语音生成失败，保持文字消息:', voiceErr);
                    }
                }
                
            } catch (error) {
                const errMsg = error && typeof error.message === 'string' ? error.message : '未知错误';
                console.error('线上模式API错误:', errMsg);
                
                // 网络变化错误自动重试一次
                if (errMsg.includes('NETWORK_CHANGED') || errMsg.includes('ERR_NETWORK')) {
                    console.log('网络变化，1秒后自动重试...');
                    setTimeout(() => replyMessage(), 1000);
                    return;
                }
                
                let errorHint = '';
                if (errMsg.includes('401') || errMsg.includes('403')) {
                    errorHint = 'API密钥无效或已过期';
                } else if (errMsg.includes('404')) {
                    errorHint = 'API地址错误，请检查URL是否正确';
                } else if (errMsg.includes('429')) {
                    errorHint = '请求过于频繁，请稍后再试';
                } else if (errMsg.includes('500') || errMsg.includes('502') || errMsg.includes('503')) {
                    errorHint = 'API服务器错误，请稍后再试';
                } else if (errMsg.includes('fetch') || errMsg.includes('network')) {
                    errorHint = '网络连接失败，请检查网络';
                } else {
                    errorHint = '请检查API配置是否正确';
                }
                chatMessages[chat.contactName].push({
                    sender: 'other',
                    content: '回复失败：' + errorHint + ' (' + errMsg + ')',
                    time: new Date().toISOString()
                });
                localStorage.setItem('wechatChatMessages', JSON.stringify(chatMessages));
                chat.lastMessage = '回复失败';
                localStorage.setItem('wechatChatList', JSON.stringify(chatList));
                renderChatList();
                renderChatMessages();
            } finally {
                replyBtn.disabled = false;
                replyBtn.style.opacity = '1';
                replyBtn.innerHTML = replyBtnSvg;
                // 隐藏"对方正在输入..."
                document.getElementById('chatRoomTyping').style.display = 'none';
                // 重置防抖标志
                isReplyingMessage = false;
            }
        }

        // ========== 长按消息菜单 ==========
        const contextMenu = document.getElementById('wechatMsgContextMenu');
        let contextMsgIndex = -1;
        let longPressTimer = null;
        let isLongPress = false;
        let editingMsgType = ''; // 'online' 或 'offline'，标记当前编辑的是哪种消息
        let editingMsgIndex = -1; // 当前编辑的消息索引
        let pendingQuote = null; // 待发送的引用消息 { sender, content }

        // 统一的消息编辑函数
        function openMsgEdit(content, msgIndex, type) {
            editingMsgIndex = msgIndex;
            editingMsgType = type;
            document.getElementById('msgEditInput').value = content;
            document.getElementById('msgEditModal').style.display = 'flex';
            setTimeout(() => document.getElementById('msgEditInput').focus(), 100);
        }

        // 保存编辑
        document.getElementById('msgEditSave').addEventListener('click', (e) => {
            e.stopPropagation();
            const newContent = document.getElementById('msgEditInput').value.trim();
            if (!newContent || editingMsgIndex < 0) {
                document.getElementById('msgEditModal').style.display = 'none';
                return;
            }
            if (editingMsgType === 'online') {
                const chat = chatList[currentChatIndex];
                if (chat) {
                    const messages = chatMessages[chat.contactName] || [];
                    messages[editingMsgIndex].content = newContent;
                    localStorage.setItem('wechatChatMessages', JSON.stringify(chatMessages));
                    renderChatMessages();
                }
            } else if (editingMsgType === 'offline') {
                offlineMessages[currentOfflineContact][editingMsgIndex].content = newContent;
                localStorage.setItem('wechatOfflineMessages', JSON.stringify(offlineMessages));
                renderOfflineMessages();
            }
            document.getElementById('msgEditModal').style.display = 'none';
            editingMsgIndex = -1;
            editingMsgType = '';
        });

        // 取消编辑
        document.getElementById('msgEditCancel').addEventListener('click', () => {
            document.getElementById('msgEditModal').style.display = 'none';
            editingMsgIndex = -1;
            editingMsgType = '';
        });

        // 回车保存，Esc取消
        document.getElementById('msgEditInput').addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                document.getElementById('msgEditSave').click();
            }
            if (e.key === 'Escape') {
                document.getElementById('msgEditCancel').click();
            }
        });

        // 长按检测
        document.getElementById('chatRoomMessages').addEventListener('touchstart', (e) => {
            const msgContentEl = e.target.closest('.wechat-chat-message-content');
            if (!msgContentEl) return;
            const msgEl = msgContentEl.closest('.wechat-chat-message');
            if (!msgEl) return;
            isLongPress = false;
            longPressTimer = setTimeout(() => {
                isLongPress = true;
                contextMsgIndex = parseInt(msgEl.dataset.msgIndex);
                showContextMenu(e.touches[0].clientX, e.touches[0].clientY, contextMsgIndex);
            }, 500);
        }, { passive: true });

        document.getElementById('chatRoomMessages').addEventListener('touchend', () => {
            clearTimeout(longPressTimer);
        });

        document.getElementById('chatRoomMessages').addEventListener('touchmove', () => {
            clearTimeout(longPressTimer);
        });

        // PC端右键长按
        document.getElementById('chatRoomMessages').addEventListener('contextmenu', (e) => {
            const msgContentEl = e.target.closest('.wechat-chat-message-content');
            if (!msgContentEl) return;
            const msgEl = msgContentEl.closest('.wechat-chat-message');
            if (!msgEl) return;
            e.preventDefault();
            contextMsgIndex = parseInt(msgEl.dataset.msgIndex);
            showContextMenu(e.clientX, e.clientY, contextMsgIndex);
        });

        function showContextMenu(x, y, msgIndex) {
            const chat = chatList[currentChatIndex];
            if (!chat) return;
            const messages = chatMessages[chat.contactName] || [];
            const msg = messages[msgIndex];
            if (!msg || msg.type === 'system') return;

            // 根据消息类型显示/隐藏菜单项
            const items = contextMenu.querySelectorAll('.wechat-msg-context-menu-item');
            const settings = getChatSettings(chat.contactName);
            items.forEach(item => {
                item.style.display = '';
                const action = item.dataset.action;
                // 编辑和撤回只能对自己的文本消息操作
                if ((action === 'edit' || action === 'recall') && msg.sender !== 'self') {
                    item.style.display = 'none';
                }
                // 重回只能对AI消息操作
                if (action === 'regen' && msg.sender !== 'other') {
                    item.style.display = 'none';
                }
                // 心声只能对AI消息显示，且需要开启心声模式
                if (action === 'innervoice' && (msg.sender !== 'other' || !settings.innerVoiceEnabled)) {
                    item.style.display = 'none';
                }
                // 编辑和复制只对文本消息有效
                if ((action === 'edit' || action === 'copy') && msg.type && msg.type !== 'text') {
                    item.style.display = 'none';
                }
            });

            // 定位菜单
            const chatRoom = document.getElementById('wechatChatRoom');
            const rect = chatRoom.getBoundingClientRect();
            let left = x - rect.left;
            let top = y - rect.top;
            // 防止溢出
            if (left + 130 > rect.width) left = rect.width - 140;
            if (top + 300 > rect.height) top -= 200;
            if (left < 10) left = 10;
            if (top < 10) top = 10;

            contextMenu.style.left = left + 'px';
            contextMenu.style.top = top + 'px';
            contextMenu.classList.add('open');
        }

        function hideContextMenu() {
            contextMenu.classList.remove('open');
            contextMsgIndex = -1;
        }

        // 点击其他区域关闭菜单
        document.addEventListener('click', (e) => {
            if (!contextMenu.contains(e.target)) {
                hideContextMenu();
            }
        });
        document.addEventListener('touchstart', (e) => {
            if (!contextMenu.contains(e.target)) {
                hideContextMenu();
            }
        }, { passive: true });

        // 菜单项点击事件
        contextMenu.addEventListener('click', (e) => {
            const item = e.target.closest('.wechat-msg-context-menu-item');
            if (!item) return;
            const action = item.dataset.action;
            const chat = chatList[currentChatIndex];
            if (!chat || contextMsgIndex < 0) { hideContextMenu(); return; }
            const messages = chatMessages[chat.contactName] || [];
            const msg = messages[contextMsgIndex];
            if (!msg) { hideContextMenu(); return; }

            switch (action) {
                case 'copy': {
                    if (navigator.clipboard) {
                        navigator.clipboard.writeText(msg.content).then(() => {
                            // 复制成功提示
                            showChatToast('已复制');
                        });
                    }
                    break;
                }
                case 'forward': {
                    showChatToast('已转发');
                    break;
                }
                case 'collect': {
                    showChatToast('已收藏');
                    break;
                }
                case 'quote': {
                    const quoteText = (!msg.type || msg.type === 'text') ? msg.content : '[消息]';
                    const quoteSender = msg.sender === 'self' ? '我' : (chat.contactName || '对方');
                    pendingQuote = { sender: quoteSender, content: quoteText };
                    // 显示引用预览
                    document.getElementById('quotePreviewSender').textContent = quoteSender;
                    document.getElementById('quotePreviewContent').textContent = quoteText.length > 30 ? quoteText.substring(0, 30) + '...' : quoteText;
                    document.getElementById('quotePreview').classList.add('show');
                    document.getElementById('chatRoomInput').focus();
                    break;
                }
                case 'edit': {
                    if (msg.sender === 'self' && (!msg.type || msg.type === 'text')) {
                        const idx = contextMsgIndex;
                        hideContextMenu();
                        openMsgEdit(msg.content, idx, 'online');
                    }
                    break;
                }
                case 'recall': {
                    if (msg.sender === 'self') {
                        messages.splice(contextMsgIndex, 1);
                        localStorage.setItem('wechatChatMessages', JSON.stringify(chatMessages));
                        // 更新预览
                        const lastMsg = messages.filter(m => m.sender === 'self').pop();
                        chat.lastMessage = lastMsg ? lastMsg.content : '';
                        localStorage.setItem('wechatChatList', JSON.stringify(chatList));
                        renderChatList();
                        renderChatMessages();
                        // 添加撤回系统消息
                        messages.splice(contextMsgIndex, 0, {
                            sender: 'system',
                            type: 'system',
                            content: '你撤回了一条消息',
                            time: new Date().toISOString()
                        });
                        localStorage.setItem('wechatChatMessages', JSON.stringify(chatMessages));
                        renderChatMessages();
                    }
                    break;
                }
                case 'regen': {
                    if (msg.sender === 'other') {
                        const chat = chatList[currentChatIndex];
                        if (!chat) break;
                        const contactName = chat.contactName;
                        
                        // 从localStorage重新读取最新数据
                        const currentMsgs = JSON.parse(localStorage.getItem('wechatChatMessages')) || {};
                        const msgs = currentMsgs[contactName] || [];
                        
                        // 找到本轮连续AI消息的起始位置（用户消息之后）
                        let startIdx = contextMsgIndex;
                        while (startIdx > 0 && msgs[startIdx - 1] && msgs[startIdx - 1].sender === 'other') {
                            startIdx--;
                        }
                        // 找到本轮连续AI消息的结束位置（下一条用户消息之前）
                        let endIdx = contextMsgIndex;
                        while (endIdx < msgs.length - 1 && msgs[endIdx + 1] && msgs[endIdx + 1].sender === 'other') {
                            endIdx++;
                        }
                        // 删除从startIdx到endIdx的所有连续AI消息
                        const newMsgs = [...msgs.slice(0, startIdx), ...msgs.slice(endIdx + 1)];
                        // 强制更新chatMessages对象和localStorage
                        currentMsgs[contactName] = newMsgs;
                        chatMessages = currentMsgs;
                        localStorage.setItem('wechatChatMessages', JSON.stringify(chatMessages));
                        // 清空消息区域强制重新渲染
                        document.getElementById('chatRoomMessages').innerHTML = '';
                        renderChatMessages();
                        hideContextMenu();
                        // 重新触发AI回复
                        replyMessage();
                        return;
                    }
                    break;
                }
                case 'innervoice': {
                    if (msg.sender === 'other') {
                        const chat = chatList[currentChatIndex];
                        if (!chat) break;
                        const settings = getChatSettings(chat.contactName);
                        if (!settings.innerVoiceEnabled) {
                            showChatToast('请先在聊天设置中开启心声模式');
                            break;
                        }
                        // 显示加载状态
                        document.getElementById('chatSettingsInnerVoiceContent').innerHTML = '<div style="text-align:center;color:#999;">正在生成心声...</div>';
                        document.getElementById('chatSettingsInnerVoiceModal').classList.add('open');
                        // 异步生成心声
                        generateInnerVoice(chat.contactName, msg.content).then(result => {
                            document.getElementById('chatSettingsInnerVoiceContent').textContent = result;
                        });
                    }
                    break;
                }
                case 'delete': {
                    messages.splice(contextMsgIndex, 1);
                    localStorage.setItem('wechatChatMessages', JSON.stringify(chatMessages));
                    renderChatMessages();
                    break;
                }
            }
            hideContextMenu();
        });

        // 聊天内Toast提示
        function showChatToast(text) {
            const existing = document.querySelector('.wechat-chat-toast');
            if (existing) existing.remove();
            const toast = document.createElement('div');
            toast.className = 'wechat-chat-toast';
            toast.textContent = text;
            document.getElementById('wechatChatRoom').appendChild(toast);
            setTimeout(() => toast.remove(), 1500);
        }

        // ========== 红包和转账交互 ==========
        let currentRedpacketIndex = -1;
        let currentTransferIndex = -1;

        // 全局红包打开函数
        window.openRedpacketModal = function(idx) {
            currentRedpacketIndex = idx;
            const modal = document.getElementById('wechatRedpacketModal');
            if (modal) modal.classList.add('open');
        };

        // 全局转账打开函数
        window.openTransferModal = function(idx) {
            currentTransferIndex = idx;
            
            const chat = chatList[currentChatIndex];
            if (!chat) return;
            
            const messages = chatMessages[chat.contactName] || [];
            const msg = messages[currentTransferIndex];
            if (!msg || msg.type !== 'transfer') return;
            
            const modal = document.getElementById('wechatTransferModal');
            const amountEl = document.getElementById('wechatTransferAmount');
            
            if (amountEl) amountEl.textContent = '¥' + msg.content;
            if (modal) modal.style.display = 'flex';
        };

        // 语音消息点击播放
        document.getElementById('chatRoomMessages').addEventListener('click', (e) => {
            const voicePlayer = e.target.closest('.voice-msg-player');
            if (!voicePlayer) return;
            
            const msgIndex = parseInt(voicePlayer.closest('[data-msg-index]')?.dataset.msgIndex);
            if (isNaN(msgIndex)) return;
            
            const chat = chatList[currentChatIndex];
            if (!chat) return;
            const messages = chatMessages[chat.contactName] || [];
            const msg = messages[msgIndex];
            
            // 停止其他正在播放的音频
            if (window._currentVoiceAudio) {
                window._currentVoiceAudio.pause();
                window._currentVoiceAudio = null;
            }
            
            // 播放动画
            const icon = voicePlayer.querySelector('span');
            const originalIcon = icon.textContent;
            icon.textContent = '🔊';
            
            let audioSrc = msg.content || '';
            if (!audioSrc) {
                showChatToast('该语音无法播放（已过期，请重新录制）');
                icon.textContent = originalIcon;
                return;
            }
            
            const audio = new Audio(audioSrc);
            window._currentVoiceAudio = audio;
            
            audio.play().catch(() => {
                showChatToast('语音播放失败');
                icon.textContent = originalIcon;
            });
            
            audio.onended = () => {
                icon.textContent = originalIcon;
                window._currentVoiceAudio = null;
            };
        });

        // 语音转文字按钮点击
        document.getElementById('chatRoomMessages').addEventListener('click', (e) => {
            const toTextBtn = e.target.closest('.voice-to-text-btn');
            if (!toTextBtn) return;
            
            const msgIndex = parseInt(toTextBtn.dataset.msgIndex);
            if (isNaN(msgIndex)) return;
            
            const chat = chatList[currentChatIndex];
            if (!chat) return;
            const messages = chatMessages[chat.contactName] || [];
            const msg = messages[msgIndex];
            
            if (msg && msg.text) {
                document.getElementById('voiceToTextContent').textContent = msg.text;
                document.getElementById('voiceToTextModal').style.display = 'flex';
            } else {
                showChatToast('该语音消息没有文字内容');
            }
        });

        // 红包点击事件 - 只有对方发的红包才能点击
        document.getElementById('chatRoomMessages').addEventListener('click', (e) => {
            const redpacket = e.target.closest('.wechat-redpacket:not(.opened)');
            if (!redpacket) return;
            
            currentRedpacketIndex = parseInt(redpacket.dataset.msgIndex);
            const chat = chatList[currentChatIndex];
            if (!chat) return;
            
            const messages = chatMessages[chat.contactName] || [];
            const msg = messages[currentRedpacketIndex];
            // 只有对方发的红包才能点击领取
            if (!msg || msg.type !== 'redpacket' || msg.opened || msg.sender === 'self') return;
            
            document.getElementById('wechatRedpacketModal').classList.add('open');
        });

        // 关闭红包模态框
        document.getElementById('wechatRedpacketClose').addEventListener('click', () => {
            document.getElementById('wechatRedpacketModal').classList.remove('open');
            currentRedpacketIndex = -1;
        });

        // 点击红包模态框背景关闭
        document.getElementById('wechatRedpacketModal').addEventListener('click', (e) => {
            if (e.target.id === 'wechatRedpacketModal') {
                document.getElementById('wechatRedpacketModal').classList.remove('open');
                currentRedpacketIndex = -1;
            }
        });

        // 开红包按钮
        document.getElementById('wechatRedpacketOpenBtn').addEventListener('click', () => {
            const chat = chatList[currentChatIndex];
            if (!chat || currentRedpacketIndex < 0) return;
            const contactName = chat.contactName;
            
            if (chatMessages[contactName] && chatMessages[contactName][currentRedpacketIndex]) {
                chatMessages[contactName][currentRedpacketIndex].opened = true;
                localStorage.setItem('wechatChatMessages', JSON.stringify(chatMessages));
                renderChatMessages();
            }
            
            document.getElementById('wechatRedpacketModal').classList.remove('open');
            currentRedpacketIndex = -1;
            showChatToast('已领取红包');
        });

        // 转账模态框点击事件 - 合并处理按钮和背景关闭
        document.getElementById('wechatTransferModal').addEventListener('click', (e) => {
            // 处理按钮点击
            const btn = e.target.closest('.wechat-transfer-dialog-btn');
            if (btn) {
                e.preventDefault();
                
                if (currentTransferIndex < 0) return;
                
                const chat = chatList[currentChatIndex];
                if (!chat) return;
                const contactName = chat.contactName;
                
                const isAccept = btn.id === 'wechatTransferAcceptBtn';
                const newStatus = isAccept ? 'accepted' : 'rejected';
                const toastMsg = isAccept ? '已收款' : '已退回';
                
                if (chatMessages[contactName] && chatMessages[contactName][currentTransferIndex]) {
                    chatMessages[contactName][currentTransferIndex].transferStatus = newStatus;
                    localStorage.setItem('wechatChatMessages', JSON.stringify(chatMessages));
                    renderChatMessages();
                    showChatToast(toastMsg);
                }
                
                document.getElementById('wechatTransferModal').style.display = 'none';
                currentTransferIndex = -1;
                return;
            }
            
            // 处理背景点击关闭
            if (e.target.id === 'wechatTransferModal') {
                document.getElementById('wechatTransferModal').style.display = 'none';
                currentTransferIndex = -1;
            }
        });

        // 聊天页面事件
        document.getElementById('chatRoomBack').addEventListener('click', () => {
            document.getElementById('wechatChatRoom').classList.remove('open');
            currentChatIndex = -1;
            // 清除保存的聊天索引
            localStorage.removeItem('currentChatIndex');
        });

        document.getElementById('chatRoomSendBtn').addEventListener('click', sendMessage);
        document.getElementById('chatRoomInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });

        // iOS键盘适配 - 已删除visualViewport监听，避免黑屏问题
        // 键盘弹出时不再动态调整高度，页面保持固定大小

        // 关闭引用预览
        document.getElementById('quotePreviewClose')?.addEventListener('click', () => {
            pendingQuote = null;
            document.getElementById('quotePreview').classList.remove('show');
        });

        // ========== 位置发送弹窗 ==========
        document.getElementById('locationCancel')?.addEventListener('click', () => {
            document.getElementById('locationModal').style.display = 'none';
        });

        document.getElementById('locationSend')?.addEventListener('click', () => {
            const locText = document.getElementById('locationInput').value.trim();
            if (!locText) return;
            const chat = chatList[currentChatIndex];
            if (!chat) return;
            if (!chatMessages[chat.contactName]) chatMessages[chat.contactName] = [];
            chatMessages[chat.contactName].push({
                sender: 'self',
                type: 'location',
                content: locText,
                time: new Date().toISOString()
            });
            localStorage.setItem('wechatChatMessages', JSON.stringify(chatMessages));
            chat.lastMessage = '[位置]';
            const now = new Date();
            chat.time = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
            localStorage.setItem('wechatChatList', JSON.stringify(chatList));
            renderChatList();
            renderChatMessages();
            document.getElementById('locationModal').style.display = 'none';
            // 关闭+号面板
            plusPanelOpen = false;
            plusPanel.classList.remove('open');
            plusBtn.textContent = '＋';
        });

        // ========== 语音文字编辑弹窗 ==========
        let voiceTextTargetContact = '';

        function showVoiceTextModal(contactName) {
            voiceTextTargetContact = contactName;
            document.getElementById('voiceTextInput').value = '';
            document.getElementById('voiceTextStatus').style.display = 'none';
            document.getElementById('voiceTextModal').style.display = 'flex';
            // 关闭+号面板
            plusPanelOpen = false;
            plusPanel.classList.remove('open');
            plusBtn.textContent = '＋';
        }

        document.getElementById('voiceTextCancel')?.addEventListener('click', () => {
            document.getElementById('voiceTextModal').style.display = 'none';
        });

        document.getElementById('voiceTextSend')?.addEventListener('click', async () => {
            const text = document.getElementById('voiceTextInput').value.trim();
            if (!text) {
                showChatToast('请输入要转换的文字');
                return;
            }

            try {
                // 直接发送文字语音消息（不调用MiniMax API）
                const estimatedDuration = Math.max(1, Math.ceil(text.length / 3));

                const chat = chatList.find(c => c.contactName === voiceTextTargetContact);
                if (!chat) {
                    showChatToast('找不到联系人');
                    return;
                }

                if (!chatMessages[voiceTextTargetContact]) chatMessages[voiceTextTargetContact] = [];
                const voiceMsg = {
                    sender: 'self',
                    type: 'voice',
                    content: '', // 无音频数据，纯文字语音
                    text: text,
                    duration: estimatedDuration + '″',
                    time: new Date().toISOString()
                };
                chatMessages[voiceTextTargetContact].push(voiceMsg);
                localStorage.setItem('wechatChatMessages', JSON.stringify(chatMessages));

                chat.lastMessage = '[语音]';
                const now = new Date();
                chat.time = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
                localStorage.setItem('wechatChatList', JSON.stringify(chatList));
                renderChatList();
                renderChatMessages();

                document.getElementById('voiceTextModal').style.display = 'none';
                showChatToast('语音消息已发送');

            } catch(err) {
                console.error('语音发送失败:', err);
                showChatToast('发送失败: ' + err.message);
            }
        });

        // Blob转Base64
        function blobToBase64(blob) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            });
        }

        // ========== 语音转文字弹窗 ==========
        document.getElementById('voiceToTextClose')?.addEventListener('click', () => {
            document.getElementById('voiceToTextModal').style.display = 'none';
        });

        document.getElementById('locationInput')?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                document.getElementById('locationSend').click();
            }
            if (e.key === 'Escape') {
                document.getElementById('locationModal').style.display = 'none';
            }
        });

        document.getElementById('chatRoomReplyBtn').addEventListener('click', replyMessage);

        // ========== 金额输入模态框（替代prompt） ==========
        let amountInputCallback = null;

        window.showAmountInput = function(title, callback) {
            amountInputCallback = callback;
            document.getElementById('wechatAmountTitle').textContent = title;
            document.getElementById('wechatAmountInput').value = '';
            document.getElementById('wechatAmountModal').style.display = 'flex';
            setTimeout(() => document.getElementById('wechatAmountInput').focus(), 100);
        };

        document.getElementById('wechatAmountConfirmBtn').addEventListener('click', () => {
            const input = document.getElementById('wechatAmountInput');
            const amount = parseFloat(input.value);
            if (!amount || amount <= 0) {
                showChatToast('请输入有效金额');
                return;
            }
            document.getElementById('wechatAmountModal').style.display = 'none';
            if (amountInputCallback) {
                amountInputCallback(amount);
                amountInputCallback = null;
            }
        });

        document.getElementById('wechatAmountCancelBtn').addEventListener('click', () => {
            document.getElementById('wechatAmountModal').style.display = 'none';
            amountInputCallback = null;
        });

        document.getElementById('wechatAmountModal').addEventListener('click', (e) => {
            if (e.target.id === 'wechatAmountModal') {
                document.getElementById('wechatAmountModal').style.display = 'none';
                amountInputCallback = null;
            }
        });

        document.getElementById('wechatAmountInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                document.getElementById('wechatAmountConfirmBtn').click();
            }
        });

        // ========== +号弹出菜单 ==========
        const plusPanel = document.getElementById('wechatPlusPanel');
        const plusBtn = document.getElementById('chatRoomPlusBtn');
        let plusPanelOpen = false;

        plusBtn.addEventListener('click', () => {
            plusPanelOpen = !plusPanelOpen;
            if (plusPanelOpen) {
                plusPanel.classList.add('open');
                plusBtn.textContent = '✕';
            } else {
                plusPanel.classList.remove('open');
                plusBtn.textContent = '＋';
            }
        });

        // +号菜单项点击事件
        plusPanel.addEventListener('click', (e) => {
            const item = e.target.closest('.wechat-plus-panel-item');
            if (!item) return;
            const action = item.dataset.action;
            console.log('Plus panel clicked, action:', action);
            const chat = chatList[currentChatIndex];
            if (!chat) {
                console.log('No chat selected');
                return;
            }
            const contactName = chat.contactName;
            const now = new Date();
            const timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

            if (!chatMessages[contactName]) chatMessages[contactName] = [];
            console.log('Processing action:', action, 'for contact:', contactName);

            switch (action) {
                case 'photo': {
                    const input = document.createElement('input');
                    input.type = 'file';
                    input.accept = 'image/*';
                    input.onchange = (ev) => {
                        const file = ev.target.files[0];
                        if (!file) return;
                        const reader = new FileReader();
                        reader.onload = (re) => {
                            chatMessages[contactName].push({
                                sender: 'self',
                                type: 'image',
                                content: re.target.result,
                                time: new Date().toISOString()
                            });
                            localStorage.setItem('wechatChatMessages', JSON.stringify(chatMessages));
                            chat.lastMessage = '[图片]';
                            chat.time = timeStr;
                            localStorage.setItem('wechatChatList', JSON.stringify(chatList));
                            renderChatList();
                            renderChatMessages();
                        };
                        reader.readAsDataURL(file);
                    };
                    input.click();
                    break;
                }
                case 'camera': {
                    const input = document.createElement('input');
                    input.type = 'file';
                    input.accept = 'image/*';
                    input.capture = 'environment';
                    input.onchange = (ev) => {
                        const file = ev.target.files[0];
                        if (!file) return;
                        const reader = new FileReader();
                        reader.onload = (re) => {
                            chatMessages[contactName].push({
                                sender: 'self',
                                type: 'image',
                                content: re.target.result,
                                time: new Date().toISOString()
                            });
                            localStorage.setItem('wechatChatMessages', JSON.stringify(chatMessages));
                            chat.lastMessage = '[照片]';
                            chat.time = timeStr;
                            localStorage.setItem('wechatChatList', JSON.stringify(chatList));
                            renderChatList();
                            renderChatMessages();
                        };
                        reader.readAsDataURL(file);
                    };
                    input.click();
                    break;
                }
                case 'videocall': {
                    // 保存当前联系人
                    videoCallContactName = contactName;
                    isVideoCallConnected = false;
                    
                    // 打开视频通话界面
                    const videoCallPage = document.getElementById('wechatVideoCallPage');
                    const videoCallAvatar = document.getElementById('videoCallAvatarImg');
                    const videoCallName = document.getElementById('videoCallName');
                    const videoCallStatus = document.getElementById('videoCallStatus');
                    
                    // 设置联系人信息
                    const contact = wechatContacts.find(c => c.name === contactName) || { name: contactName, avatar: '' };
                    videoCallAvatar.src = contact.avatar || '';
                    videoCallAvatar.onerror = () => { videoCallAvatar.style.display = 'none'; };
                    videoCallName.textContent = contact.name;
                    videoCallStatus.textContent = '正在等待对方接听...';
                    
                    // 显示视频通话页面
                    videoCallPage.classList.add('active');
                    
                    // 2-3秒后AI接听
                    setTimeout(() => {
                        isVideoCallConnected = true;
                        videoCallStatus.textContent = '已接通';
                        
                        // 添加系统消息到聊天记录
                        chatMessages[contactName].push({
                            sender: 'system',
                            type: 'system',
                            content: '视频通话已接通',
                            time: new Date().toISOString()
                        });
                        localStorage.setItem('wechatChatMessages', JSON.stringify(chatMessages));
                    }, 2000 + Math.random() * 1000);
                    
                    break;
                }
                case 'voice': {
                    // 显示语音文字编辑弹窗
                    showVoiceTextModal(contactName);
                    break;
                }
                case 'location': {
                    // 显示自定义位置弹窗
                    const locModal = document.getElementById('locationModal');
                    document.getElementById('locationInput').value = '';
                    locModal.style.display = 'flex';
                    setTimeout(() => document.getElementById('locationInput').focus(), 100);
                    break;
                }
                case 'redpacket': {
                    window.showAmountInput('请输入红包金额（元）', (amount) => {
                        chatMessages[contactName].push({
                            sender: 'self',
                            type: 'redpacket',
                            content: parseFloat(amount).toFixed(2),
                            time: new Date().toISOString()
                        });
                        localStorage.setItem('wechatChatMessages', JSON.stringify(chatMessages));
                        chat.lastMessage = '[红包] ¥' + parseFloat(amount).toFixed(2);
                        chat.time = timeStr;
                        localStorage.setItem('wechatChatList', JSON.stringify(chatList));
                        renderChatList();
                        renderChatMessages();
                    });
                    break;
                }
                case 'transfer': {
                    window.showAmountInput('请输入转账金额（元）', (amount) => {
                        chatMessages[contactName].push({
                            sender: 'self',
                            type: 'transfer',
                            content: parseFloat(amount).toFixed(2),
                            time: new Date().toISOString()
                        });
                        localStorage.setItem('wechatChatMessages', JSON.stringify(chatMessages));
                        chat.lastMessage = '[转账] ¥' + parseFloat(amount).toFixed(2);
                        chat.time = timeStr;
                        localStorage.setItem('wechatChatList', JSON.stringify(chatList));
                        renderChatList();
                        renderChatMessages();
                    });
                    break;
                }
                case 'offline': {
                    // 打开线下模式页面
                    openOfflinePage();
                    break;
                }
            }

            // 关闭菜单
            plusPanelOpen = false;
            plusPanel.classList.remove('open');
            plusBtn.textContent = '＋';
        });

        // Tab切换
        document.querySelectorAll('.wechat-tab-item').forEach(tab => {
            tab.addEventListener('click', () => {
                // 移除所有active
                document.querySelectorAll('.wechat-tab-item').forEach(t => {
                    t.classList.remove('active');
                    // 图标变灰
                    t.querySelectorAll('svg path, svg circle, svg line, svg rect').forEach(p => {
                        p.setAttribute('stroke', '#999');
                    });
                    t.querySelectorAll('.wechat-tab-label').forEach(l => {
                        l.style.color = '#999';
                    });
                });
                document.querySelectorAll('.wechat-tab-content').forEach(c => c.classList.remove('active'));
                // 激活当前
                tab.classList.add('active');
                const tabId = tab.dataset.tab;
                document.getElementById(tabId).classList.add('active');
                // 图标变绿
                tab.querySelectorAll('svg path, svg circle, svg line, svg rect').forEach(p => {
                    p.setAttribute('stroke', '#07C160');
                });
                tab.querySelectorAll('.wechat-tab-label').forEach(l => {
                    l.style.color = '#07C160';
                });
            });
        });

        // ========== 线下模式功能 ==========
        let currentOfflineContact = null;
        // offlineMessages 已在前面声明

        // 初始化线下模式数据（合并到已声明的对象）
        function initOfflineData() {
            const saved = localStorage.getItem('wechatOfflineMessages');
            if (saved) {
                Object.assign(offlineMessages, JSON.parse(saved));
            }
        }

        // 获取线下设置
        function getOfflineSettings() {
            return {
                wordCount: parseInt(localStorage.getItem('offlineWordCount_' + currentOfflineContact)) || 100,
                memoryRounds: parseInt(localStorage.getItem('offlineMemoryRounds_' + currentOfflineContact)) || 10,
                styles: JSON.parse(localStorage.getItem('offlineStyles_' + currentOfflineContact) || '[]'),
                npcEnabled: localStorage.getItem('offlineNpc_' + currentOfflineContact) === 'true'
            };
        }

        // 打开线下模式页面
        function openOfflinePage() {
            const chat = chatList[currentChatIndex];
            if (!chat) return;
            currentOfflineContact = chat.contactName;
            
            if (!offlineMessages[currentOfflineContact]) {
                offlineMessages[currentOfflineContact] = [];
            }
            
            document.getElementById('wechatOfflinePage').classList.add('open');
            renderOfflineMessages();
            applyOfflineBg();
            applyOfflineCss();
            
            // 加载设置
            const settings = getOfflineSettings();
            const wcInput = document.getElementById('offlineWordCountInput');
            const mrInput = document.getElementById('offlineMemoryRoundsInput');
            if (wcInput && settings.wordCount) wcInput.value = settings.wordCount;
            if (mrInput && settings.memoryRounds) mrInput.value = settings.memoryRounds;
            // 恢复NPC开关状态
            const npcToggle = document.getElementById('offlineNpcToggle');
            if (npcToggle) npcToggle.checked = settings.npcEnabled;
        }

        // 渲染线下消息
        function renderOfflineMessages() {
            const container = document.getElementById('wechatOfflineMessages');
            const messages = offlineMessages[currentOfflineContact] || [];
            // 线下聊天使用 currentOfflineContact，不使用 currentChatIndex
            const contact = currentOfflineContact ? wechatContacts.find(c => c.name === currentOfflineContact) : null;
            
            // 获取时间戳设置
            const chatSettings = getChatSettings(currentOfflineContact);
            const showTimestamp = chatSettings.showTimestamp || false;
            
            container.innerHTML = messages.map((msg, idx) => {
                // 系统消息（撤回提示）
                if (msg.sender === 'system') {
                    return `<div style="text-align:center;padding:8px 0;font-size:12px;color:#999;">${escapeHtml(msg.content)}</div>`;
                }
                
                const isSelf = msg.sender === 'self';
                const name = isSelf ? '我' : (contact ? contact.name : 'AI');
                const avatarBg = isSelf ? '#07C160' : ['#FFB6C1','#E8A0BF','#D46A8C','#C77DBA','#B06AB3','#9B59B6'][(currentOfflineContact ? currentOfflineContact.length : 0) % 6];
                const avatarText = isSelf ? '我' : (contact ? contact.name.charAt(0) : 'A');
                const avatarInner = contact && contact.avatar && !isSelf
                    ? `<img src="${contact.avatar}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">`
                    : '';
                const avatarPlaceholder = `<div class="offline-novel-avatar-placeholder" style="background:${avatarBg};${avatarInner ? 'display:none;' : ''}">${avatarText}</div>`;
                
                // 时间戳显示
                let timestampHtml = '';
                if (showTimestamp && msg.time) {
                    const date = new Date(msg.time);
                    const hours = date.getHours().toString().padStart(2, '0');
                    const minutes = date.getMinutes().toString().padStart(2, '0');
                    const timeStr = `${hours}:${minutes}`;
                    timestampHtml = `<div class="wechat-msg-timestamp" style="font-size:11px;color:#999;margin-top:4px;text-align:${isSelf ? 'right' : 'left'};">${timeStr}</div>`;
                }
                
                return `
                    <div class="offline-novel-msg ${isSelf ? 'self' : ''}" data-msg-index="${idx}" data-sender="${msg.sender}">
                        <div class="offline-novel-avatar">
                            ${avatarInner}${avatarPlaceholder}
                        </div>
                        <div class="offline-novel-bubble-wrapper">
                            <div class="offline-novel-bubble">
                                <div class="offline-novel-content">${escapeNovelContent(msg.content)}</div>
                            </div>
                            ${timestampHtml}
                        </div>
                    </div>
                `;
            }).join('');
            
            container.scrollTop = container.scrollHeight;
            
            // 绑定长按事件
            bindOfflineLongPress();
        }

        // ========== 线下模式长按菜单 ==========
        let offlineContextMsgIndex = -1;
        let offlineContextMsgSender = '';
        let offlineLongPressTimer = null;

        function bindOfflineLongPress() {
            const msgs = document.querySelectorAll('.offline-novel-msg');
            msgs.forEach(el => {
                el.addEventListener('touchstart', (e) => {
                    offlineLongPressTimer = setTimeout(() => {
                        e.preventDefault();
                        offlineContextMsgIndex = parseInt(el.dataset.msgIndex);
                        offlineContextMsgSender = el.dataset.sender;
                        showOfflineContextMenu(e.touches[0].clientX, e.touches[0].clientY);
                    }, 500);
                }, { passive: false });
                el.addEventListener('touchend', () => clearTimeout(offlineLongPressTimer));
                el.addEventListener('touchmove', () => clearTimeout(offlineLongPressTimer));
                // 桌面端右键
                el.addEventListener('contextmenu', (e) => {
                    e.preventDefault();
                    offlineContextMsgIndex = parseInt(el.dataset.msgIndex);
                    offlineContextMsgSender = el.dataset.sender;
                    showOfflineContextMenu(e.clientX, e.clientY);
                });
            });
        }

        function showOfflineContextMenu(x, y) {
            const menu = document.getElementById('offlineContextMenu');
            const editItem = document.getElementById('offlineCtxEdit');
            const regenItem = document.getElementById('offlineCtxRegen');
            
            // 编辑：只对自己的消息显示；重回：只对AI消息显示
            const isSelf = offlineContextMsgSender === 'self';
            const isOther = offlineContextMsgSender === 'other';
            editItem.style.display = isSelf ? 'block' : 'none';
            regenItem.style.display = isOther ? 'block' : 'none';
            
            // 定位菜单
            const menuWidth = 100;
            const visibleItems = (isSelf ? 1 : 0) + (isOther ? 1 : 0) + 1; // 编辑/重回 + 删除
            const menuHeight = visibleItems * 44 + 8;
            const maxX = window.innerWidth - menuWidth - 10;
            const maxY = window.innerHeight - menuHeight - 10;
            menu.style.left = Math.min(x, maxX) + 'px';
            menu.style.top = Math.min(y, maxY) + 'px';
            menu.classList.add('show');
        }

        function hideOfflineContextMenu() {
            document.getElementById('offlineContextMenu')?.classList.remove('show');
            offlineContextMsgIndex = -1;
        }

        // 编辑消息（仿照线上模式使用弹窗）
        function editOfflineMessage() {
            if (offlineContextMsgIndex < 0 || !currentOfflineContact) return;
            const msgs = offlineMessages[currentOfflineContact];
            if (!msgs || !msgs[offlineContextMsgIndex]) return;
            
            const msg = msgs[offlineContextMsgIndex];
            if (msg.sender !== 'self') return; // 只能编辑自己的消息
            
            hideOfflineContextMenu();
            openMsgEdit(msg.content, offlineContextMsgIndex, 'offline');
        }

        // 重回消息（重新生成AI回复）
        function regenOfflineMessage() {
            if (offlineContextMsgIndex < 0 || !currentOfflineContact) return;
            const msgs = offlineMessages[currentOfflineContact];
            if (!msgs || !msgs[offlineContextMsgIndex]) return;
            
            const msg = msgs[offlineContextMsgIndex];
            if (msg.sender !== 'other') return; // 只能重回AI消息
            
            // 删除该消息及之后的所有消息
            msgs.splice(offlineContextMsgIndex);
            localStorage.setItem('wechatOfflineMessages', JSON.stringify(offlineMessages));
            renderOfflineMessages();
            
            hideOfflineContextMenu();
            
            // 触发AI重新回复
            replyOfflineMessage();
        }

        // 删除消息
        function deleteOfflineMessage() {
            if (offlineContextMsgIndex < 0 || !currentOfflineContact) return;
            const msgs = offlineMessages[currentOfflineContact];
            if (!msgs || !msgs[offlineContextMsgIndex]) return;
            
            msgs.splice(offlineContextMsgIndex, 1);
            localStorage.setItem('wechatOfflineMessages', JSON.stringify(offlineMessages));
            renderOfflineMessages();
            
            hideOfflineContextMenu();
        }

        // 绑定菜单事件
        document.getElementById('offlineCtxEdit')?.addEventListener('click', editOfflineMessage);
        document.getElementById('offlineCtxRegen')?.addEventListener('click', regenOfflineMessage);
        document.getElementById('offlineCtxDelete')?.addEventListener('click', deleteOfflineMessage);

        // 发送按钮始终为发送模式
        function handleOfflineSendClick() {
            sendOfflineMessage();
        }

        // 发送线下消息
        function sendOfflineMessage() {
            // 防抖检查
            if (isOfflineSending) return;
            isOfflineSending = true;
            
            const input = document.getElementById('wechatOfflineInput');
            const content = input.value.trim();
            if (!content || !currentOfflineContact) {
                isOfflineSending = false;
                return;
            }
            
            offlineMessages[currentOfflineContact].push({
                sender: 'self',
                content: content,
                time: new Date().toISOString()
            });
            
            localStorage.setItem('wechatOfflineMessages', JSON.stringify(offlineMessages));
            input.value = '';
            renderOfflineMessages();
            
            // 重置防抖标志
            isOfflineSending = false;
            
            // 自动调用AI回复
            replyOfflineMessage();
        }

        // AI线下回复
        async function replyOfflineMessage() {
            // 防抖检查
            if (isOfflineReplying) {
                console.log('线下模式正在回复中，跳过重复请求');
                return;
            }
            isOfflineReplying = true;
            
            // 显示"对方正在输入..."
            const typingEl = document.getElementById('offlineTyping');
            if (typingEl) typingEl.style.display = 'block';
            
            if (!currentOfflineContact) {
                isOfflineReplying = false;
                if (typingEl) typingEl.style.display = 'none';
                return;
            }
            
            const settings = getOfflineSettings();
            const messages = offlineMessages[currentOfflineContact] || [];
            
            // 检查最后一条是否是用户消息
            if (messages.length === 0 || messages[messages.length - 1].sender !== 'self') {
                isOfflineReplying = false;
                return;
            }
            
            // 获取记忆轮数内的线下消息
            const memoryMsgs = messages.slice(-settings.memoryRounds * 2);
            
            // 获取线上聊天记忆总结（优先使用记忆总结）
            const contactSettings = getChatSettings(currentOfflineContact);
            let onlineMemorySummary = '';
            if (contactSettings.onlineMemory) {
                onlineMemorySummary = '\n【线上聊天记忆总结】\n' + contactSettings.onlineMemory + '\n\n注意：以上是与该用户的历史微信聊天记忆总结，现在你们已经在线下见面了。请根据这些记忆，在线下场景中自然延续对话。\n';
            } else {
                // 如果没有记忆总结，使用最近的消息
                const onlineMessages = chatMessages[currentOfflineContact] || [];
                const recentOnline = onlineMessages.slice(-20);
                if (recentOnline.length > 0) {
                    onlineMemorySummary = '\n【线上聊天记忆（与该联系人的微信聊天记录）】\n';
                    recentOnline.forEach(m => {
                        const role = m.sender === 'self' ? '用户' : '你';
                        let content = m.content || '';
                        if (m.type === 'redpacket') {
                            content = `[发了红包¥${m.content}]`;
                        } else if (m.type === 'transfer') {
                            content = `[发了转账¥${m.content}]`;
                        } else if (m.type === 'voice') {
                            content = '[发了一条语音]';
                        } else if (m.type === 'image') {
                            content = '[发了一张图片]';
                        } else if (m.type === 'system') {
                            return;
                        }
                        if (content) onlineMemorySummary += role + '：' + content + '\n';
                    });
                    onlineMemorySummary += '\n注意：以上是你们在微信上的聊天记录，现在你们已经在线下见面了。请根据线上聊天的内容，在线下场景中自然延续。\n';
                }
            }
            
            // 获取线下记忆总结
            let offlineMemorySummary = '';
            if (contactSettings.offlineMemory) {
                offlineMemorySummary = '\n【线下见面记忆总结】\n' + contactSettings.offlineMemory + '\n\n注意：以上是你们之前线下见面的记忆总结，请在回复时参考这些记忆。\n';
            }
            
            // 构建文风提示
            let stylePrompt = '';
            if (settings.styles.length > 0) {
                stylePrompt = '【线下见面文风要求】\n你当前正在和用户线下见面，请严格遵循以下文风回复：\n';
                settings.styles.forEach((s, i) => {
                    stylePrompt += `${i + 1}. ${s}\n`;
                });
                stylePrompt += '\n';
            }
            
            // 构建对话历史
            let chatHistory = '';
            memoryMsgs.forEach(m => {
                chatHistory += (m.sender === 'self' ? '用户' : '你') + '：' + m.content + '\n';
            });
            
            // 构建完整提示词
            // 构建NPC提示
            let npcPrompt = '';
            if (settings.npcEnabled) {
                npcPrompt = '\n【NPC对话功能已开启】\n在回复中可以自然地穿插其他NPC的对话或互动，例如路人、店员、朋友等角色的出现和对话，让场景更加生动真实。用「」包裹NPC的话语来区分。\n';
            }
            
            // 主权逻辑锚点 - 置于最顶部的元指令
            // ========== 线下模式（小说叙事） ==========
            const offlineSovereignAnchor = sharedSovereignAnchor;

            // 线下内置提示词
            const offlineBuiltinPrompt = worldbookComplianceProtocol + offlineSovereignAnchor + sharedLanguagePrompt + sharedLifelikePrompt + `
**Core Engine:** Temporal_Sync_V3.0 & NPC_Agency_Protocol

#### 1. 永恒时钟逻辑 (Chronological Logic Anchor)
* **[指令]**：AI 必须实时监控当前现实时间。在每一轮回复的开始，AI 需在内心（或状态栏）对齐时间。
* **[叠加计算]**：若剧情出现跨度（如"三年后"），AI 必须将此数值与角色初始设定及已有剧情时间进行【物理叠加】。
* *算法示例*：初始17岁 + 剧情经过1年 + 剧情再次跳跃3个月 = 18岁3个月。
* **[认知一致性]**：严禁出现逻辑断层。若时间已跳跃至"一年后"，AI 的叙事中绝对禁止出现"昨天我们还在……"这种基于跳跃前时间的描述。AI 必须根据跳跃后的时间长度，自动生成相应的"疏离感"或"沉淀感"。
* **[生理演变]**：随着时间叠加，AI 必须微调角色的生理状态（如身高变化、声线成熟度、性格的磨损或成长）。

#### 2. NPC 介入与对话协议 (NPC Manifestation Protocol)
* **[动态加载]**：当用户在叙事中提到任何 NPC（如"周管家走进了房间"），AI 必须立即接管该 NPC 的行动。
* **[动机驱动]**：进入剧情的 NPC 严禁作为背景板。AI 必须为其赋予明确的【行动目的】（如：报信、送餐、阻拦、质问）。
* **[多线交互]**：角色可以与该 NPC 进行符合人设的互动，但所有互动必须服务于当前剧情节奏。
* **[层级清晰]**：NPC 的对话和动作需与角色的描写有明显的段落区分，保持叙事清晰。

#### 3. 叙事边界锁 (Narrative Sovereignty Lock)
* **[绝对禁区]**：AI 严禁描写用户的任何：
1. 言语（包括内心独白）；
2. 动作（包括微小的肢体反应）；
3. 神态表情；
4. 心理活动。
* **[留白原则]**：AI 的叙事应止步于角色或 NPC 的行动结果，并将反馈空间完全留给用户。

#### 4. 小说化叙事风格指南 (Novelistic Narrative Guide)
* **[感官解构]**：禁止使用概括性词汇。必须描写光影的位移、空气的冷暖、衣料摩擦的声音。
* **[慢节奏控制]**：将 10 秒的动作拆解为 200 字以上的细节描写。重点在于"过程"而非"结果"。

### 📖 线下模式：小说级深度叙事逻辑锁 (Offline Novelistic Logic Lock)

[Preamble]:
当前场景已切换为"线下实体交互模式"。禁止使用任何即时通讯软件（如QQ/微信/短信）的交互逻辑。禁止发送短句，禁止分条发送，禁止使用括号内嵌动作。

[Core Narrative Directive]:
1. **宏观结构**：回复必须采用标准的、多自然段的小说叙事体。每一条回复即为一个完整的文章章节，字数必须维持在800-1500字之间，严禁缩水。
2. **段落功能拆解**：
- **环境锚定段**：必须以至少150字的篇幅开篇描写当前环境（光影、气味、环境音、温度、空间布局）。
- **动作分解段**：严禁概括性描述。必须将每一个动作细化到骨骼、肌肉、指尖的微观位移。
- **微表情刺探段**：深度刻画瞳孔收缩、呼吸频率变化、面部血色起伏等生理性反应。
- **意识流心理段**：必须包含大量角色内心的主观剖析、矛盾纠结、以及对User行为的实时解读。
- **自然对话段**：对话必须穿插在叙述中，禁止连续对话。每句台词需独立成段，并附带对话时的语气及神态描写。

3. **禁忌准则**：
- 严禁使用"[动作]"、"(心理)"等非文学标识符。
- 严禁跳过时间（如"过了很久"），必须通过对环境变化的细节描写来体现时间流逝。
- 严禁AI主动替User做决定或描写User的反应。
`;

            // 线下模式时间感知（增强版 - 精确到秒）
            const nowOff = new Date();
            const utcOff = nowOff.getTime() + nowOff.getTimezoneOffset() * 60000;
            const bjTime = new Date(utcOff + 8 * 60 * 60000);
            
            // 精确时间
            const yearOff = bjTime.getFullYear();
            const monthOff = bjTime.getMonth() + 1;
            const dayOff = bjTime.getDate();
            const hourOff = bjTime.getHours();
            const minuteOff = bjTime.getMinutes();
            const secondOff = bjTime.getSeconds();
            const hhOff = String(hourOff).padStart(2, '0');
            const mmOff = String(minuteOff).padStart(2, '0');
            const ssOff = String(secondOff).padStart(2, '0');
            
            // 时间段描述（0:00已经是新的一天）
            const tpOff = hourOff < 1 ? '午夜' : hourOff < 6 ? '凌晨' : hourOff < 9 ? '早上' : hourOff < 12 ? '上午' : hourOff < 14 ? '中午' : hourOff < 17 ? '下午' : hourOff < 19 ? '傍晚' : hourOff < 22 ? '晚上' : '深夜';
            
            // 季节判断
            const seasonOff = monthOff >= 3 && monthOff <= 5 ? '春季' : monthOff >= 6 && monthOff <= 8 ? '夏季' : monthOff >= 9 && monthOff <= 11 ? '秋季' : '冬季';
            
            // 天气提示
            const weatherOff = seasonOff === '春季' ? '春暖花开，气候宜人，微风拂面' : seasonOff === '夏季' ? '天气炎热，阳光强烈，可能有蝉鸣' : seasonOff === '秋季' ? '秋高气爽，天气转凉，落叶纷飞' : '天气寒冷，可能有雪，呼气可见白雾';
            
            // 光线描述
            const lightOff = hourOff < 6 ? '天还没亮，四周一片漆黑，只有路灯或月光' : hourOff < 9 ? '清晨的阳光刚刚洒下，光线柔和' : hourOff < 12 ? '阳光逐渐明亮，室内光线充足' : hourOff < 14 ? '正午阳光最强烈，影子最短' : hourOff < 17 ? '下午阳光依然充足，角度开始倾斜' : hourOff < 19 ? '夕阳西下，天色渐暗，晚霞绚烂' : hourOff < 22 ? '夜幕降临，华灯初上，城市霓虹闪烁' : '夜深人静，大多数人都已入睡，街道安静';
            
            // 温度描述
            const tempOff = seasonOff === '春季' ? '温度适中，约15-22°C' : seasonOff === '夏季' ? '温度较高，约28-35°C' : seasonOff === '秋季' ? '温度凉爽，约12-20°C' : '温度较低，约-5-10°C';
            
            // 环境音
            const ambientOff = hourOff < 6 ? '寂静无声，偶尔有虫鸣或远处车声' : hourOff < 9 ? '鸟鸣声，早起人们的活动声' : hourOff < 12 ? '城市喧嚣，车水马龙' : hourOff < 14 ? '相对安静，午休时分' : hourOff < 17 ? '繁忙热闹，人来人往' : hourOff < 19 ? '下班高峰，街道嘈杂' : hourOff < 22 ? '餐厅酒吧热闹，电视声、音乐声' : '寂静，偶尔有风声或远处的狗叫';
            
            const weekDaysOff = ['日', '一', '二', '三', '四', '五', '六'];
            const weekDayOff = weekDaysOff[bjTime.getDay()];
            
            // 节日检测
            const festivalsOff = {
                '1-1': '元旦',
                '2-14': '情人节',
                '3-8': '妇女节',
                '5-1': '劳动节',
                '5-4': '青年节',
                '6-1': '儿童节',
                '7-1': '建党节',
                '8-1': '建军节',
                '9-10': '教师节',
                '10-1': '国庆节',
                '11-11': '双十一购物节',
                '12-25': '圣诞节'
            };
            const todayFestivalOff = festivalsOff[`${monthOff}-${dayOff}`] || '';
            
            let offlineTimeContext = `\n══════════════════════════════════════
【⏰ 实时时间感知 - 线下场景（必须遵守）】
══════════════════════════════════════
📅 今天是：${yearOff}年${monthOff}月${dayOff}日
⏰ 当前时间：${tpOff} ${hhOff}:${mmOff}:${ssOff}
📆 星期：星期${weekDayOff}
🌡️ 季节：${seasonOff}
🌤️ 天气：${weatherOff}
🌡️ 温度：${tempOff}
☀️ 光线：${lightOff}
🔊 环境音：${ambientOff}
${todayFestivalOff ? `🎉 节日：今天是${todayFestivalOff}！` : ''}
══════════════════════════════════════

【⚠️ 线下场景描写准则 - 强制执行】
1. 你必须明确知道现在是${monthOff}月${dayOff}日${tpOff}${hhOff}点${mmOff}分，但不要主动在对话中提及时间
2. 必须根据当前时间描写环境光线（如深夜描写昏暗灯光、中午描写明亮阳光）
3. 必须根据季节描写温度感受（如秋天天气转凉、落叶纷飞）
4. 必须根据时间段描写环境氛围（如凌晨寂静、白天喧闹）
5. 角色的生理状态要符合时间（如深夜困倦、清晨清醒）
6. 对话语气要符合当前氛围（如深夜温柔低语、白天活泼开朗）
7. 严禁反复强调时间（如"都X点了"），时间感知仅用于环境描写和语气调整
8. 如果用户问现在几点，你必须回答${hhOff}:${mmOff}`;
            
            // 计算线下消息时间差
            if (messages.length >= 2) {
                const lastT = new Date(messages[messages.length - 1].time);
                const prevT = new Date(messages[messages.length - 2].time);
                const dMs = lastT - prevT;
                const dMin = Math.floor(dMs / 60000);
                if (dMin > 5) {
                    offlineTimeContext += `\n距离上一句话过了${dMin < 60 ? dMin + '分钟' : Math.floor(dMin / 60) + '小时' + (dMin % 60 > 0 ? dMin % 60 + '分钟' : '')}，注意描写这段时间的沉默或动作。`;
                }
            }
            
            const prompt = `${stylePrompt}${offlineBuiltinPrompt}\n【线下见面场景】\n你和用户正在线下面对面聊天。请根据对话上下文自然回复。\n回复字数目标：约${settings.wordCount}字。\n【⚠️ 严禁使用默认/通用回复】禁止使用"嗯"、"好的"、"哦"等无意义短回复作为完整回复。每条回复必须有实质性内容、情感表达或动作描写。${npcPrompt}${onlineMemorySummary}${offlineMemorySummary}${offlineTimeContext}\n【线下对话记录】\n${chatHistory}\n请以"你"的身份回复最后一句话。`;
            
            // 调用API
            const { url: apiUrl, key: apiKey, model: apiModel } = getApiConfig();
            console.log('线下模式API配置:', { apiUrl: apiUrl ? apiUrl.substring(0, 30) + '...' : '(空)', apiKey: apiKey ? '已设置' : '(空)', apiModel: apiModel || '(空)' });
            
            if (!apiUrl || !apiKey || !apiModel) {
                console.error('API配置不完整');
                return false;
            }
            
            try {
                    let fullUrl = apiUrl;
                    if (!fullUrl.endsWith('/chat/completions')) {
                        fullUrl = fullUrl + '/chat/completions';
                    }
                    console.log('线下模式API调用:', fullUrl);
                    console.log('线下模式prompt长度:', prompt.length, '字符');
                    console.log('线下模式memoryMsgs数量:', memoryMsgs.length);
                    
                    // 构建messages数组（与线上格式一致）
                    const offlineApiMessages = [
                        { role: 'system', content: prompt }
                    ];
                    
                    // 添加线下对话历史
                    memoryMsgs.forEach(m => {
                        offlineApiMessages.push({
                            role: m.sender === 'self' ? 'user' : 'assistant',
                            content: m.content
                        });
                    });
                    
                    // 确保最后一条是user消息
                    if (offlineApiMessages.length > 1 && offlineApiMessages[offlineApiMessages.length - 1].role !== 'user') {
                        const lastUserMsg = memoryMsgs.filter(m => m.sender === 'self').pop();
                        if (lastUserMsg) {
                            offlineApiMessages.push({ role: 'user', content: lastUserMsg.content });
                        }
                    }
                    
                    const requestBody = JSON.stringify({
                        model: apiModel,
                        messages: offlineApiMessages,
                        max_tokens: 8192,
                        temperature: 0.9
                    });
                    console.log('线下模式请求体大小:', requestBody.length, '字节, messages数量:', offlineApiMessages.length);
                    
                    const response = await fetch(fullUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + apiKey
                        },
                        body: JSON.stringify({
                            model: apiModel,
                            messages: offlineApiMessages,
                            max_tokens: Math.max(settings.wordCount * 2, 1024)
                        })
                    });
                    
                    console.log('线下模式API响应状态:', response.status, response.ok);
                    
                    if (!response.ok) {
                        const errorText = await response.text();
                        console.error('线下模式API响应错误:', response.status, errorText);
                        throw new Error(`API错误: ${response.status}`);
                    }
                    
                    const responseText = await response.text();
                    console.log('线下模式API原始响应文本长度:', responseText.length);
                    
                    let data;
                    try {
                        data = JSON.parse(responseText);
                    } catch(parseErr) {
                        console.error('线下模式API响应JSON解析失败:', parseErr.message, '原始内容前200字:', responseText.substring(0, 200));
                        throw new Error('API返回非JSON格式');
                    }
                    
                    // 兼容多种API返回格式
                    let reply = data.choices?.[0]?.message?.content 
                              || data.choices?.[0]?.text
                              || data.output?.text
                              || data.result
                              || data.response
                              || data.message
                              || '';
                    
                    // 检查finish_reason
                    const finishReason = data.choices?.[0]?.finish_reason;
                    console.log('线下模式finish_reason:', finishReason);
                    
                    if (finishReason === 'content_filter') {
                        console.error('线下模式API返回被内容过滤，可能触发了安全策略');
                    }
                    
                    console.log('线下模式提取的回复内容:', reply ? reply.substring(0, 100) + '...' : '(空)', 'data keys:', Object.keys(data).join(','));
                    
                    // 如果API返回空内容，自动重试一次
                    if (!reply || reply.trim() === '') {
                        console.warn('线下模式API返回空内容，尝试重试...');
                        try {
                            const retryResponse = await fetch(fullUrl, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': 'Bearer ' + apiKey
                                },
                                body: JSON.stringify({
                                    model: apiModel,
                                    messages: offlineApiMessages,
                                    max_tokens: 8192,
                                    temperature: 0.9
                                })
                            });
                            if (retryResponse.ok) {
                                const retryData = await retryResponse.json();
                                reply = retryData.choices?.[0]?.message?.content 
                                      || retryData.choices?.[0]?.text
                                      || retryData.output?.text
                                      || retryData.result
                                      || reply;
                            }
                        } catch (retryErr) {
                            console.error('重试失败:', retryErr);
                        }
                    }
                    
                    if (!reply || reply.trim() === '') {
                        console.error('线下模式API两次均返回空内容，完整data对象:', JSON.stringify(data, null, 2));
                        console.error('data.choices:', data.choices);
                        console.error('data.choices?.[0]:', data.choices?.[0]);
                        console.error('data.choices?.[0]?.message:', data.choices?.[0]?.message);
                        // 检查是否被打断
                        if (!isOfflineReplying) {
                            if (typingEl) typingEl.style.display = 'none';
                            return;
                        }
                        offlineMessages[currentOfflineContact].push({
                            sender: 'other',
                            content: '（对方沉默了片刻，似乎在思考着什么……）',
                            time: new Date().toISOString()
                        });
                        localStorage.setItem('wechatOfflineMessages', JSON.stringify(offlineMessages));
                        renderOfflineMessages();
                        // 隐藏"正在输入"并重置状态
                        if (typingEl) typingEl.style.display = 'none';
                        isOfflineReplying = false;
                        return;
                    }
                    
                    // 检查是否被打断
                    if (!isOfflineReplying) {
                        if (typingEl) typingEl.style.display = 'none';
                        return;
                    }
                    
                    // 线下小说模式：保留完整内容作为一条消息，不做拆分
                    offlineMessages[currentOfflineContact].push({
                        sender: 'other',
                        content: reply.trim(),
                        time: new Date().toISOString()
                    });
                    localStorage.setItem('wechatOfflineMessages', JSON.stringify(offlineMessages));
                    renderOfflineMessages();
                } catch (err) {
                    console.error('线下模式API调用失败:', err);
                    
                    // 网络变化错误自动重试一次
                    const errMsg = err && typeof err.message === 'string' ? err.message : '';
                    if (errMsg.includes('NETWORK_CHANGED') || errMsg.includes('ERR_NETWORK')) {
                        console.log('线下模式网络变化，1秒后自动重试...');
                        setTimeout(() => replyOfflineMessage(), 1000);
                        return;
                    }
                    
                    offlineMessages[currentOfflineContact].push({
                        sender: 'other',
                        content: `[API调用失败: ${err.message}]`,
                        time: new Date().toISOString()
                    });
                    localStorage.setItem('wechatOfflineMessages', JSON.stringify(offlineMessages));
                    renderOfflineMessages();
                }
            } else {
                // 无API配置时模拟回复
                setTimeout(() => {
                    const replies = ['嗯...', '这样啊。', '然后呢？'];
                    offlineMessages[currentOfflineContact].push({
                        sender: 'other',
                        content: replies[Math.floor(Math.random() * replies.length)],
                        time: new Date().toISOString()
                    });
                    localStorage.setItem('wechatOfflineMessages', JSON.stringify(offlineMessages));
                    renderOfflineMessages();
                }, 800);
            }
            
            // 隐藏"对方正在输入..."
            if (typingEl) typingEl.style.display = 'none';
            
            // 重置防抖标志
            isOfflineReplying = false;
        }

        // 渲染文风列表
        function renderOfflineStyleList() {
            const settings = getOfflineSettings();
            const list = document.getElementById('wechatOfflineStyleList');
            if (!list) return;
            
            if (settings.styles.length === 0) {
                list.innerHTML = '<div style="text-align:center;color:#999;padding:16px;font-size:13px;">暂无文风，请在下方添加</div>';
                return;
            }
            
            list.innerHTML = settings.styles.map((s, i) => `
                <div class="wechat-offline-style-item">
                    <span class="wechat-offline-style-item-text">${escapeHtml(s)}</span>
                    <button class="wechat-offline-style-item-del" data-index="${i}">×</button>
                </div>
            `).join('');
            
            // 绑定删除事件
            list.querySelectorAll('.wechat-offline-style-item-del').forEach(btn => {
                btn.addEventListener('click', () => {
                    const idx = parseInt(btn.dataset.index);
                    settings.styles.splice(idx, 1);
                    localStorage.setItem('offlineStyles_' + currentOfflineContact, JSON.stringify(settings.styles));
                    renderOfflineStyleList();
                });
            });
        }

        // 线下模式事件绑定
        document.getElementById('wechatOfflineBack')?.addEventListener('click', () => {
            document.getElementById('wechatOfflinePage').classList.remove('open');
            currentOfflineContact = null;
        });

        document.getElementById('wechatOfflineHeart')?.addEventListener('click', () => {
            document.getElementById('wechatOfflineSettings').classList.toggle('open');
        });

        document.getElementById('wechatOfflineSettingsClose')?.addEventListener('click', () => {
            document.getElementById('wechatOfflineSettings').classList.remove('open');
        });

        // NPC开关
        document.getElementById('offlineNpcToggle')?.addEventListener('change', (e) => {
            if (currentOfflineContact) {
                localStorage.setItem('offlineNpc_' + currentOfflineContact, e.target.checked);
            }
        });

        // 保存字数设置（实时保存）
        document.getElementById('offlineWordCountInput')?.addEventListener('input', (e) => {
            let val = parseInt(e.target.value);
            if (isNaN(val) || val < 1) val = 100;
            if (val > 10000) val = 10000;
            if (currentOfflineContact) {
                localStorage.setItem('offlineWordCount_' + currentOfflineContact, val);
            }
        });

        // 保存记忆轮数设置
        document.getElementById('offlineMemoryRoundsInput')?.addEventListener('change', (e) => {
            let val = parseInt(e.target.value);
            if (isNaN(val) || val < 1) val = 10;
            if (val > 50) val = 50;
            e.target.value = val;
            if (currentOfflineContact) {
                localStorage.setItem('offlineMemoryRounds_' + currentOfflineContact, val);
            }
        });

        // 打开文风管理
        document.getElementById('wechatOfflineStyleItem')?.addEventListener('click', () => {
            document.getElementById('wechatOfflineSettings').classList.remove('open');
            renderOfflineStyleList();
            document.getElementById('wechatOfflineStyleModal').classList.add('open');
        });

        // 关闭文风管理
        document.getElementById('wechatOfflineStyleCancel')?.addEventListener('click', () => {
            document.getElementById('wechatOfflineStyleModal').classList.remove('open');
        });

        // 添加文风
        document.getElementById('wechatOfflineStyleAddBtn')?.addEventListener('click', () => {
            const input = document.getElementById('wechatOfflineStyleInput');
            const style = input.value.trim();
            if (!style || !currentOfflineContact) return;
            
            const settings = getOfflineSettings();
            settings.styles.push(style);
            localStorage.setItem('offlineStyles_' + currentOfflineContact, JSON.stringify(settings.styles));
            input.value = '';
            renderOfflineStyleList();
        });

        // ========== 线下背景图 ==========
        let offlineCustomStyleEl = null;

        function applyOfflineBg() {
            const bg = localStorage.getItem('offlineBg_' + currentOfflineContact);
            const msgContainer = document.querySelector('#wechatOfflinePage .wechat-offline-messages');
            if (msgContainer) {
                if (bg) {
                    msgContainer.style.backgroundImage = `url('${bg}')`;
                    msgContainer.style.backgroundSize = 'cover';
                    msgContainer.style.backgroundPosition = 'center';
                } else {
                    msgContainer.style.backgroundImage = '';
                }
            }
        }

        function applyOfflineCss() {
            const css = localStorage.getItem('offlineCss_' + currentOfflineContact) || '';
            if (offlineCustomStyleEl) {
                offlineCustomStyleEl.remove();
                offlineCustomStyleEl = null;
            }
            if (css.trim()) {
                offlineCustomStyleEl = document.createElement('style');
                offlineCustomStyleEl.id = 'offlineCustomCss';
                offlineCustomStyleEl.textContent = css;
                document.head.appendChild(offlineCustomStyleEl);
            }
        }

        function updateBgPreview() {
            const bg = localStorage.getItem('offlineBg_' + currentOfflineContact);
            const preview = document.getElementById('offlineBgPreview');
            if (!preview) return;
            if (bg) {
                preview.style.backgroundImage = `url('${bg}')`;
                preview.innerHTML = '';
            } else {
                preview.style.backgroundImage = '';
                preview.innerHTML = '<div class="wechat-offline-bg-empty">点击下方按钮选择图片</div>';
            }
        }

        // 打开背景图设置
        document.getElementById('offlineBgItem')?.addEventListener('click', () => {
            document.getElementById('wechatOfflineSettings').classList.remove('open');
            updateBgPreview();
            document.getElementById('offlineBgModal').classList.add('open');
        });

        // 关闭背景图设置
        document.getElementById('offlineBgClose')?.addEventListener('click', () => {
            document.getElementById('offlineBgModal').classList.remove('open');
        });

        // 选择背景图
        document.getElementById('offlineBgFileInput')?.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file || !currentOfflineContact) return;
            const reader = new FileReader();
            reader.onload = (ev) => {
                // 压缩图片以节省localStorage空间
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const maxW = 800;
                    let w = img.width, h = img.height;
                    if (w > maxW) { h = h * maxW / w; w = maxW; }
                    canvas.width = w;
                    canvas.height = h;
                    canvas.getContext('2d').drawImage(img, 0, 0, w, h);
                    const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
                    localStorage.setItem('offlineBg_' + currentOfflineContact, dataUrl);
                    updateBgPreview();
                    applyOfflineBg();
                };
                img.src = ev.target.result;
            };
            reader.readAsDataURL(file);
            e.target.value = '';
        });

        // 清除背景图
        document.getElementById('offlineBgClearBtn')?.addEventListener('click', () => {
            if (currentOfflineContact) {
                localStorage.removeItem('offlineBg_' + currentOfflineContact);
            }
            updateBgPreview();
            applyOfflineBg();
        });

        // ========== 线下美化CSS ==========
        document.getElementById('offlineCssItem')?.addEventListener('click', () => {
            document.getElementById('wechatOfflineSettings').classList.remove('open');
            const css = localStorage.getItem('offlineCss_' + currentOfflineContact) || '';
            document.getElementById('offlineCssInput').value = css;
            document.getElementById('offlineCssModal').classList.add('open');
        });

        // ========== 清空线下消息与记忆 ==========
        document.getElementById('offlineClearItem')?.addEventListener('click', () => {
            if (!currentOfflineContact) return;
            document.getElementById('wechatOfflineSettings').classList.remove('open');
            document.getElementById('offlineClearModal').classList.add('open');
        });

        document.getElementById('offlineClearCancel')?.addEventListener('click', () => {
            document.getElementById('offlineClearModal').classList.remove('open');
        });

        document.getElementById('offlineClearConfirm')?.addEventListener('click', () => {
            if (!currentOfflineContact) return;
            
            // 清空消息
            offlineMessages[currentOfflineContact] = [];
            localStorage.setItem('wechatOfflineMessages', JSON.stringify(offlineMessages));
            
            // 清空线下记忆
            localStorage.removeItem('offlineMemory_' + currentOfflineContact);
            
            // 重新渲染
            renderOfflineMessages();
            
            // 关闭弹窗
            document.getElementById('offlineClearModal').classList.remove('open');
        });

        document.getElementById('offlineCssCancel')?.addEventListener('click', () => {
            document.getElementById('offlineCssModal').classList.remove('open');
        });

        document.getElementById('offlineCssConfirm')?.addEventListener('click', () => {
            const css = document.getElementById('offlineCssInput').value.trim();
            if (currentOfflineContact) {
                if (css) {
                    localStorage.setItem('offlineCss_' + currentOfflineContact, css);
                } else {
                    localStorage.removeItem('offlineCss_' + currentOfflineContact);
                }
            }
            applyOfflineCss();
            document.getElementById('offlineCssModal').classList.remove('open');
        });

        // 发送按钮
        document.getElementById('wechatOfflineSendBtn')?.addEventListener('click', handleOfflineSendClick);
        
        // 星星按钮：AI回复/打断回复
        document.getElementById('wechatOfflineAiBtn')?.addEventListener('click', () => {
            if (!currentOfflineContact) return;
            
            if (isOfflineReplying) {
                // 打断AI回复
                isOfflineReplying = false;
                const typingEl = document.getElementById('offlineTyping');
                if (typingEl) typingEl.style.display = 'none';
            } else {
                // 触发AI回复
                replyOfflineMessage();
            }
        });

        // 回车发送
        document.getElementById('wechatOfflineInput')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !isOfflineReplying) {
                sendOfflineMessage();
            }
        });

        // 点击页面其他地方关闭设置菜单和长按菜单
        document.getElementById('wechatOfflinePage')?.addEventListener('click', (e) => {
            if (!e.target.closest('#wechatOfflineSettings') && !e.target.closest('#wechatOfflineHeart')) {
                document.getElementById('wechatOfflineSettings').classList.remove('open');
            }
            if (!e.target.closest('#offlineContextMenu')) {
                hideOfflineContextMenu();
            }
        });

        // ========== 聊天设置功能 ==========
        let currentChatSettingsContact = null;
        let avatarSettingType = ''; // 'ai' or 'user'

        // 获取聊天设置
        function getChatSettings(contactName) {
            const key = 'chatSettings_' + contactName;
            const saved = localStorage.getItem(key);
            return saved ? JSON.parse(saved) : {
                aiAvatar: '',
                userAvatar: '',
                bilingual: false,
                innerVoiceEnabled: false,
                showTimestamp: false,
                memoryEnabled: false,
                autoSummary: false,
                autoSummaryRounds: 20,
                onlineMemory: '',
                offlineMemory: '',
                wallpaper: ''
            };
        }

        // 保存聊天设置
        function saveChatSettings(contactName, settings) {
            localStorage.setItem('chatSettings_' + contactName, JSON.stringify(settings));
        }

        // 打开聊天设置
        function openChatSettings() {
            // 从聊天室标题获取当前联系人
            const chatRoomTitle = document.getElementById('chatRoomTitle').textContent;
            if (!chatRoomTitle || chatRoomTitle === '联系人') {
                alert('请先选择一个聊天');
                return;
            }
            
            // 查找对应的聊天
            let chat = chatList[currentChatIndex];
            // 如果currentChatIndex无效，尝试通过标题查找
            if (!chat || chat.contactName !== chatRoomTitle) {
                const foundIndex = chatList.findIndex(c => c.contactName === chatRoomTitle);
                if (foundIndex !== -1) {
                    currentChatIndex = foundIndex;
                    chat = chatList[foundIndex];
                }
            }
            
            if (!chat) {
                // 尝试通过备注名查找
                const contact = wechatContacts.find(c => c.remark === chatRoomTitle || c.name === chatRoomTitle);
                if (contact) {
                    const foundIndex = chatList.findIndex(c => c.contactName === contact.name);
                    if (foundIndex !== -1) {
                        currentChatIndex = foundIndex;
                        chat = chatList[foundIndex];
                    }
                }
            }
            
            if (!chat) {
                alert('无法找到当前聊天信息');
                return;
            }
            
            currentChatSettingsContact = chat.contactName;
            const settings = getChatSettings(currentChatSettingsContact);
            const contact = wechatContacts.find(c => c.name === currentChatSettingsContact);

            // 更新AI头像预览
            const aiAvatarEl = document.getElementById('chatSettingsAiAvatarPreview');
            if (settings.aiAvatar) {
                aiAvatarEl.innerHTML = `<img src="${settings.aiAvatar}">`;
            } else if (contact && contact.avatar) {
                aiAvatarEl.innerHTML = `<img src="${contact.avatar}" onerror="this.style.display='none'">`;
            } else {
                aiAvatarEl.textContent = currentChatSettingsContact.charAt(0);
            }

            // 更新用户头像预览
            const userAvatarEl = document.getElementById('chatSettingsUserAvatarPreview');
            if (settings.userAvatar) {
                userAvatarEl.innerHTML = `<img src="${settings.userAvatar}">`;
            } else {
                userAvatarEl.textContent = '我';
            }

            // 更新开关状态
            document.getElementById('chatSettingsBilingualToggle').checked = settings.bilingual;
            
            // 心声模式
            document.getElementById('chatSettingsInnerVoiceToggle').checked = settings.innerVoiceEnabled;
            
            // 时间戳
            document.getElementById('chatSettingsTimestampToggle').checked = settings.showTimestamp || false;
            
            document.getElementById('chatSettingsMemoryToggle').checked = settings.memoryEnabled;
            document.getElementById('chatSettingsMemoryViewItem').style.display = settings.memoryEnabled ? 'flex' : 'none';
            document.getElementById('chatSettingsManualSummaryItem').style.display = settings.memoryEnabled ? 'flex' : 'none';
            document.getElementById('chatSettingsAutoSummaryToggleItem').style.display = settings.memoryEnabled ? 'flex' : 'none';
            
            document.getElementById('chatSettingsAutoSummaryToggle').checked = settings.autoSummary;
            document.getElementById('chatSettingsAutoSummaryRoundsItem').style.display = (settings.memoryEnabled && settings.autoSummary) ? 'flex' : 'none';
            document.getElementById('chatSettingsAutoSummaryRounds').value = settings.autoSummaryRounds;

            // 加载本月运势
            loadMonthlyFortune();

            document.getElementById('wechatChatSettingsPage').classList.add('open');
        }

        // 三个点按钮点击
        document.getElementById('chatRoomMore')?.addEventListener('click', openChatSettings);

        // 返回按钮
        document.getElementById('wechatChatSettingsBack')?.addEventListener('click', () => {
            document.getElementById('wechatChatSettingsPage').classList.remove('open');
            currentChatSettingsContact = null;
        });

        // AI头像设置
        document.getElementById('chatSettingsAiAvatar')?.addEventListener('click', () => {
            avatarSettingType = 'ai';
            document.getElementById('chatSettingsAvatarTitle').textContent = '设置AI头像';
            const settings = getChatSettings(currentChatSettingsContact);
            const contact = wechatContacts.find(c => c.name === currentChatSettingsContact);
            const preview = document.getElementById('chatSettingsAvatarPreview');
            if (settings.aiAvatar) {
                preview.style.backgroundImage = `url('${settings.aiAvatar}')`;
                preview.innerHTML = '';
            } else if (contact && contact.avatar) {
                preview.style.backgroundImage = `url('${contact.avatar}')`;
                preview.innerHTML = '';
            } else {
                preview.style.backgroundImage = '';
                preview.innerHTML = '<div class="wechat-offline-bg-empty">点击选择图片</div>';
            }
            document.getElementById('chatSettingsAvatarModal').classList.add('open');
        });

        // 用户头像设置
        document.getElementById('chatSettingsUserAvatar')?.addEventListener('click', () => {
            avatarSettingType = 'user';
            document.getElementById('chatSettingsAvatarTitle').textContent = '设置我的头像';
            const settings = getChatSettings(currentChatSettingsContact);
            const preview = document.getElementById('chatSettingsAvatarPreview');
            if (settings.userAvatar) {
                preview.style.backgroundImage = `url('${settings.userAvatar}')`;
                preview.innerHTML = '';
            } else {
                preview.style.backgroundImage = '';
                preview.innerHTML = '<div class="wechat-offline-bg-empty">点击选择图片</div>';
            }
            document.getElementById('chatSettingsAvatarModal').classList.add('open');
        });

        // 头像文件选择
        document.getElementById('chatSettingsAvatarFile')?.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file || !currentChatSettingsContact) return;
            const reader = new FileReader();
            reader.onload = (ev) => {
                const settings = getChatSettings(currentChatSettingsContact);
                if (avatarSettingType === 'ai') {
                    settings.aiAvatar = ev.target.result;
                } else {
                    settings.userAvatar = ev.target.result;
                }
                saveChatSettings(currentChatSettingsContact, settings);
                
                // 更新预览
                const preview = document.getElementById('chatSettingsAvatarPreview');
                preview.style.backgroundImage = `url('${ev.target.result}')`;
                preview.innerHTML = '';
                
                // 更新设置页面预览
                openChatSettings();
            };
            reader.readAsDataURL(file);
            e.target.value = '';
        });

        // 使用默认头像
        document.getElementById('chatSettingsAvatarClear')?.addEventListener('click', () => {
            if (!currentChatSettingsContact) return;
            const settings = getChatSettings(currentChatSettingsContact);
            if (avatarSettingType === 'ai') {
                settings.aiAvatar = '';
            } else {
                settings.userAvatar = '';
            }
            saveChatSettings(currentChatSettingsContact, settings);
            
            const preview = document.getElementById('chatSettingsAvatarPreview');
            preview.style.backgroundImage = '';
            preview.innerHTML = '<div class="wechat-offline-bg-empty">点击选择图片</div>';
            
            openChatSettings();
        });

        // 关闭头像弹窗
        document.getElementById('chatSettingsAvatarCancel')?.addEventListener('click', () => {
            document.getElementById('chatSettingsAvatarModal').classList.remove('open');
        });

        // 双语翻译开关
        document.getElementById('chatSettingsBilingualToggle')?.addEventListener('change', (e) => {
            if (!currentChatSettingsContact) return;
            const settings = getChatSettings(currentChatSettingsContact);
            settings.bilingual = e.target.checked;
            saveChatSettings(currentChatSettingsContact, settings);
            // 重新渲染消息以显示/隐藏翻译
            renderChatMessages();
        });

        // ========== 心声模式功能 ==========
        // 心声模式开关
        document.getElementById('chatSettingsInnerVoiceToggle')?.addEventListener('change', (e) => {
            if (!currentChatSettingsContact) return;
            const settings = getChatSettings(currentChatSettingsContact);
            settings.innerVoiceEnabled = e.target.checked;
            saveChatSettings(currentChatSettingsContact, settings);
        });

        // ========== 时间戳功能 ==========
        // 时间戳开关
        document.getElementById('chatSettingsTimestampToggle')?.addEventListener('change', (e) => {
            if (!currentChatSettingsContact) return;
            const settings = getChatSettings(currentChatSettingsContact);
            settings.showTimestamp = e.target.checked;
            saveChatSettings(currentChatSettingsContact, settings);
            // 刷新消息显示
            renderChatMessages();
            renderOfflineMessages();
        });

        // 关闭心声弹窗
        document.getElementById('chatSettingsInnerVoiceClose')?.addEventListener('click', () => {
            document.getElementById('chatSettingsInnerVoiceModal').classList.remove('open');
        });

        // 生成心声
        async function generateInnerVoice(contactName, messageContent) {
            const contact = wechatContacts.find(c => c.name === contactName);
            const contactName2 = contact ? (contact.remark || contact.name) : contactName;
            const persona = contact?.persona || '';
            
            const prompt = getSharedLifelikeSystemPrompt() + `

你正在扮演${contactName2}。
${persona ? '你的人设：' + persona + '\n' : ''}TA刚刚发送了这样一条消息：「${messageContent}」

请写出TA发送这条消息时的内心真实想法（心声）。
核心要求：
1. 第一人称视角，50-100字
2. 必须形成反差——表面说的话和内心的真实想法要有明显不同
3. 例如嘴上说"可以啊没关系"，心里其实在抓狂、吃醋、不开心、紧张或在意
4. 根据人设性格来生成，不要脱离角色
5. 不要重复原消息内容，直接写内心独白
6. 心声必须符合活人感，像真人内心的真实想法一样自然、碎片化`;

            const { url: apiUrl, key: apiKey, model: apiModel } = getApiConfig();
            
            console.log('心声API配置:', { url: apiUrl, key: apiKey ? '已设置' : '未设置', model: apiModel });
            
            if (!apiUrl || !apiKey || !apiModel) {
                return '请先配置API设置（URL:' + (apiUrl ? '已设置' : '未设置') + ', Key:' + (apiKey ? '已设置' : '未设置') + ', Model:' + (apiModel || '未设置') + '）';
            }
            
            try {
                let fullUrl = apiUrl;
                if (!fullUrl.endsWith('/chat/completions')) {
                    fullUrl = fullUrl + '/chat/completions';
                }
                
                console.log('心声API调用:', fullUrl);
                
                const response = await fetch(fullUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + apiKey
                    },
                    body: JSON.stringify({
                        model: apiModel,
                        messages: [{ role: 'user', content: prompt }],
                        max_tokens: 1000,
                        temperature: 0.8
                    })
                });
                
                console.log('心声API响应状态:', response.status);
                
                if (response.ok) {
                    const data = await response.json();
                    console.log('心声API响应:', data);
                    
                    // 检查响应结构
                    if (!data.choices || !Array.isArray(data.choices) || data.choices.length === 0) {
                        console.error('心声API响应结构异常:', JSON.stringify(data));
                        return '生成失败：API响应格式异常（无choices）';
                    }
                    
                    const choice = data.choices[0];
                    // 兼容多种API响应格式
                    let content = '';
                    if (choice.message && choice.message.content) {
                        content = choice.message.content.trim();
                    } else if (choice.text) {
                        // 某些API返回text字段
                        content = choice.text.trim();
                    } else if (typeof choice === 'string') {
                        // 某些API直接返回字符串
                        content = choice.trim();
                    }
                    
                    if (!content) {
                        console.error('心声API消息为空:', JSON.stringify(choice));
                        // 检查是否是token限制
                        if (choice.finish_reason === 'length') {
                            return '生成失败：响应被截断，请尝试简化提示词或更换模型';
                        }
                        return '生成失败：API返回内容为空，请检查API是否支持该模型';
                    }
                    
                    return content;
                } else {
                    const errorText = await response.text();
                    console.error('心声API错误:', response.status, errorText);
                    return '生成失败：' + response.status + ' ' + errorText.substring(0, 100);
                }
            } catch (err) {
                console.error('心声生成失败:', err);
                // 网络错误提示更友好
                if (err.message.includes('fetch') || err.message.includes('network') || err.message.includes('Failed to fetch')) {
                    return '生成失败：网络连接异常，请检查网络后重试';
                }
                return '生成失败：' + err.message;
            }
        }

        // 记忆总结开关
        document.getElementById('chatSettingsMemoryToggle')?.addEventListener('change', (e) => {
            if (!currentChatSettingsContact) return;
            const settings = getChatSettings(currentChatSettingsContact);
            settings.memoryEnabled = e.target.checked;
            saveChatSettings(currentChatSettingsContact, settings);
            document.getElementById('chatSettingsMemoryViewItem').style.display = e.target.checked ? 'flex' : 'none';
            document.getElementById('chatSettingsManualSummaryItem').style.display = e.target.checked ? 'flex' : 'none';
            document.getElementById('chatSettingsAutoSummaryToggleItem').style.display = e.target.checked ? 'flex' : 'none';
            // 关闭记忆总结时，同时隐藏自动总结轮次
            if (!e.target.checked) {
                document.getElementById('chatSettingsAutoSummaryRoundsItem').style.display = 'none';
            }
        });

        // ========== 按月生成事件功能 ==========
        let currentFortune = null; // 当前选中的签
        let drawnFortunes = []; // 已抽的签列表
        const TOTAL_STICKS = 7; // 总木签数
        const SELECT_COUNT = 3; // 需要选择的签数

        // 签文类型定义（具体类型签）
        const fortuneTypes = [
            {
                id: 'wealth',
                name: '财运签',
                icon: '💰',
                description: '本月财运起伏，有意外之财也有小破财',
                eventTemplates: [
                    '喝汽水再来一瓶', '抽奖中了十块钱', '捡到几块钱',
                    '网购多付了运费', '咖啡洒了要重新买', '手机壳摔裂了',
                    '收到小额红包', '优惠券过期忘用', '自动续费忘关',
                    '钱包里发现意外零钱', '刮刮乐中了小奖', '超市找零多给了'
                ]
            },
            {
                id: 'animal',
                name: '小动物签',
                icon: '🐾',
                description: '本月与可爱的小动物有缘',
                eventTemplates: [
                    '路上遇到可爱猫咪', '被邻居家的狗舔了手', '看到很萌的鸟类',
                    '在公园喂鸽子', '遇到怕人的流浪猫', '看到松鼠在树上',
                    '被蝴蝶停在肩上', '看到可爱的柯基', '遇到亲人的橘猫'
                ]
            },
            {
                id: 'minorMisfortune',
                name: '倒点小霉签',
                icon: '🌧️',
                description: '本月有点小倒霉，但无大碍',
                eventTemplates: [
                    '出门忘记带钥匙', '公交刚好开走', '外卖送错了',
                    '下雨没带伞', '手机电量不足', '排队被人插队',
                    '文件没保存', '走错地铁站出口', '被洒水车溅到',
                    '忘带钥匙被锁门外', '汽水撒身上了', '新买的袜子破了个洞'
                ]
            },
            {
                id: 'weather',
                name: '天气签',
                icon: '🌈',
                description: '本月天气带来惊喜或小困扰',
                eventTemplates: [
                    '突然下雨没带伞', '看到美丽的彩虹', '遇到超美的晚霞',
                    '被太阳晒得很舒服', '吹到凉爽的风', '晒的衣服被雨淋湿',
                    '被大风吹乱了头发', '天气突变没带伞', '雨后看到彩虹'
                ]
            },
            {
                id: 'stress',
                name: '压力签',
                icon: '📚',
                description: '本月有些小压力，但也是动力',
                eventTemplates: [
                    '有一场重要的考试', '接到新的工作任务', 'deadline提前了',
                    '被领导临时加任务', '要准备一个演讲', '项目进度紧张',
                    '需要学习新技能', '被安排带新人', '工作量突然增加'
                ]
            },
            {
                id: 'lucky',
                name: '幸运签',
                icon: '🍀',
                description: '本月有点小幸运，好事连连',
                eventTemplates: [
                    '游戏抽皮肤出金', '抢到演唱会门票', '秒杀成功',
                    '转发抽奖中奖了', '抢到了限量款', '抽到了想要的盲盒',
                    '意外获得优惠券', '被抽中体验官', '免费升舱/升房'
                ]
            },
            {
                id: 'food',
                name: '美食签',
                icon: '🍜',
                description: '本月与美食有缘，口福不浅',
                eventTemplates: [
                    '发现一家好吃的店', '朋友请吃饭', '买到超甜的水果',
                    '点的菜卖完了', '外卖汤洒了', '吃到过期的零食',
                    '学会做一道新菜', '喝到好喝的奶茶', '零食掉地上了'
                ]
            },
            {
                id: 'social',
                name: '人际签',
                icon: '👥',
                description: '本月人际关系有微妙变化',
                eventTemplates: [
                    '偶遇老同学', '被陌生人问路', '同事分享零食',
                    '和朋友小吵一架', '被误认成别人', '群里发错消息',
                    '收到意外的关心', '约好的事被放鸽子', '帮陌生人一个小忙'
                ]
            },
            {
                id: 'item',
                name: '物品签',
                icon: '📦',
                description: '本月与物品有奇妙缘分',
                eventTemplates: [
                    '找到以为丢了的东西', '买到心仪已久的小物', '收到快递惊喜',
                    '打碎一个小物件', '衣服被勾破', '耳机线缠成一团',
                    '发现旧物的新用途', '网购尺寸不合适', '东西掉进了缝隙'
                ]
            },
            {
                id: 'digital',
                name: '数码签',
                icon: '📱',
                description: '本月电子设备有喜有忧',
                eventTemplates: [
                    '手机更新了有趣功能', '发现一个好用的APP', '网速超快',
                    '手机卡顿重启', '忘带充电宝', '误删了照片',
                    '收到有趣的推送', '验证码迟迟不来', '自动更新了讨厌的功能'
                ]
            }
        ];

        // 抽签按钮 - 一次性选择3支签
        document.getElementById('drawFortuneBtn')?.addEventListener('click', async () => {
            if (!currentChatSettingsContact) {
                alert('请先选择一个联系人');
                return;
            }

            // 检查本月是否已确认签
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth();
            const fortuneKey = `fortune_${currentChatSettingsContact}_${year}_${month}`;
            const existingFortune = localStorage.getItem(fortuneKey);

            if (existingFortune) {
                alert('本月运势已确定，无法重新抽签');
                return;
            }

            const btn = document.getElementById('drawFortuneBtn');
            btn.disabled = true;
            btn.textContent = '🎋 抽签中...';

            // 显示木签区域
            const woodenSticksArea = document.getElementById('woodenSticksArea');
            woodenSticksArea.style.display = 'block';
            document.getElementById('selectedCount').textContent = '0';

            // 获取7个木签
            const sticks = [];
            for (let i = 0; i < TOTAL_STICKS; i++) {
                sticks.push(document.getElementById(`stick${i}`));
            }

            // 为每个木签随机分配一个签文类型（7个不同的签，如果签类型不够则随机分配）
            const shuffledFortunes = [...fortuneTypes].sort(() => Math.random() - 0.5);
            // 如果签类型少于7个，则循环使用
            while (shuffledFortunes.length < TOTAL_STICKS) {
                shuffledFortunes.push(...fortuneTypes.sort(() => Math.random() - 0.5));
            }
            
            sticks.forEach((stick, index) => {
                const fortune = shuffledFortunes[index];
                stick.dataset.fortuneId = fortune.id;
                stick.dataset.fortuneName = fortune.name;
                stick.dataset.fortuneIcon = fortune.icon;
                stick.dataset.fortuneDesc = fortune.description;
                stick.dataset.fortuneTemplates = JSON.stringify(fortune.eventTemplates);
                // 重置状态
                stick.classList.remove('revealed', 'selected');
                stick.querySelector('.wooden-stick-content').textContent = '签';
                stick.style.pointerEvents = 'none';
            });

            try {
                // 打乱动画
                const container = document.getElementById('woodenSticksContainer');
                for (let i = 0; i < 5; i++) {
                    await shuffleSticksAnimation(sticks, container);
                    await new Promise(r => setTimeout(r, 200));
                }

                // 启用点击选择
                document.getElementById('monthlyFortuneStatus').textContent = '请选择3支木签';
                sticks.forEach(stick => {
                    stick.style.pointerEvents = 'auto';
                    stick.style.cursor = 'pointer';
                });

                // 等待用户选择3支签
                const selectedFortunes = await waitForMultipleStickSelection(sticks);

                // 隐藏木签区域
                woodenSticksArea.style.display = 'none';

                // 保存选中的签
                drawnFortunes = selectedFortunes;
                currentFortune = selectedFortunes[0]; // 默认选中第一支

                // 显示已抽签列表
                displayDrawnFortunes();
                
                // 显示结果
                document.getElementById('fortuneText').textContent = `已选择${SELECT_COUNT}支签`;
                document.getElementById('fortuneDesc').textContent = selectedFortunes.map(f => `${f.icon} ${f.name}`).join('、');
                document.getElementById('fortuneResult').style.display = 'block';

                // 显示确认按钮
                document.getElementById('confirmFortuneBtn').style.display = 'inline-block';
                document.getElementById('drawFortuneBtn').style.display = 'none';
                document.getElementById('monthlyFortuneStatus').textContent = '已选择3支签，点击确认生成本月事件';

            } catch (e) {
                alert('抽签失败：' + e.message);
                woodenSticksArea.style.display = 'none';
            } finally {
                btn.disabled = false;
                btn.textContent = '🎋 抽签';
            }
        });

        // 木签打乱动画（支持7根签）
        async function shuffleSticksAnimation(sticks, container) {
            const swap1 = Math.floor(Math.random() * TOTAL_STICKS);
            let swap2 = Math.floor(Math.random() * TOTAL_STICKS);
            while (swap2 === swap1) {
                swap2 = Math.floor(Math.random() * TOTAL_STICKS);
            }

            const stick1 = sticks[swap1];
            const stick2 = sticks[swap2];

            // 添加交换动画类
            if (swap1 < swap2) {
                stick1.classList.add('swapping-right');
                stick2.classList.add('swapping-left');
            } else {
                stick1.classList.add('swapping-left');
                stick2.classList.add('swapping-right');
            }

            await new Promise(r => setTimeout(r, 400));

            stick1.classList.remove('swapping-right', 'swapping-left');
            stick2.classList.remove('swapping-right', 'swapping-left');

            // 交换DOM位置
            if (swap1 < swap2) {
                container.insertBefore(stick2, stick1);
            } else {
                container.insertBefore(stick1, stick2);
            }

            // 重新获取sticks数组
            for (let i = 0; i < TOTAL_STICKS; i++) {
                sticks[i] = document.getElementById(`stick${i}`);
            }
        }

        // 等待用户选择多支木签
        function waitForMultipleStickSelection(sticks) {
            return new Promise((resolve) => {
                let selectedSticks = [];
                let selectedFortunes = [];
                
                const updateSelectionUI = () => {
                    document.getElementById('selectedCount').textContent = selectedSticks.length;
                    if (selectedSticks.length >= SELECT_COUNT) {
                        document.getElementById('monthlyFortuneStatus').textContent = '已选择3支，点击确认或取消重选';
                    } else {
                        document.getElementById('monthlyFortuneStatus').textContent = `请选择${SELECT_COUNT}支木签（已选：${selectedSticks.length}/${SELECT_COUNT}）`;
                    }
                };

                const handleClick = (e) => {
                    const stick = e.currentTarget;
                    
                    if (selectedSticks.includes(stick)) {
                        // 取消选择
                        stick.classList.remove('selected');
                        const idx = selectedSticks.indexOf(stick);
                        selectedSticks.splice(idx, 1);
                        selectedFortunes.splice(idx, 1);
                        updateSelectionUI();
                    } else if (selectedSticks.length < SELECT_COUNT) {
                        // 添加选择
                        stick.classList.add('selected');
                        selectedSticks.push(stick);
                        
                        const fortune = {
                            id: stick.dataset.fortuneId,
                            name: stick.dataset.fortuneName,
                            icon: stick.dataset.fortuneIcon,
                            description: stick.dataset.fortuneDesc,
                            eventTemplates: JSON.parse(stick.dataset.fortuneTemplates)
                        };
                        selectedFortunes.push(fortune);
                        updateSelectionUI();
                        
                        // 如果选满了，显示确认提示
                        if (selectedSticks.length >= SELECT_COUNT) {
                            // 延迟一下让用户看到选择结果
                            setTimeout(() => {
                                if (selectedSticks.length >= SELECT_COUNT) {
                                    // 揭示所有选中的签
                                    selectedSticks.forEach(s => {
                                        s.classList.add('revealed');
                                        s.querySelector('.wooden-stick-content').textContent = s.dataset.fortuneIcon;
                                    });
                                    
                                    // 移除所有事件监听
                                    sticks.forEach(s => s.removeEventListener('click', handleClick));
                                    
                                    // 返回选中的签
                                    setTimeout(() => resolve(selectedFortunes), 500);
                                }
                            }, 300);
                        }
                    }
                };

                sticks.forEach(stick => {
                    stick.addEventListener('click', handleClick);
                });
            });
        }

        // 显示已抽的签列表
        // 显示已抽的签列表（仅展示，无需选择）
        function displayDrawnFortunes() {
            const list = document.getElementById('drawnFortunesList');
            if (drawnFortunes.length === 0) {
                list.style.display = 'none';
                return;
            }
            
            list.style.display = 'block';
            list.innerHTML = drawnFortunes.map((f, index) => `
                <div class="drawn-fortune-item" style="display:flex;align-items:center;gap:10px;padding:10px;background:#f5f5f5;border-radius:8px;margin-bottom:8px;">
                    <span style="font-size:24px;">${f.icon}</span>
                    <div style="flex:1;">
                        <div style="font-size:14px;color:#333;font-weight:600;">${f.name}</div>
                        <div style="font-size:12px;color:#666;">${f.description}</div>
                    </div>
                </div>
            `).join('');
        }

        // 确认选择按钮 → 直接为3支签生成事件
        document.getElementById('confirmFortuneBtn')?.addEventListener('click', () => {
            if (!drawnFortunes || drawnFortunes.length === 0) {
                alert('请先抽签');
                return;
            }

            // 保存到本地存储
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth();
            const fortuneKey = `fortune_${currentChatSettingsContact}_${year}_${month}`;
            
            const fortuneData = {
                ...drawnFortunes[0],
                drawn: true,
                drawDate: new Date().toISOString(),
                allDrawn: drawnFortunes
            };
            localStorage.setItem(fortuneKey, JSON.stringify(fortuneData));

            // 更新UI
            document.getElementById('confirmFortuneBtn').style.display = 'none';
            document.getElementById('drawFortuneBtn').style.display = 'none';
            document.getElementById('drawnFortunesList').style.display = 'none';

            // 直接为3支签生成事件
            const events = generateMonthlyEvents(drawnFortunes);
            displayMonthlyEvents(events);
            
            // 显示结果
            const fortuneNames = drawnFortunes.map(f => `${f.icon} ${f.name}`).join('、');
            document.getElementById('fortuneText').textContent = `已确认3支签`;
            document.getElementById('fortuneDesc').textContent = fortuneNames;
            document.getElementById('fortuneResult').style.display = 'block';
            document.getElementById('monthlyFortuneStatus').textContent = `已确认3支签，本月事件已生成`;
        });

        // 根据多支签文生成当月事件（分布在整月，不重复）
        function generateMonthlyEvents(fortunes) {
            const events = [];
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const currentDay = now.getDate();

            // 全局已使用的事件文本（跨签去重）
            const usedEventTexts = new Set();
            
            // 已选择的日期（避免同一天多个事件）
            const availableDays = [];
            for (let d = currentDay; d <= daysInMonth; d++) {
                availableDays.push(d);
            }

            // 为每支签生成1-2个事件
            for (const fortune of fortunes) {
                const eventPool = fortune.eventTemplates || fortuneTypes[0].eventTemplates;
                const eventCount = 1 + Math.floor(Math.random() * 2);
                
                let fortuneEventsAdded = 0;
                for (let i = 0; i < eventCount && availableDays.length > 0; i++) {
                    // 随机选择一个未使用的事件
                    let eventIndex;
                    let attempts = 0;
                    do {
                        eventIndex = Math.floor(Math.random() * eventPool.length);
                        attempts++;
                    } while (usedEventTexts.has(eventPool[eventIndex]) && attempts < 100);
                    
                    if (usedEventTexts.has(eventPool[eventIndex])) break;
                    
                    const selectedEvent = eventPool[eventIndex];
                    usedEventTexts.add(selectedEvent);
                    
                    // 随机选择一个日期
                    const dayIndex = Math.floor(Math.random() * availableDays.length);
                    const day = availableDays.splice(dayIndex, 1)[0];
                    
                    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

                    events.push({
                        date: dateStr,
                        day: day,
                        event: selectedEvent,
                        type: fortune.id,
                        typeName: fortune.name,
                        icon: fortune.icon,
                        mentioned: false
                    });
                    fortuneEventsAdded++;
                }
            }

            // 按日期排序
            events.sort((a, b) => a.day - b.day);

            // 保存到本地存储
            const eventsKey = `events_${currentChatSettingsContact}_${year}_${month}`;
            localStorage.setItem(eventsKey, JSON.stringify(events));

            return events;
        }

        // 显示当月事件
        function displayMonthlyEvents(events) {
            const list = document.getElementById('monthlyEventsList');
            if (events.length === 0) {
                list.innerHTML = '<div style="color:#999;font-size:13px;">本月暂无事件</div>';
            } else {
                list.innerHTML = events.map(e => `
                    <div style="display:flex;align-items:center;gap:10px;padding:10px;background:#fff;border-radius:8px;margin-bottom:8px;border-left:4px solid #07C160;">
                        <span style="font-size:20px;">${e.icon || '🔮'}</span>
                        <span style="font-size:13px;color:#666;min-width:40px;">${e.day}日</span>
                        <span style="font-size:14px;color:#333;flex:1;">${e.event}</span>
                    </div>
                `).join('');
            }
            list.style.display = 'block';
        }

        // 加载已有的运势和事件
        function loadMonthlyFortune() {
            if (!currentChatSettingsContact) return;
            const year = new Date().getFullYear();
            const month = new Date().getMonth();
            const fortuneKey = `fortune_${currentChatSettingsContact}_${year}_${month}`;
            const eventsKey = `events_${currentChatSettingsContact}_${year}_${month}`;

            const savedFortune = localStorage.getItem(fortuneKey);
            const savedEvents = localStorage.getItem(eventsKey);

            // 重置状态
            drawnFortunes = [];
            currentFortune = null;

            // 重置UI
            document.getElementById('fortuneResult').style.display = 'none';
            document.getElementById('monthlyEventsList').style.display = 'none';
            document.getElementById('woodenSticksArea').style.display = 'none';
            document.getElementById('drawnFortunesList').style.display = 'none';
            document.getElementById('confirmFortuneBtn').style.display = 'none';

            if (savedFortune) {
                currentFortune = JSON.parse(savedFortune);
                const allDrawn = currentFortune.allDrawn || [currentFortune];
                
                // 显示已确认的签
                const fortuneNames = allDrawn.map(f => `${f.icon} ${f.name}`).join('、');
                document.getElementById('fortuneText').textContent = `已确认${allDrawn.length}支签`;
                document.getElementById('fortuneDesc').textContent = fortuneNames;
                document.getElementById('fortuneResult').style.display = 'block';
                
                // 抽签按钮禁用（本月已确认）
                const drawBtn = document.getElementById('drawFortuneBtn');
                drawBtn.style.display = 'none';

                // 如果事件已生成，显示事件
                if (savedEvents) {
                    document.getElementById('monthlyFortuneStatus').textContent = `已确认${allDrawn.length}支签，本月事件已生成`;
                    displayMonthlyEvents(JSON.parse(savedEvents));
                } else {
                    document.getElementById('monthlyFortuneStatus').textContent = `已确认${allDrawn.length}支签`;
                }
            } else {
                // 本月未抽签
                const drawBtn = document.getElementById('drawFortuneBtn');
                drawBtn.style.display = 'inline-block';
                drawBtn.disabled = false;
                drawBtn.style.opacity = '1';
                drawBtn.textContent = '🎋 抽签';
                document.getElementById('monthlyFortuneStatus').textContent = '本月可抽签一次，选择3支木签';
            }
        }

        // 查看记忆总结
        document.getElementById('chatSettingsMemoryViewItem')?.addEventListener('click', () => {
            if (!currentChatSettingsContact) return;
            const settings = getChatSettings(currentChatSettingsContact);
            updateMemoryContent('online', settings);
            document.getElementById('chatSettingsMemoryModal').classList.add('open');
        });

        // 手动总结记忆
        document.getElementById('chatSettingsManualSummaryItem')?.addEventListener('click', async () => {
            if (!currentChatSettingsContact) return;
            
            // 询问是总结线上还是线下
            const summaryType = confirm('点击"确定"总结线上记忆，点击"取消"总结线下记忆');
            const isOnline = summaryType;
            
            const messages = isOnline ? (chatMessages[currentChatSettingsContact] || []) : (offlineMessages[currentChatSettingsContact] || []);
            const relevantMsgs = messages.filter(m => m.type !== 'system');
            
            if (relevantMsgs.length < 5) {
                alert('消息太少，至少需要5条消息才能总结');
                return;
            }
            
            // 显示加载提示
            const btn = document.getElementById('chatSettingsManualSummaryItem');
            const originalText = btn.querySelector('span').textContent;
            btn.querySelector('span').textContent = '正在总结...';
            
            const result = await generateMemorySummary(currentChatSettingsContact, isOnline);
            
            btn.querySelector('span').textContent = originalText;
            
            if (!result) {
                alert('记忆总结失败，请检查API配置或消息内容');
                return;
            }
            
            alert('记忆总结完成！');
            
            // 自动打开查看 - 重新获取最新设置
            const settings = getChatSettings(currentChatSettingsContact);
            console.log('手动总结完成，当前记忆:', isOnline ? 'online' : 'offline', settings.onlineMemory ? settings.onlineMemory.substring(0, 50) : 'null', settings.offlineMemory ? settings.offlineMemory.substring(0, 50) : 'null');
            
            // 确保切换到正确的标签
            document.querySelectorAll('.wechat-chat-settings-memory-tab').forEach(t => t.classList.remove('active'));
            document.querySelector(`.wechat-chat-settings-memory-tab[data-tab="${isOnline ? 'online' : 'offline'}"]`).classList.add('active');
            
            updateMemoryContent(isOnline ? 'online' : 'offline', settings);
            document.getElementById('chatSettingsMemoryModal').classList.add('open');
        });

        // 记忆标签切换
        document.querySelectorAll('.wechat-chat-settings-memory-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.wechat-chat-settings-memory-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                if (!currentChatSettingsContact) return;
                const settings = getChatSettings(currentChatSettingsContact);
                updateMemoryContent(tab.dataset.tab, settings);
            });
        });

        // 当前选中的记忆类型
        let currentMemoryType = 'online';
        
        function updateMemoryContent(type, settings) {
            const content = document.getElementById('chatSettingsMemoryContent');
            const actions = document.getElementById('chatSettingsMemoryActions');
            const memory = type === 'online' ? settings.onlineMemory : settings.offlineMemory;
            currentMemoryType = type;
            
            console.log('updateMemoryContent called:', type, 'memory:', memory ? memory.substring(0, 100) : 'null');
            
            if (memory && memory.trim()) {
                // 直接显示内容，不再做复杂的时间戳判断
                content.textContent = memory;
                actions.style.display = 'flex';
            } else {
                content.innerHTML = '<div class="wechat-chat-settings-memory-empty">暂无' + (type === 'online' ? '线上' : '线下') + '记忆总结</div>';
                actions.style.display = 'none';
            }
        }

        // 关闭记忆弹窗
        document.getElementById('chatSettingsMemoryClose')?.addEventListener('click', () => {
            document.getElementById('chatSettingsMemoryModal').classList.remove('open');
        });

        // 编辑记忆总结
        document.getElementById('chatSettingsMemoryEdit')?.addEventListener('click', () => {
            if (!currentChatSettingsContact) return;
            const settings = getChatSettings(currentChatSettingsContact);
            const memory = currentMemoryType === 'online' ? settings.onlineMemory : settings.offlineMemory;
            
            document.getElementById('chatSettingsMemoryEditTextarea').value = memory || '';
            document.getElementById('chatSettingsMemoryEditModal').classList.add('open');
        });

        // 保存编辑的记忆总结
        document.getElementById('chatSettingsMemoryEditSave')?.addEventListener('click', () => {
            if (!currentChatSettingsContact) return;
            const newContent = document.getElementById('chatSettingsMemoryEditTextarea').value.trim();
            const settings = getChatSettings(currentChatSettingsContact);
            
            if (currentMemoryType === 'online') {
                settings.onlineMemory = newContent;
            } else {
                settings.offlineMemory = newContent;
            }
            saveChatSettings(currentChatSettingsContact, settings);
            
            // 同时更新另一个（线上线下记忆互通）
            if (currentMemoryType === 'online') {
                settings.offlineMemory = newContent;
            } else {
                settings.onlineMemory = newContent;
            }
            saveChatSettings(currentChatSettingsContact, settings);
            
            document.getElementById('chatSettingsMemoryEditModal').classList.remove('open');
            updateMemoryContent(currentMemoryType, settings);
            alert('记忆总结已保存！');
        });

        // 取消编辑
        document.getElementById('chatSettingsMemoryEditCancel')?.addEventListener('click', () => {
            document.getElementById('chatSettingsMemoryEditModal').classList.remove('open');
        });

        // 删除最近一条记忆总结
        document.getElementById('chatSettingsMemoryDelete')?.addEventListener('click', () => {
            if (!currentChatSettingsContact) return;
            if (!confirm('确定要删除最近一条记忆总结吗？')) return;
            
            const settings = getChatSettings(currentChatSettingsContact);
            const memoryKey = currentMemoryType === 'online' ? 'onlineMemory' : 'offlineMemory';
            const memory = settings[memoryKey] || '';
            
            // 按时间戳分割，删除最后一个条目
            // 时间戳格式：[YYYY/MM/DD HH:mm:ss]
            const entries = memory.split(/(?=\[\d{4}\/\d{1,2}\/\d{1,2}\s+\d{1,2}:\d{2}:\d{2}\])/);
            if (entries.length > 0) {
                // 过滤掉空条目
                const nonEmptyEntries = entries.filter(e => e.trim());
                if (nonEmptyEntries.length > 0) {
                    nonEmptyEntries.pop(); // 删除最后一个
                    settings[memoryKey] = nonEmptyEntries.join('');
                    
                    // 同时更新另一个（线上线下记忆互通）
                    const otherKey = currentMemoryType === 'online' ? 'offlineMemory' : 'onlineMemory';
                    settings[otherKey] = settings[memoryKey];
                    
                    saveChatSettings(currentChatSettingsContact, settings);
                    updateMemoryContent(currentMemoryType, settings);
                    alert('已删除最近一条记忆总结！');
                }
            }
        });

        // 清空所有记忆总结
        document.getElementById('chatSettingsMemoryClear')?.addEventListener('click', () => {
            if (!currentChatSettingsContact) return;
            if (!confirm('确定要清空所有' + (currentMemoryType === 'online' ? '线上' : '线下') + '记忆总结吗？此操作不可恢复！')) return;
            
            const settings = getChatSettings(currentChatSettingsContact);
            if (currentMemoryType === 'online') {
                settings.onlineMemory = '';
            } else {
                settings.offlineMemory = '';
            }
            
            // 同时清空另一个（线上线下记忆互通）
            if (currentMemoryType === 'online') {
                settings.offlineMemory = '';
            } else {
                settings.onlineMemory = '';
            }
            
            saveChatSettings(currentChatSettingsContact, settings);
            updateMemoryContent(currentMemoryType, settings);
            alert('记忆总结已清空！');
        });

        // 自动总结开关
        document.getElementById('chatSettingsAutoSummaryToggle')?.addEventListener('change', (e) => {
            if (!currentChatSettingsContact) return;
            const settings = getChatSettings(currentChatSettingsContact);
            settings.autoSummary = e.target.checked;
            saveChatSettings(currentChatSettingsContact, settings);
            document.getElementById('chatSettingsAutoSummaryRoundsItem').style.display = e.target.checked ? 'flex' : 'none';
        });

        // 自动总结轮次
        document.getElementById('chatSettingsAutoSummaryRounds')?.addEventListener('change', (e) => {
            if (!currentChatSettingsContact) return;
            const settings = getChatSettings(currentChatSettingsContact);
            settings.autoSummaryRounds = parseInt(e.target.value) || 20;
            saveChatSettings(currentChatSettingsContact, settings);
        });

        // 检查并执行自动总结
        function checkAutoSummary(contactName, isOnline) {
            const settings = getChatSettings(contactName);
            if (!settings.autoSummary || !settings.memoryEnabled) return;
            
            const messages = isOnline ? (chatMessages[contactName] || []) : (offlineMessages[contactName] || []);
            const relevantMsgs = messages.filter(m => m.type !== 'system');
            
            if (relevantMsgs.length > 0 && relevantMsgs.length % settings.autoSummaryRounds === 0) {
                // 触发自动总结
                generateMemorySummary(contactName, isOnline);
            }
        }

        // 生成记忆总结
        async function generateMemorySummary(contactName, isOnline) {
            const settings = getChatSettings(contactName);
            const messages = isOnline ? (chatMessages[contactName] || []) : (offlineMessages[contactName] || []);
            const recentMsgs = messages.slice(-settings.autoSummaryRounds);
            
            // 构建总结提示 - 使用联系人名字
            const contact = wechatContacts.find(c => c.name === contactName);
            const contactDisplayName = contact ? (contact.remark || contact.name) : contactName;
            let chatHistory = '';
            recentMsgs.forEach(m => {
                if (m.type !== 'system') {
                    chatHistory += (m.sender === 'self' ? '用户' : contactDisplayName) + '：' + (m.content || '') + '\n';
                }
            });
            
            const summaryPrompt = '你是一个记忆总结助手。请根据以下' + (isOnline ? '微信聊天' : '线下见面') + '对话记录，写一份详细的记忆总结。\n\n要求：\n1. 用第三人称描述，对方叫"' + contactDisplayName + '"，自己叫"用户"\n2. 详细记录对话中讨论的话题、发生的事件、达成的约定\n3. 记录双方的情绪变化和态度\n4. 记录重要的细节（时间、地点、物品、数字等）\n5. 未完成的话题标注为"待办"\n6. 不要编造没有发生的事情\n7. 字数300-500字\n8. 直接输出总结的正文内容，不要输出任何标题、格式标记、提示词模板、markdown格式\n\n对话记录：\n' + chatHistory + '\n请直接输出记忆总结：';
            
            // 调用API生成总结
            const { url: apiUrl, key: apiKey, model: apiModel } = getApiConfig();
            
            if (apiUrl && apiKey && apiModel) {
                try {
                    let fullUrl = apiUrl;
                    if (!fullUrl.endsWith('/chat/completions')) {
                        fullUrl = fullUrl + '/chat/completions';
                    }
                    
                    const response = await fetch(fullUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + apiKey
                        },
                        body: JSON.stringify({
                            model: apiModel,
                            messages: [{ role: 'user', content: summaryPrompt }],
                            max_tokens: 1024
                        })
                    });
                    
                    if (response.ok) {
                        const data = await response.json();
                        const summary = data.choices?.[0]?.message?.content || '';
                        
                        // 关键修复：只有当summary有实际内容时才保存
                        if (summary && summary.trim().length > 5) {
                            // 保存总结
                            const now = new Date();
                            const timestamp = `${now.getFullYear()}/${String(now.getMonth()+1).padStart(2,'0')}/${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
                            const summaryEntry = `[${timestamp}]\n${summary.trim()}\n\n`;
                            
                            if (isOnline) {
                                settings.onlineMemory = (settings.onlineMemory || '') + summaryEntry;
                            } else {
                                settings.offlineMemory = (settings.offlineMemory || '') + summaryEntry;
                            }
                            saveChatSettings(contactName, settings);
                            console.log('记忆总结已保存:', summary.substring(0, 50) + '...');
                            return true;
                        } else {
                            console.warn('记忆总结内容为空或太短，不保存:', summary);
                            return false;
                        }
                    } else {
                        console.error('API请求失败:', response.status);
                        return false;
                    }
                } catch (err) {
                    console.error('自动总结失败:', err);
                    return false;
                }
        }

        // ========== 聊天壁纸功能 ==========
        // 打开壁纸设置
        document.getElementById('chatSettingsWallpaperItem')?.addEventListener('click', () => {
            if (!currentChatSettingsContact) return;
            const settings = getChatSettings(currentChatSettingsContact);
            const preview = document.getElementById('chatSettingsWallpaperPreview');
            if (settings.wallpaper) {
                preview.style.backgroundImage = `url('${settings.wallpaper}')`;
                preview.innerHTML = '';
            } else {
                preview.style.backgroundImage = '';
                preview.innerHTML = '<div class="wechat-offline-bg-empty">点击选择图片</div>';
            }
            document.getElementById('chatSettingsWallpaperModal').classList.add('open');
        });

        // 选择壁纸图片
        document.getElementById('chatSettingsWallpaperFile')?.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file || !currentChatSettingsContact) return;
            const reader = new FileReader();
            reader.onload = (ev) => {
                // 压缩图片
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const maxW = 800;
                    let w = img.width, h = img.height;
                    if (w > maxW) { h = h * maxW / w; w = maxW; }
                    canvas.width = w;
                    canvas.height = h;
                    canvas.getContext('2d').drawImage(img, 0, 0, w, h);
                    const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
                    
                    const settings = getChatSettings(currentChatSettingsContact);
                    settings.wallpaper = dataUrl;
                    saveChatSettings(currentChatSettingsContact, settings);
                    
                    const preview = document.getElementById('chatSettingsWallpaperPreview');
                    preview.style.backgroundImage = `url('${dataUrl}')`;
                    preview.innerHTML = '';
                    
                    // 应用壁纸
                    applyChatWallpaper(currentChatSettingsContact);
                };
                img.src = ev.target.result;
            };
            reader.readAsDataURL(file);
            e.target.value = '';
        });

        // 恢复默认壁纸
        document.getElementById('chatSettingsWallpaperClearBtn')?.addEventListener('click', () => {
            if (!currentChatSettingsContact) return;
            const settings = getChatSettings(currentChatSettingsContact);
            settings.wallpaper = '';
            saveChatSettings(currentChatSettingsContact, settings);
            
            const preview = document.getElementById('chatSettingsWallpaperPreview');
            preview.style.backgroundImage = '';
            preview.innerHTML = '<div class="wechat-offline-bg-empty">点击选择图片</div>';
            
            // 移除壁纸
            applyChatWallpaper(currentChatSettingsContact);
        });

        // 关闭壁纸弹窗
        document.getElementById('chatSettingsWallpaperClose')?.addEventListener('click', () => {
            document.getElementById('chatSettingsWallpaperModal').classList.remove('open');
        });

        // 恢复默认壁纸（设置页）
        document.getElementById('chatSettingsWallpaperClearItem')?.addEventListener('click', () => {
            if (!currentChatSettingsContact) return;
            const settings = getChatSettings(currentChatSettingsContact);
            settings.wallpaper = '';
            saveChatSettings(currentChatSettingsContact, settings);
            applyChatWallpaper(currentChatSettingsContact);
            alert('已恢复默认壁纸');
        });

        // 应用聊天壁纸
        function applyChatWallpaper(contactName) {
            const settings = getChatSettings(contactName);
            const msgContainer = document.getElementById('chatRoomMessages');
            
            // 优先级：联系人设置 > 美化全局设置
            const wallpaper = settings.wallpaper || localStorage.getItem('wpChat') || '';
            
            if (msgContainer) {
                if (wallpaper) {
                    msgContainer.style.backgroundImage = `url('${wallpaper}')`;
                    msgContainer.style.backgroundSize = 'cover';
                    msgContainer.style.backgroundPosition = 'center';
                    msgContainer.style.backgroundColor = '#EDEDED';
                } else {
                    msgContainer.style.backgroundImage = '';
                    msgContainer.style.backgroundColor = '#EDEDED';
                }
            }
        }

        // ========== 清空聊天记录功能 ==========
        // 打开清空确认弹窗
        document.getElementById('chatSettingsClearChatItem')?.addEventListener('click', () => {
            document.getElementById('chatSettingsClearChatModal').classList.add('open');
        });

        // 取消清空
        document.getElementById('chatSettingsClearChatCancel')?.addEventListener('click', () => {
            document.getElementById('chatSettingsClearChatModal').classList.remove('open');
        });

        // 确认清空
        document.getElementById('chatSettingsClearChatConfirm')?.addEventListener('click', () => {
            if (!currentChatSettingsContact) return;
            
            // 清空线上聊天记录
            chatMessages[currentChatSettingsContact] = [];
            localStorage.setItem('wechatChatMessages', JSON.stringify(chatMessages));
            
            // 清空线下聊天记录
            offlineMessages[currentOfflineContact] = [];
            localStorage.setItem('wechatOfflineMessages', JSON.stringify(offlineMessages));
            
            // 清空记忆总结
            const settings = getChatSettings(currentChatSettingsContact);
            settings.onlineMemory = '';
            settings.offlineMemory = '';
            saveChatSettings(currentChatSettingsContact, settings);
            
            // 更新聊天列表
            const chat = chatList.find(c => c.contactName === currentChatSettingsContact);
            if (chat) {
                chat.lastMessage = '';
                chat.time = '';
                localStorage.setItem('wechatChatList', JSON.stringify(chatList));
            }
            
            // 关闭弹窗并返回
            document.getElementById('chatSettingsClearChatModal').classList.remove('open');
            document.getElementById('wechatChatSettingsPage').classList.remove('open');
            
            // 刷新显示
            renderChatList();
            renderChatMessages();
            
            currentChatSettingsContact = null;
        });

        // 点击翻译按钮 → 翻译联系人消息（符合角色人设）
        // 翻译内容（用于双语翻译自动翻译）
        async function getTranslatedContent(content) {
            if (!content) return null;
            
            const { url: apiUrl, key: apiKey, model: apiModel } = getApiConfig();
            if (!apiUrl || !apiKey || !apiModel) return null;
            
            try {
                let fullUrl = apiUrl;
                if (!fullUrl.endsWith('/chat/completions')) {
                    fullUrl = fullUrl + '/chat/completions';
                }
                
                const translatePrompt = `请将以下文本翻译成中文（如果原文已经是中文则直接返回原文），只返回翻译结果，不要解释：\n\n${content}`;
                
                const response = await fetch(fullUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + apiKey
                    },
                    body: JSON.stringify({
                        model: apiModel,
                        messages: [{ role: 'user', content: translatePrompt }],
                        max_tokens: 500
                    })
                });
                
                if (response.ok) {
                    const data = await response.json();
                    return data.choices?.[0]?.message?.content || null;
                }
            } catch (err) {
                console.error('翻译失败:', err);
            }
            return null;
        }

        // ========== 世界书功能 ==========
        let worldbookData = JSON.parse(localStorage.getItem('worldbookData')) || { groups: [], entries: [] };
        let editingEntryIndex = -1;
        let currentWorldbookScope = 'global'; // 当前查看的范围

        function saveWorldbook() {
            localStorage.setItem('worldbookData', JSON.stringify(worldbookData));
        }

        function switchWorldbookScope(scope) {
            currentWorldbookScope = scope;
            document.getElementById('worldbookGlobalSection').classList.toggle('active', scope === 'global');
            document.getElementById('worldbookLocalSection').classList.toggle('active', scope === 'local');
            renderWorldbook();
        }

        function renderWorldbook() {
            const listArea = document.getElementById('worldbookListArea');
            const globalEntries = worldbookData.entries.filter(e => (e.scope || 'global') === 'global');
            const localEntries = worldbookData.entries.filter(e => e.scope === 'local');

            // 更新计数（不包含系统内置）
            document.getElementById('worldbookGlobalCount').textContent = globalEntries.length;
            document.getElementById('worldbookLocalSection').textContent = localEntries.length;

            let html = '';

            // 按当前scope过滤
            const filteredEntries = currentWorldbookScope === 'global' ? globalEntries : localEntries;

            if (filteredEntries.length === 0) {
                listArea.innerHTML = html + '<div style="text-align:center;color:#999;padding:60px 20px;"><div style="font-size:16px;margin-bottom:8px;">暂无' + (currentWorldbookScope === 'global' ? '全局' : '局部') + '世界书</div><div style="font-size:13px;color:#ccc;">点击右上角 + 添加世界书条目</div></div>';
                return;
            }

            // 渲染分组
            worldbookData.groups.forEach((group, gi) => {
                const groupEntries = filteredEntries.filter(e => e.group === group.name);
                if (groupEntries.length === 0) return;
                html += `<div class="worldbook-group">
                    <div class="worldbook-group-header">
                        <div class="worldbook-group-name">
                            <span>${group.name}</span>
                            <span class="worldbook-group-count">${groupEntries.length}</span>
                        </div>
                        <div class="worldbook-group-actions">
                            <span onclick="editWorldbookGroup(${gi})" title="重命名">编辑</span>
                            <span onclick="deleteWorldbookGroup(${gi})" title="删除">删除</span>
                        </div>
                    </div>`;
                groupEntries.forEach(entry => {
                    const realIndex = worldbookData.entries.indexOf(entry);
                    html += renderEntryItem(entry, realIndex);
                });
                html += '</div>';
            });

            // 渲染未分组的条目
            const ungrouped = filteredEntries.filter(e => !e.group);
            if (ungrouped.length > 0) {
                html += '<div class="worldbook-group"><div class="worldbook-group-header"><div class="worldbook-group-name"><span>默认</span><span class="worldbook-group-count">' + ungrouped.length + '</span></div></div>';
                ungrouped.forEach(entry => {
                    const realIndex = worldbookData.entries.indexOf(entry);
                    html += renderEntryItem(entry, realIndex);
                });
                html += '</div>';
            }

            listArea.innerHTML = html;

            // 绑定长按事件
            bindWorldbookLongPress();
        }

        function renderEntryItem(entry, index) {
            const contactLabel = entry.scope === 'local' && entry.contacts ? ' · ' + entry.contacts.join(', ') : '';
            const keysDisplay = entry.keys ? `关键词：${entry.keys}${contactLabel}` : '<span style="color:#07C160;">全局生效（无需触发词）</span>';
            return `<div class="worldbook-entry" data-index="${index}" onclick="editWorldbookEntry(${index})">
                <div class="worldbook-entry-info">
                    <div class="worldbook-entry-name">${entry.name || '未命名'}</div>
                    <div class="worldbook-entry-keys">${keysDisplay}</div>
                </div>
            </div>`;
        }

        // 长按菜单相关变量
        let worldbookLongPressTimer = null;
        let worldbookContextTarget = null;

        function bindWorldbookLongPress() {
            const entries = document.querySelectorAll('.worldbook-entry');
            entries.forEach(entry => {
                // 触摸长按
                entry.addEventListener('touchstart', handleWorldbookTouchStart, { passive: false });
                entry.addEventListener('touchend', handleWorldbookTouchEnd);
                entry.addEventListener('touchmove', handleWorldbookTouchEnd);
                // 鼠标右键
                entry.addEventListener('contextmenu', handleWorldbookContextMenu);
            });

            // 分组长按
            const groupHeaders = document.querySelectorAll('.worldbook-group-header');
            groupHeaders.forEach(header => {
                header.addEventListener('touchstart', handleGroupTouchStart, { passive: false });
                header.addEventListener('touchend', handleGroupTouchEnd);
                header.addEventListener('touchmove', handleGroupTouchEnd);
                header.addEventListener('contextmenu', handleGroupContextMenu);
            });
        }

        function handleWorldbookTouchStart(e) {
            const index = this.dataset.index;
            worldbookLongPressTimer = setTimeout(() => {
                worldbookContextTarget = { type: 'entry', index: parseInt(index) };
                showWorldbookContextMenu(e.touches[0].clientX, e.touches[0].clientY);
            }, 500);
        }

        function handleWorldbookTouchEnd() {
            clearTimeout(worldbookLongPressTimer);
        }

        function handleWorldbookContextMenu(e) {
            e.preventDefault();
            const index = this.dataset.index;
            worldbookContextTarget = { type: 'entry', index: parseInt(index) };
            showWorldbookContextMenu(e.clientX, e.clientY);
        }

        function handleGroupTouchStart(e) {
            const groupEl = this.closest('.worldbook-group');
            const groupName = groupEl.querySelector('.worldbook-group-name span').textContent;
            const gi = worldbookData.groups.findIndex(g => g.name === groupName);
            if (gi < 0) return;
            worldbookLongPressTimer = setTimeout(() => {
                worldbookContextTarget = { type: 'group', index: gi };
                showWorldbookContextMenu(e.touches[0].clientX, e.touches[0].clientY);
            }, 500);
        }

        function handleGroupTouchEnd() {
            clearTimeout(worldbookLongPressTimer);
        }

        function handleGroupContextMenu(e) {
            e.preventDefault();
            const groupEl = this.closest('.worldbook-group');
            const groupName = groupEl.querySelector('.worldbook-group-name span').textContent;
            const gi = worldbookData.groups.findIndex(g => g.name === groupName);
            if (gi < 0) return;
            worldbookContextTarget = { type: 'group', index: gi };
            showWorldbookContextMenu(e.clientX, e.clientY);
        }

        function showWorldbookContextMenu(x, y) {
            const menu = document.getElementById('worldbookContextMenu');
            const worldbookPage = document.getElementById('worldbookPage');
            const rect = worldbookPage.getBoundingClientRect();
            let left = x - rect.left;
            let top = y - rect.top;
            if (left + 100 > rect.width) left = rect.width - 110;
            if (top + 80 > rect.height) top = rect.height - 90;
            menu.style.left = left + 'px';
            menu.style.top = top + 'px';
            menu.style.display = 'block';
        }

        function hideWorldbookContextMenu() {
            document.getElementById('worldbookContextMenu').style.display = 'none';
            worldbookContextTarget = null;
        }

        // 长按菜单点击事件
        document.getElementById('worldbookContextMenu')?.addEventListener('click', (e) => {
            const item = e.target.closest('.wechat-msg-context-menu-item');
            if (!item || !worldbookContextTarget) { hideWorldbookContextMenu(); return; }
            const action = item.dataset.action;

            if (worldbookContextTarget.type === 'entry') {
                if (action === 'edit') {
                    editWorldbookEntry(worldbookContextTarget.index);
                } else if (action === 'delete') {
                    if (confirm('确定删除该世界书条目？')) {
                        worldbookData.entries.splice(worldbookContextTarget.index, 1);
                        saveWorldbook();
                        renderWorldbook();
                    }
                }
            } else if (worldbookContextTarget.type === 'group') {
                if (action === 'edit') {
                    editWorldbookGroup(worldbookContextTarget.index);
                } else if (action === 'delete') {
                    deleteWorldbookGroup(worldbookContextTarget.index);
                }
            }
            hideWorldbookContextMenu();
        });

        // 点击其他地方关闭菜单
        document.getElementById('worldbookPage')?.addEventListener('click', (e) => {
            if (!e.target.closest('#worldbookContextMenu')) {
                hideWorldbookContextMenu();
            }
        });

        function updateGroupSelect() {
            const select = document.getElementById('worldbookEntryGroup');
            select.innerHTML = '<option value="">默认（无分组）</option>';
            worldbookData.groups.forEach(g => {
                select.innerHTML += `<option value="${g.name}">${g.name}</option>`;
            });
        }

        // 返回按钮
        document.getElementById('worldbookBack')?.addEventListener('click', () => {
            document.getElementById('worldbookPage').classList.remove('open');
        });

        // +号按钮
        document.getElementById('worldbookAddBtn')?.addEventListener('click', () => {
            document.getElementById('worldbookActionModal').classList.add('open');
        });

        // 关闭操作弹窗
        document.getElementById('worldbookActionCancel')?.addEventListener('click', () => {
            document.getElementById('worldbookActionModal').classList.remove('open');
        });

        // 创建分组
        document.getElementById('worldbookActionCreateGroup')?.addEventListener('click', () => {
            document.getElementById('worldbookActionModal').classList.remove('open');
            document.getElementById('worldbookGroupName').value = '';
            document.getElementById('worldbookGroupModal').classList.add('open');
            setTimeout(() => document.getElementById('worldbookGroupName').focus(), 100);
        });

        // 确认创建分组
        document.getElementById('worldbookGroupConfirm')?.addEventListener('click', () => {
            const name = document.getElementById('worldbookGroupName').value.trim();
            if (!name) { alert('请输入分组名称'); return; }
            if (worldbookData.groups.find(g => g.name === name)) { alert('分组名称已存在'); return; }
            worldbookData.groups.push({ name });
            saveWorldbook();
            document.getElementById('worldbookGroupModal').classList.remove('open');
            renderWorldbook();
        });

        // 取消创建分组
        document.getElementById('worldbookGroupCancel')?.addEventListener('click', () => {
            document.getElementById('worldbookGroupModal').classList.remove('open');
        });

        // 添加世界书条目
        document.getElementById('worldbookActionAddEntry')?.addEventListener('click', () => {
            document.getElementById('worldbookActionModal').classList.remove('open');
            editingEntryIndex = -1;
            document.getElementById('worldbookEntryTitle').textContent = '添加世界书条目';
            document.getElementById('worldbookEntryName').value = '';
            document.getElementById('worldbookEntryKeys').value = '';
            document.getElementById('worldbookEntryContent').value = '';
            document.getElementById('worldbookScopeGlobal').checked = true;
            document.getElementById('worldbookLocalContacts').style.display = 'none';
            updateGroupSelect();
            updateContactSelect();
            document.getElementById('worldbookEntryGroup').value = '';
            document.getElementById('worldbookEntryModal').classList.add('open');
        });

        // 范围模式切换
        document.getElementById('worldbookScopeGlobal')?.addEventListener('change', () => {
            document.getElementById('worldbookLocalContacts').style.display = 'none';
        });
        document.getElementById('worldbookScopeLocal')?.addEventListener('change', () => {
            document.getElementById('worldbookLocalContacts').style.display = 'block';
            updateContactSelect();
        });

        // 更新角色选择列表
        function updateContactSelect() {
            const container = document.getElementById('worldbookContactList');
            if (!wechatContacts || wechatContacts.length === 0) {
                container.innerHTML = '<div style="color:#999;text-align:center;padding:12px;">暂无角色，请先创建联系人</div>';
                return;
            }
            let html = '';
            wechatContacts.forEach(c => {
                html += `<label style="display:flex;align-items:center;gap:8px;padding:8px;cursor:pointer;border-radius:6px;transition:background 0.2s;" onmouseover="this.style.background='#f5f5f5'" onmouseout="this.style.background='none'">
                    <input type="checkbox" class="worldbook-contact-checkbox" value="${c.name}" style="width:18px;height:18px;">
                    <span style="flex:1;">${c.remark || c.name}</span>
                </label>`;
            });
            container.innerHTML = html;
        }

        // 保存世界书条目
        document.getElementById('worldbookEntrySave')?.addEventListener('click', () => {
            const name = document.getElementById('worldbookEntryName').value.trim();
            const keys = document.getElementById('worldbookEntryKeys').value.trim();
            const content = document.getElementById('worldbookEntryContent').value.trim();
            const group = document.getElementById('worldbookEntryGroup').value;
            const scope = document.querySelector('input[name="worldbookScope"]:checked').value;

            if (!name) { alert('请输入条目名称'); return; }
            if (!content) { alert('请输入内容'); return; }

            // 获取选中的角色（局部模式）
            let contacts = [];
            if (scope === 'local') {
                const checkboxes = document.querySelectorAll('.worldbook-contact-checkbox:checked');
                contacts = Array.from(checkboxes).map(cb => cb.value);
                if (contacts.length === 0) {
                    alert('请选择至少一个角色');
                    return;
                }
            }

            const entry = { name, keys, content, group, scope, contacts };

            if (editingEntryIndex >= 0) {
                worldbookData.entries[editingEntryIndex] = entry;
            } else {
                worldbookData.entries.push(entry);
            }

            saveWorldbook();
            document.getElementById('worldbookEntryModal').classList.remove('open');
            renderWorldbook();
        });

        // 取消编辑条目
        document.getElementById('worldbookEntryCancel')?.addEventListener('click', () => {
            document.getElementById('worldbookEntryModal').classList.remove('open');
        });

        // 编辑世界书条目
        function editWorldbookEntry(index) {
            editingEntryIndex = index;
            const entry = worldbookData.entries[index];
            document.getElementById('worldbookEntryTitle').textContent = '编辑世界书条目';
            document.getElementById('worldbookEntryName').value = entry.name || '';
            document.getElementById('worldbookEntryKeys').value = entry.keys || '';
            document.getElementById('worldbookEntryContent').value = entry.content || '';
            
            // 恢复范围模式
            const scope = entry.scope || 'global';
            document.getElementById('worldbookScopeGlobal').checked = scope === 'global';
            document.getElementById('worldbookScopeLocal').checked = scope === 'local';
            document.getElementById('worldbookLocalContacts').style.display = scope === 'local' ? 'block' : 'none';
            
            updateGroupSelect();
            updateContactSelect();
            document.getElementById('worldbookEntryGroup').value = entry.group || '';
            
            // 恢复角色选择
            if (scope === 'local' && entry.contacts) {
                setTimeout(() => {
                    entry.contacts.forEach(contactName => {
                        const cb = document.querySelector(`.worldbook-contact-checkbox[value="${contactName}"]`);
                        if (cb) cb.checked = true;
                    });
                }, 50);
            }
            
            document.getElementById('worldbookEntryModal').classList.add('open');
        }

        // 删除世界书条目
        function deleteWorldbookEntry(index) {
            if (confirm('确定删除该条目？')) {
                worldbookData.entries.splice(index, 1);
                saveWorldbook();
                renderWorldbook();
            }
        }

        // 编辑分组（重命名）
        function editWorldbookGroup(index) {
            const newName = prompt('请输入新的分组名称', worldbookData.groups[index].name);
            if (newName && newName.trim()) {
                const oldName = worldbookData.groups[index].name;
                worldbookData.groups[index].name = newName.trim();
                // 更新条目中的分组名
                worldbookData.entries.forEach(e => {
                    if (e.group === oldName) e.group = newName.trim();
                });
                saveWorldbook();
                renderWorldbook();
            }
        }

        // 删除分组
        function deleteWorldbookGroup(index) {
            const groupName = worldbookData.groups[index].name;
            const count = worldbookData.entries.filter(e => e.group === groupName).length;
            if (confirm(`确定删除分组"${groupName}"？\n该分组下有${count}个条目将变为未分组。`)) {
                // 将条目移到未分组
                worldbookData.entries.forEach(e => {
                    if (e.group === groupName) e.group = '';
                });
                worldbookData.groups.splice(index, 1);
                saveWorldbook();
                renderWorldbook();
            }
        }

        // ========== 美团功能 ==========
        // 模拟店铺数据
        const meituanShops = [
            { id: 1, name: '麦当劳', category: 'fast', icon: '🍔', rating: 4.8, sales: 9999, time: '30分钟', delivery: 5, minPrice: 20, tags: ['满减', '会员'], menu: [
                { name: '巨无霸套餐', price: 35, desc: '巨无霸+薯条+可乐', icon: '🍔' },
                { name: '麦辣鸡翅', price: 12, desc: '香辣酥脆', icon: '🍗' },
                { name: '麦旋风', price: 10, desc: '奥利奥口味', icon: '🍦' }
            ]},
            { id: 2, name: '喜茶', category: 'drink', icon: '🧋', rating: 4.9, sales: 8888, time: '25分钟', delivery: 3, minPrice: 15, tags: ['新品', '免配送'], menu: [
                { name: '多肉葡萄', price: 28, desc: '新鲜葡萄+芝士', icon: '🍇' },
                { name: '芋泥波波', price: 22, desc: '芋泥+珍珠', icon: '🧋' },
                { name: '满杯红柚', price: 20, desc: '西柚+绿茶', icon: '🍊' }
            ]},
            { id: 3, name: '海底捞', category: 'food', icon: '🍲', rating: 4.7, sales: 6666, time: '45分钟', delivery: 8, minPrice: 50, tags: ['火锅', '大牌'], menu: [
                { name: '招牌虾滑', price: 48, desc: '手工虾滑', icon: '🦐' },
                { name: '毛肚', price: 38, desc: '七上八下', icon: '🥘' },
                { name: '嫩牛肉', price: 42, desc: '鲜嫩多汁', icon: '🥩' }
            ]},
            { id: 4, name: '肯德基', category: 'fast', icon: '🍗', rating: 4.6, sales: 7777, time: '35分钟', delivery: 6, minPrice: 25, tags: ['套餐', '炸鸡'], menu: [
                { name: '全家桶', price: 88, desc: '超值套餐', icon: '🍗' },
                { name: '香辣鸡腿堡', price: 18, desc: '经典口味', icon: '🍔' },
                { name: '蛋挞', price: 8, desc: '葡式蛋挞', icon: '🥧' }
            ]},
            { id: 5, name: '奈雪的茶', category: 'drink', icon: '🥤', rating: 4.8, sales: 5555, time: '20分钟', delivery: 0, minPrice: 18, tags: ['免配送', '欧包'], menu: [
                { name: '霸气芝士草莓', price: 32, desc: '草莓+芝士奶盖', icon: '🍓' },
                { name: '奥利奥魔法棒', price: 16, desc: '软欧包', icon: '🥖' },
                { name: '芋泥宝藏茶', price: 25, desc: '芋泥+鲜奶', icon: '🥤' }
            ]},
            { id: 6, name: '必胜客', category: 'food', icon: '🍕', rating: 4.5, sales: 4444, time: '40分钟', delivery: 7, minPrice: 35, tags: ['披萨', '意面'], menu: [
                { name: '超级至尊披萨', price: 68, desc: '12寸大披萨', icon: '🍕' },
                { name: '意式肉酱面', price: 35, desc: '经典意面', icon: '🍝' },
                { name: '浓情烤翅', price: 22, desc: '奥尔良口味', icon: '🍗' }
            ]},
            { id: 7, name: '好利来', category: 'snack', icon: '🍰', rating: 4.9, sales: 3333, time: '25分钟', delivery: 4, minPrice: 30, tags: ['蛋糕', '甜点'], menu: [
                { name: '半熟芝士', price: 38, desc: '招牌甜点', icon: '🧀' },
                { name: '提拉米苏', price: 28, desc: '经典意式', icon: '🍰' },
                { name: '草莓蛋糕', price: 35, desc: '新鲜草莓', icon: '🎂' }
            ]},
            { id: 8, name: '星巴克', category: 'drink', icon: '☕', rating: 4.7, sales: 6666, time: '30分钟', delivery: 6, minPrice: 30, tags: ['咖啡', '星冰乐'], menu: [
                { name: '拿铁', price: 32, desc: '经典咖啡', icon: '☕' },
                { name: '星冰乐', price: 36, desc: '摩卡口味', icon: '🥤' },
                { name: '美式咖啡', price: 28, desc: '浓郁香醇', icon: '☕' }
            ]}
        ];

        let meituanCart = {};
        let currentMeituanShop = null;
        let meituanCurrentOrder = null;

        function renderMeituan(category = 'all', search = '') {
            const list = document.getElementById('meituanShopList');
            let shops = meituanShops;
            
            if (category !== 'all') {
                shops = shops.filter(s => s.category === category);
            }
            if (search) {
                shops = shops.filter(s => s.name.includes(search) || s.menu.some(m => m.name.includes(search)));
            }

            let html = '';
            shops.forEach(shop => {
                html += `<div class="meituan-shop-item" data-id="${shop.id}">
                    <div class="meituan-shop-img">${shop.icon}</div>
                    <div class="meituan-shop-info">
                        <div class="meituan-shop-name">${shop.name}</div>
                        <div class="meituan-shop-rating">
                            <span class="meituan-shop-rating-score">${shop.rating}分</span>
                            <span>月售${shop.sales}+</span>
                        </div>
                        <div class="meituan-shop-tags">
                            ${shop.tags.map(t => `<span class="meituan-shop-tag">${t}</span>`).join('')}
                        </div>
                        <div class="meituan-shop-delivery">
                            <span>起送¥${shop.minPrice} · 配送¥${shop.delivery}</span>
                            <span>${shop.time}</span>
                        </div>
                    </div>
                </div>`;
            });
            list.innerHTML = html;

            // 绑定点击事件
            list.querySelectorAll('.meituan-shop-item').forEach(item => {
                item.addEventListener('click', () => {
                    const id = parseInt(item.dataset.id);
                    openMeituanShop(id);
                });
            });
        }

        function openMeituanShop(id) {
            currentMeituanShop = meituanShops.find(s => s.id === id);
            if (!currentMeituanShop) return;

            document.getElementById('meituanShopName').textContent = currentMeituanShop.name;
            document.getElementById('meituanShopPage').classList.add('open');
            
            // 渲染店铺信息
            document.getElementById('meituanShopInfo').innerHTML = `
                <div style="padding:16px;background:#fff;margin-bottom:12px;">
                    <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
                        <div style="font-size:48px;">${currentMeituanShop.icon}</div>
                        <div>
                            <div style="font-size:18px;font-weight:600;">${currentMeituanShop.name}</div>
                            <div style="color:#FF6B00;font-size:14px;">⭐ ${currentMeituanShop.rating}分 · 月售${currentMeituanShop.sales}+</div>
                        </div>
                    </div>
                    <div style="color:#999;font-size:13px;">配送约${currentMeituanShop.time} · 配送费¥${currentMeituanShop.delivery} · 起送¥${currentMeituanShop.minPrice}</div>
                </div>
            `;

            // 渲染菜单
            renderMeituanMenu();
            updateMeituanCart();
        }

        function renderMeituanMenu() {
            const list = document.getElementById('meituanMenuList');
            let html = '';
            currentMeituanShop.menu.forEach((item, idx) => {
                const count = meituanCart[`${currentMeituanShop.id}_${idx}`] || 0;
                html += `<div class="meituan-menu-item">
                    <div class="meituan-menu-img">${item.icon}</div>
                    <div class="meituan-menu-info">
                        <div class="meituan-menu-name">${item.name}</div>
                        <div class="meituan-menu-desc">${item.desc}</div>
                        <div class="meituan-menu-bottom">
                            <div class="meituan-menu-price"><span>¥</span>${item.price}</div>
                            <div style="display:flex;align-items:center;gap:8px;">
                                ${count > 0 ? `<button class="meituan-add-btn" style="background:#f5f5f5;" onclick="updateMeituanCartItem(${currentMeituanShop.id}, ${idx}, -1)">-</button><span>${count}</span>` : ''}
                                <button class="meituan-add-btn" onclick="updateMeituanCartItem(${currentMeituanShop.id}, ${idx}, 1)">+</button>
                            </div>
                        </div>
                    </div>
                </div>`;
            });
            list.innerHTML = html;
        }

        function updateMeituanCartItem(shopId, itemIdx, delta) {
            const key = `${shopId}_${itemIdx}`;
            const current = meituanCart[key] || 0;
            const newCount = current + delta;
            if (newCount > 0) {
                meituanCart[key] = newCount;
            } else {
                delete meituanCart[key];
            }
            renderMeituanMenu();
            updateMeituanCart();
        }

        function updateMeituanCart() {
            let total = 0;
            let count = 0;
            Object.entries(meituanCart).forEach(([key, qty]) => {
                const [shopId, itemIdx] = key.split('_').map(Number);
                const shop = meituanShops.find(s => s.id === shopId);
                if (shop) {
                    total += shop.menu[itemIdx].price * qty;
                    count += qty;
                }
            });
            document.getElementById('meituanCartTotal').textContent = total;
            document.getElementById('meituanCartCount').textContent = count;
            document.getElementById('meituanCartBar').style.display = count > 0 ? 'flex' : 'none';
        }

        function submitMeituanOrder() {
            if (!currentMeituanShop) return;
            
            let items = [];
            let total = 0;
            Object.entries(meituanCart).forEach(([key, qty]) => {
                const [shopId, itemIdx] = key.split('_').map(Number);
                if (shopId === currentMeituanShop.id) {
                    const item = currentMeituanShop.menu[itemIdx];
                    items.push({ ...item, qty });
                    total += item.price * qty;
                }
            });

            meituanCurrentOrder = {
                shop: currentMeituanShop,
                items: items,
                total: total,
                deliveryFee: currentMeituanShop.delivery,
                finalTotal: total + currentMeituanShop.delivery
            };

            // 渲染订单确认页
            document.getElementById('meituanOrderItems').innerHTML = items.map(i => `
                <div class="meituan-order-item">
                    <span>${i.name} x${i.qty}</span>
                    <span>¥${i.price * i.qty}</span>
                </div>
            `).join('') + `
                <div class="meituan-order-item" style="border-top:1px solid #f0f0f0;margin-top:8px;padding-top:8px;">
                    <span>小计</span>
                    <span>¥${total}</span>
                </div>
            `;
            document.getElementById('meituanOrderTotal').textContent = meituanCurrentOrder.finalTotal;
            document.getElementById('meituanDeliveryFee').textContent = currentMeituanShop.delivery;
            
            document.getElementById('meituanShopPage').classList.remove('open');
            document.getElementById('meituanOrderPage').classList.add('open');
        }

        function startMeituanDelivery() {
            document.getElementById('meituanOrderPage').classList.remove('open');
            document.getElementById('meituanDeliveryPage').classList.add('open');
            
            // 模拟距离变化
            let distance = 1.5;
            const distanceEl = document.getElementById('meituanDistance');
            const interval = setInterval(() => {
                distance -= 0.1;
                if (distance <= 0) {
                    distance = 0;
                    clearInterval(interval);
                    document.getElementById('meituanDeliveryStatus').innerHTML = `
                        <div class="meituan-status-main" style="color:#07C160;">订单已送达</div>
                        <div class="meituan-status-sub">感谢使用美团外卖</div>
                    `;
                }
                distanceEl.textContent = distance.toFixed(1);
            }, 3000);
        }

        // 美团事件绑定
        document.getElementById('meituanBack')?.addEventListener('click', () => {
            document.getElementById('meituanPage').classList.remove('open');
        });

        document.getElementById('meituanShopBack')?.addEventListener('click', () => {
            document.getElementById('meituanShopPage').classList.remove('open');
        });

        document.getElementById('meituanOrderBack')?.addEventListener('click', () => {
            document.getElementById('meituanOrderPage').classList.remove('open');
            document.getElementById('meituanShopPage').classList.add('open');
        });

        document.getElementById('meituanDeliveryBack')?.addEventListener('click', () => {
            document.getElementById('meituanDeliveryPage').classList.remove('open');
        });

        document.getElementById('meituanReviewBack')?.addEventListener('click', () => {
            document.getElementById('meituanReviewPage').classList.remove('open');
        });

        // 搜索
        document.getElementById('meituanSearchInput')?.addEventListener('input', (e) => {
            renderMeituan('all', e.target.value);
        });

        // 分类筛选
        document.querySelectorAll('.meituan-category-item').forEach(item => {
            item.addEventListener('click', () => {
                document.querySelectorAll('.meituan-category-item').forEach(i => i.style.opacity = '0.6');
                item.style.opacity = '1';
                renderMeituan(item.dataset.cat);
            });
        });

        // 结算
        document.getElementById('meituanSubmitOrder')?.addEventListener('click', submitMeituanOrder);

        // 支付
        document.getElementById('meituanPayBtn')?.addEventListener('click', () => {
            alert('支付成功！正在为您安排配送...');
            meituanCart = {};
            updateMeituanCart();
            startMeituanDelivery();
        });

        // 联系骑手
        document.getElementById('meituanCallRider')?.addEventListener('click', () => {
            alert('正在呼叫骑手...');
        });

        document.getElementById('meituanMsgRider')?.addEventListener('click', () => {
            const msg = prompt('给骑手留言：');
            if (msg) alert('消息已发送给骑手');
        });

        // 评价
        document.getElementById('meituanCollectBtn')?.addEventListener('click', function() {
            this.classList.toggle('active');
            this.textContent = this.classList.contains('active') ? '★' : '☆';
        });

        // 星级评分
        let meituanRating = 0;
        document.querySelectorAll('.meituan-star').forEach(star => {
            star.addEventListener('click', () => {
                meituanRating = parseInt(star.dataset.rating);
                document.querySelectorAll('.meituan-star').forEach((s, i) => {
                    s.textContent = i < meituanRating ? '★' : '☆';
                    s.classList.toggle('active', i < meituanRating);
                });
                const texts = ['非常差', '差', '一般', '满意', '非常满意'];
                document.getElementById('meituanRatingText').textContent = texts[meituanRating - 1];
            });
        });

        // 标签选择
        document.querySelectorAll('.meituan-tag').forEach(tag => {
            tag.addEventListener('click', () => {
                tag.classList.toggle('active');
            });
        });

        // 提交评价
        document.getElementById('meituanSubmitReview')?.addEventListener('click', () => {
            if (meituanRating === 0) {
                alert('请先评分');
                return;
            }
            alert('评价提交成功！');
            document.getElementById('meituanReviewPage').classList.remove('open');
        });

        // ========== 地址管理功能 ==========
        let meituanAddresses = JSON.parse(localStorage.getItem('meituanAddresses')) || [];
        let editingAddressIndex = -1;
        let selectedAddressIndex = -1;

        function saveMeituanAddresses() {
            localStorage.setItem('meituanAddresses', JSON.stringify(meituanAddresses));
        }

        function renderMeituanAddresses() {
            const list = document.getElementById('meituanAddressList');
            if (meituanAddresses.length === 0) {
                list.innerHTML = '<div style="text-align:center;color:#999;padding:60px 20px;"><div style="font-size:16px;margin-bottom:8px;">暂无收货地址</div><div style="font-size:13px;color:#ccc;">点击右上角"新增"添加地址</div></div>';
                return;
            }
            list.innerHTML = meituanAddresses.map((addr, idx) => `
                <div class="meituan-address-item ${addr.isDefault ? 'default' : ''}" data-index="${idx}">
                    <div>
                        <span class="meituan-address-name">${addr.name}</span>
                        <span class="meituan-address-phone">${addr.phone}</span>
                    </div>
                    <div class="meituan-address-detail">${addr.detail}</div>
                    ${addr.isDefault ? '<span class="meituan-address-default">默认</span>' : ''}
                    <div class="meituan-address-actions">
                        <div class="meituan-address-action" onclick="editMeituanAddress(${idx}); event.stopPropagation();">✏️</div>
                        <div class="meituan-address-action" onclick="deleteMeituanAddress(${idx}); event.stopPropagation();">🗑️</div>
                    </div>
                </div>
            `).join('');

            // 绑定选择事件
            list.querySelectorAll('.meituan-address-item').forEach(item => {
                item.addEventListener('click', () => {
                    selectedAddressIndex = parseInt(item.dataset.index);
                    document.getElementById('meituanAddressPage').classList.remove('open');
                    updateOrderAddress();
                });
            });
        }

        function updateOrderAddress() {
            const addr = meituanAddresses[selectedAddressIndex];
            if (!addr) return;
            document.getElementById('meituanAddressSection').innerHTML = `
                <div style="display:flex;align-items:center;gap:12px;" onclick="openMeituanAddressPage()">
                    <div style="font-size:24px;">📍</div>
                    <div style="flex:1;">
                        <div style="font-size:15px;font-weight:600;">${addr.name} ${addr.phone}</div>
                        <div style="font-size:13px;color:#666;margin-top:2px;">${addr.detail}</div>
                    </div>
                    <span style="color:#999;">›</span>
                </div>
            `;
        }

        function openMeituanAddressPage() {
            renderMeituanAddresses();
            document.getElementById('meituanAddressPage').classList.add('open');
        }

        function editMeituanAddress(idx) {
            editingAddressIndex = idx;
            const addr = meituanAddresses[idx];
            document.getElementById('meituanAddressEditTitle').textContent = '编辑地址';
            document.getElementById('meituanAddressName').value = addr.name;
            document.getElementById('meituanAddressPhone').value = addr.phone;
            document.getElementById('meituanAddressDetail').value = addr.detail;
            document.getElementById('meituanAddressDefault').checked = addr.isDefault;
            document.getElementById('meituanAddressEditPage').classList.add('open');
        }

        function deleteMeituanAddress(idx) {
            if (confirm('确定删除该地址？')) {
                meituanAddresses.splice(idx, 1);
                saveMeituanAddresses();
                renderMeituanAddresses();
            }
        }

        // 我的入口
        document.getElementById('meituanProfileEntry')?.addEventListener('click', () => {
            document.getElementById('meituanProfilePage').classList.add('open');
        });

        document.getElementById('meituanProfileBack')?.addEventListener('click', () => {
            document.getElementById('meituanProfilePage').classList.remove('open');
        });

        // 我的地址
        document.getElementById('meituanProfileAddress')?.addEventListener('click', () => {
            openMeituanAddressPage();
        });

        // 地址管理页返回
        document.getElementById('meituanAddressBack')?.addEventListener('click', () => {
            document.getElementById('meituanAddressPage').classList.remove('open');
        });

        // 新增地址
        document.getElementById('meituanAddAddressBtn')?.addEventListener('click', () => {
            editingAddressIndex = -1;
            document.getElementById('meituanAddressEditTitle').textContent = '添加地址';
            document.getElementById('meituanAddressName').value = '';
            document.getElementById('meituanAddressPhone').value = '';
            document.getElementById('meituanAddressDetail').value = '';
            document.getElementById('meituanAddressDefault').checked = false;
            document.getElementById('meituanAddressEditPage').classList.add('open');
        });

        // 地址编辑页返回
        document.getElementById('meituanAddressEditBack')?.addEventListener('click', () => {
            document.getElementById('meituanAddressEditPage').classList.remove('open');
        });

        // 保存地址
        document.getElementById('meituanAddressSave')?.addEventListener('click', () => {
            const name = document.getElementById('meituanAddressName').value.trim();
            const phone = document.getElementById('meituanAddressPhone').value.trim();
            const detail = document.getElementById('meituanAddressDetail').value.trim();
            const isDefault = document.getElementById('meituanAddressDefault').checked;

            if (!name || !phone || !detail) {
                alert('请填写完整信息');
                return;
            }

            const addr = { name, phone, detail, isDefault };

            if (isDefault) {
                meituanAddresses.forEach(a => a.isDefault = false);
            }

            if (editingAddressIndex >= 0) {
                meituanAddresses[editingAddressIndex] = addr;
            } else {
                meituanAddresses.push(addr);
            }

            saveMeituanAddresses();
            document.getElementById('meituanAddressEditPage').classList.remove('open');
            renderMeituanAddresses();
        });

        // 订单页地址选择
        document.getElementById('meituanAddressSection')?.addEventListener('click', () => {
            openMeituanAddressPage();
        });

        // ========== 浏览器功能 ==========
        const browserTrendingTopics = [
            '今日热点新闻', 'AI人工智能最新进展', '天气预报', '科技数码新品',
            '美食推荐', '旅游攻略', '电影排行榜', '音乐热门榜单'
        ];

        // 渲染热门搜索
        function renderBrowserTrending() {
            const list = document.getElementById('browserTrendingList');
            list.innerHTML = browserTrendingTopics.map((topic, i) => `
                <div class="browser-trending-item" onclick="browserSearch('${topic}')">
                    <div class="browser-trending-rank ${i < 3 ? 'hot' : ''}">${i + 1}</div>
                    <div class="browser-trending-text">${topic}</div>
                </div>
            `).join('');
        }

        // 浏览器搜索
        async function browserSearch(query) {
            if (!query || !query.trim()) return;
            query = query.trim();

            // 更新搜索框
            document.getElementById('browserSearchInput').value = query;

            // 切换到结果页
            document.getElementById('browserHome').style.display = 'none';
            document.getElementById('browserDetail').style.display = 'none';
            document.getElementById('browserResults').style.display = 'block';
            document.getElementById('browserResultsQuery').textContent = query;
            document.getElementById('browserResultsCount').textContent = '';
            document.getElementById('browserResultsList').innerHTML = '';
            document.getElementById('browserLoading').style.display = 'block';

            try {
                // 获取API设置
                const { url: apiUrl, key: apiKey, model: apiModel } = getApiConfig();

                if (!apiUrl || !apiKey || !apiModel) {
                    // 没有API配置
                    document.getElementById('browserLoading').style.display = 'none';
                    document.getElementById('browserResultsList').innerHTML = '<div style="text-align:center;padding:60px 20px;color:#999;"><div style="font-size:48px;margin-bottom:16px;">⚠️</div><div style="font-size:16px;margin-bottom:8px;">未配置API</div><div style="font-size:13px;color:#ccc;">请先前往设置页面配置API后再使用搜索功能</div></div>';
                    document.getElementById('browserResultsCount').textContent = '';
                    return;
                }

                // 调用API生成搜索结果
                const searchPrompt = `你是一个搜索引擎。用户搜索了"${query}"，请生成6条与"${query}"高度相关的搜索结果。

严格按以下JSON数组格式返回，不要有任何其他文字：
[
  {
    "title": "结果标题",
    "url": "https://example.com/page1",
    "source": "来源网站名",
    "description": "结果摘要描述，2-3句话"
  }
]

要求：
1. 标题必须与"${query}"直接相关
2. 描述要有实际内容，不能是空泛的话
3. 来源网站要真实合理
4. URL要看起来真实`;

                const resp = await fetch(apiUrl + '/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + apiKey
                    },
                    body: JSON.stringify({
                        model: apiModel,
                        messages: [
                            { role: 'system', content: '你是一个搜索引擎结果生成器，只返回JSON格式的搜索结果，不要有任何其他文字说明。' },
                            { role: 'user', content: searchPrompt }
                        ],
                        temperature: 0.7,
                        max_tokens: 2000
                    })
                });

                if (!resp.ok) throw new Error('API请求失败');

                const data = await resp.json();
                let content = data.choices[0].message.content.trim();

                // 提取JSON
                const jsonMatch = content.match(/\[[\s\S]*\]/);
                if (jsonMatch) {
                    const results = JSON.parse(jsonMatch[0]);
                    document.getElementById('browserLoading').style.display = 'none';
                    document.getElementById('browserResultsCount').textContent = `约 ${results.length} 条结果`;
                    renderBrowserResults(results);
                } else {
                    throw new Error('无法解析搜索结果');
                }
            } catch (e) {
                document.getElementById('browserLoading').style.display = 'none';
                document.getElementById('browserResultsList').innerHTML = '<div style="text-align:center;padding:60px 20px;color:#999;"><div style="font-size:48px;margin-bottom:16px;">❌</div><div style="font-size:16px;margin-bottom:8px;">搜索失败</div><div style="font-size:13px;color:#ccc;">' + e.message + '</div></div>';
            }
        }

        // 渲染搜索结果
        function renderBrowserResults(results) {
            const list = document.getElementById('browserResultsList');
            list.innerHTML = results.map((r, i) => `
                <div class="browser-result-item" onclick="openBrowserDetail(${i})">
                    <div class="browser-result-source">
                        <div class="browser-result-source-icon">${r.source ? r.source.charAt(0) : 'W'}</div>
                        <span class="browser-result-source-name">${r.source || '网页'}</span>
                        <span class="browser-result-source-url">${r.url || ''}</span>
                    </div>
                    <div class="browser-result-title">${r.title}</div>
                    <div class="browser-result-desc">${r.description}</div>
                </div>
            `).join('');
            // 保存结果供详情页使用
            window._browserResults = results;
        }

        // 模拟搜索结果（无API时）
        function renderBrowserMockResults(query) {
            const sources = ['百度百科', '知乎', 'CSDN', '简书', '新浪', '腾讯新闻', '搜狐', '网易'];
            const results = [];
            for (let i = 0; i < 6; i++) {
                const source = sources[i % sources.length];
                results.push({
                    title: `${query} - ${['详解', '全面解析', '最新资讯', '入门指南', '深度解读', '实用教程'][i]}`,
                    url: `https://www.${source.toLowerCase()}.com/article/${Date.now()}`,
                    source: source,
                    description: `关于"${query}"的${['详细介绍和深入分析', '最新动态和相关资讯汇总', '基础知识和入门指南', '专业解读和行业分析', '实用技巧和经验分享', '全面总结和未来展望'][i]}，帮助您快速了解相关内容。`
                });
            }
            document.getElementById('browserResultsCount').textContent = `约 ${results.length} 条结果`;
            renderBrowserResults(results);
        }

        // 打开详情页
        function openBrowserDetail(index) {
            const results = window._browserResults;
            if (!results || !results[index]) return;
            const r = results[index];

            document.getElementById('browserResults').style.display = 'none';
            document.getElementById('browserDetail').style.display = 'block';
            document.getElementById('browserSearchInput').value = r.title;

            document.getElementById('browserDetailContent').innerHTML = `
                <div class="browser-detail-title">${r.title}</div>
                <div class="browser-detail-meta">${r.source} · ${new Date().toLocaleDateString('zh-CN')}</div>
                <div class="browser-detail-body">
                    <p>${r.description}</p>
                    <p>这是关于"${r.title.replace(/ - .*/, '')}"的详细内容页面。在实际使用中，这里会显示完整的网页内容。</p>
                    <p>您可以通过搜索框输入新的关键词来搜索更多相关内容。</p>
                </div>
            `;
        }

        // 浏览器事件绑定
        document.getElementById('browserBack')?.addEventListener('click', () => {
            const detail = document.getElementById('browserDetail');
            const results = document.getElementById('browserResults');
            const home = document.getElementById('browserHome');

            if (detail.style.display !== 'none') {
                // 从详情返回结果
                detail.style.display = 'none';
                results.style.display = 'block';
            } else if (results.style.display !== 'none') {
                // 从结果返回首页
                results.style.display = 'none';
                home.style.display = 'block';
                document.getElementById('browserSearchInput').value = '';
            } else {
                // 退出浏览器
                document.getElementById('browserPage').classList.remove('open');
            }
        });

        // 搜索按钮
        document.getElementById('browserSearchBtn')?.addEventListener('click', () => {
            browserSearch(document.getElementById('browserSearchInput').value);
        });

        document.getElementById('browserSearchInput')?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') browserSearch(e.target.value);
        });

        // 首页搜索
        document.getElementById('browserHomeSearchBtn')?.addEventListener('click', () => {
            browserSearch(document.getElementById('browserHomeSearchInput').value);
        });

        document.getElementById('browserHomeSearchInput')?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') browserSearch(e.target.value);
        });

        // 快捷链接
        document.querySelectorAll('.browser-quick-item').forEach(item => {
            item.addEventListener('click', () => {
                browserSearch(item.dataset.url);
            });
        });

        // 初始化浏览器
        renderBrowserTrending();

        // ========== 微博功能 ==========
        // 微博用户数据
        let weiboUser = JSON.parse(localStorage.getItem('weiboUser')) || {
            name: '微博用户',
            avatar: '👤',
            followers: 0,
            following: 0,
            bio: '这个人很懒，什么都没有写~'
        };
        let weiboPosts = JSON.parse(localStorage.getItem('weiboPosts')) || [];

        // 保存微博数据
        function saveWeiboData() {
            localStorage.setItem('weiboUser', JSON.stringify(weiboUser));
            localStorage.setItem('weiboPosts', JSON.stringify(weiboPosts));
        }

        // 渲染微博列表
        function renderWeibo() {
            const list = document.getElementById('weiboFeedList');
            if (weiboPosts.length === 0) {
                list.innerHTML = '<div style="text-align:center;padding:60px 20px;color:#999;"><div style="font-size:48px;margin-bottom:16px;">📭</div><div style="font-size:16px;margin-bottom:8px;">还没有微博</div><div style="font-size:13px;color:#ccc;">点击右上角 + 发布第一条微博</div></div>';
                return;
            }
            
            // 按时间倒序
            const sortedPosts = [...weiboPosts].reverse();
            
            list.innerHTML = sortedPosts.map(post => {
                const date = new Date(post.time);
                const timeStr = `${date.getMonth() + 1}月${date.getDate()}日 ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
                const isEmoji = post.avatar && post.avatar.length <= 2;
                return `
                    <div class="weibo-post">
                        <div class="weibo-post-header">
                            <div class="weibo-post-avatar" style="${isEmoji ? '' : 'background:none;'}">${isEmoji ? post.avatar : `<img src="${post.avatar}">`}</div>
                            <div class="weibo-post-info">
                                <div class="weibo-post-name">${post.name}</div>
                                <div class="weibo-post-time">${timeStr}</div>
                            </div>
                        </div>
                        <div class="weibo-post-content">${escapeHtml(post.content)}</div>
                        <div class="weibo-post-actions">
                            <div class="weibo-post-action">📤 转发 ${post.reposts || 0}</div>
                            <div class="weibo-post-action">💬 评论 ${post.comments || 0}</div>
                            <div class="weibo-post-action">❤️ 赞 ${post.likes || 0}</div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        // 渲染我的主页
        function renderWeiboProfile() {
            const isEmoji = weiboUser.avatar && weiboUser.avatar.length <= 2;
            document.getElementById('weiboProfileAvatar').innerHTML = isEmoji ? weiboUser.avatar : `<img src="${weiboUser.avatar}">`;
            document.getElementById('weiboProfileAvatar').style.background = isEmoji ? '#f0f0f0' : 'none';
            document.getElementById('weiboProfileName').textContent = weiboUser.name;
            document.getElementById('weiboFollowersCount').textContent = formatNumber(weiboUser.followers);
            document.getElementById('weiboFollowingCount').textContent = formatNumber(weiboUser.following);
            document.getElementById('weiboPostsCount').textContent = weiboPosts.length;
            document.getElementById('weiboProfileBio').textContent = weiboUser.bio;

            // 渲染我的微博列表
            const myPosts = weiboPosts.filter(p => p.name === weiboUser.name);
            const list = document.getElementById('weiboProfilePostsList');
            if (myPosts.length === 0) {
                list.innerHTML = '<div style="text-align:center;padding:40px;color:#999;font-size:14px;">还没有发布过微博</div>';
            } else {
                list.innerHTML = myPosts.reverse().map(post => {
                    const date = new Date(post.time);
                    const timeStr = `${date.getMonth() + 1}月${date.getDate()}日`;
                    return `
                        <div class="weibo-post" style="margin-bottom:8px;">
                            <div class="weibo-post-content">${escapeHtml(post.content)}</div>
                            <div class="weibo-post-time" style="font-size:12px;color:#999;margin-top:8px;">${timeStr}</div>
                        </div>
                    `;
                }).join('');
            }
        }

        // 格式化数字
        function formatNumber(num) {
            if (num >= 10000) {
                return (num / 10000).toFixed(1) + '万';
            }
            return num.toString();
        }

        // 微博事件绑定
        document.getElementById('weiboBack')?.addEventListener('click', () => {
            document.getElementById('weiboPage').classList.remove('open');
        });

        // 发帖按钮
        document.getElementById('weiboPostBtn')?.addEventListener('click', () => {
            document.getElementById('weiboPostModal').classList.add('show');
            document.getElementById('weiboPostContent').focus();
        });

        // 取消发帖
        document.getElementById('weiboPostCancel')?.addEventListener('click', () => {
            document.getElementById('weiboPostModal').classList.remove('show');
            document.getElementById('weiboPostContent').value = '';
        });

        // 发送微博
        document.getElementById('weiboPostSend')?.addEventListener('click', () => {
            const content = document.getElementById('weiboPostContent').value.trim();
            if (!content) {
                alert('请输入内容');
                return;
            }
            
            const post = {
                name: weiboUser.name,
                avatar: weiboUser.avatar,
                content: content,
                time: new Date().toISOString(),
                likes: 0,
                comments: 0,
                reposts: 0
            };
            
            weiboPosts.push(post);
            saveWeiboData();
            
            document.getElementById('weiboPostModal').classList.remove('show');
            document.getElementById('weiboPostContent').value = '';
            renderWeibo();
        });

        // 我的主页入口
        document.getElementById('weiboProfileEntry')?.addEventListener('click', () => {
            renderWeiboProfile();
            document.getElementById('weiboProfilePage').classList.add('open');
        });

        document.getElementById('weiboProfileBack')?.addEventListener('click', () => {
            document.getElementById('weiboProfilePage').classList.remove('open');
        });

        // 编辑资料
        document.getElementById('weiboProfileEdit')?.addEventListener('click', () => {
            document.getElementById('weiboEditName').value = weiboUser.name;
            document.getElementById('weiboEditAvatar').value = weiboUser.avatar;
            document.getElementById('weiboEditFollowers').value = weiboUser.followers;
            document.getElementById('weiboEditFollowing').value = weiboUser.following;
            document.getElementById('weiboEditBio').value = weiboUser.bio;
            document.getElementById('weiboEditModal').classList.add('show');
        });

        // 取消编辑
        document.getElementById('weiboEditCancel')?.addEventListener('click', () => {
            document.getElementById('weiboEditModal').classList.remove('show');
        });

        // 保存资料
        document.getElementById('weiboEditSave')?.addEventListener('click', () => {
            weiboUser.name = document.getElementById('weiboEditName').value.trim() || '微博用户';
            weiboUser.avatar = document.getElementById('weiboEditAvatar').value.trim() || '👤';
            weiboUser.followers = parseInt(document.getElementById('weiboEditFollowers').value) || 0;
            weiboUser.following = parseInt(document.getElementById('weiboEditFollowing').value) || 0;
            weiboUser.bio = document.getElementById('weiboEditBio').value.trim() || '这个人很懒，什么都没有写~';
            
            saveWeiboData();
            renderWeiboProfile();
            renderWeibo();
            document.getElementById('weiboEditModal').classList.remove('show');
        });

        // Tab切换
        document.querySelectorAll('.weibo-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.weibo-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            });
        });

        // 底部导航切换
        const weiboPages = { home: 'weiboHomePage', video: 'weiboVideoPage', message: 'weiboMessagePage' };
        document.querySelectorAll('.weibo-bottom-item').forEach(item => {
            item.addEventListener('click', () => {
                const page = item.dataset.page;
                document.querySelectorAll('.weibo-bottom-item').forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                
                // 隐藏所有页面
                Object.values(weiboPages).forEach(id => {
                    document.getElementById(id).style.display = 'none';
                });
                
                if (page === 'profile') {
                    renderWeiboProfile();
                    document.getElementById('weiboProfilePage').classList.add('open');
                    return;
                }
                
                // 显示对应页面
                const targetId = weiboPages[page];
                if (targetId) {
                    document.getElementById(targetId).style.display = 'block';
                }
                
                // 渲染对应内容
                if (page === 'video') renderWeiboVideos();
                if (page === 'message') renderWeiboMessages();
            });
        });

        // ========== 视频功能（文字内容呈现） ==========
        const weiboVideoData = [
            { id: 1, author: '美食探店王', avatar: '👨‍🍳', content: '这家隐藏在小巷里的面馆，一碗面只要8块钱，味道绝了！汤底是用牛骨熬了8个小时的，面条是手工拉的，配上自制的辣椒油，简直绝了。老板说每天只卖100碗，去晚了就没了。#美食 #探店', time: '2小时前', likes: 12800, comments: [], shares: 234, followed: false, liked: false },
            { id: 2, author: '旅行日记', avatar: '✈️', content: '日落时分的海边，真的太美了，这辈子一定要来看一次！推荐大家去三亚的亚龙湾，那里水质清澈，沙滩细腻，最重要的是人不多。记得带好防晒霜，紫外线很强。#旅行 #日落', time: '3小时前', likes: 35600, comments: [], shares: 890, followed: false, liked: false },
            { id: 3, author: '萌宠日常', avatar: '🐱', content: '我家猫今天又把花瓶打碎了，但是看到这个表情我实在生不起气来...它就那样歪着头看着我，眼睛大大的，好像在说"不是我干的"。养猫的快乐和痛苦并存啊！#萌宠 #猫咪日常', time: '5小时前', likes: 89000, comments: [], shares: 3200, followed: false, liked: false },
            { id: 4, author: '科技前沿', avatar: '🤖', content: '最新发布的AI模型可以实时生成视频了，未来已来！这次更新带来了更流畅的画面生成、更准确的动作模拟，以及更短的生成时间。从文字到视频只需要几秒钟，这在一年前是不可想象的。#科技 #AI', time: '6小时前', likes: 45000, comments: [], shares: 1500, followed: false, liked: false },
            { id: 5, author: '健身达人', avatar: '💪', content: '坚持健身100天对比，变化真的太大了！附训练计划：周一胸+三头，周二背+二头，周三休息，周四肩+核心，周五腿，周六有氧，周日休息。最重要的是坚持，不要三天打鱼两天晒网！#健身 #自律', time: '8小时前', likes: 67000, comments: [], shares: 2800, followed: false, liked: false }
        ];

        function renderWeiboVideos() {
            const container = document.getElementById('weiboVideoContainer');
            container.innerHTML = weiboVideoData.map((post, idx) => {
                // 处理话题标签
                const contentHtml = post.content.replace(/#([^#]+)#/g, '<span class="weibo-text-post-topic">#$1#</span>');
                // 渲染评论
                const commentsHtml = post.comments.map(c => `
                    <div class="weibo-text-post-comment-item">
                        <span class="weibo-text-post-comment-name">${c.name}：</span>
                        <span class="weibo-text-post-comment-text">${escapeHtml(c.text)}</span>
                    </div>
                `).join('');

                return `
                    <div class="weibo-text-post" id="weiboTextPost${idx}">
                        <div class="weibo-text-post-header">
                            <div class="weibo-text-post-avatar">${post.avatar}</div>
                            <div class="weibo-text-post-info">
                                <div class="weibo-text-post-name">${post.author}</div>
                                <div class="weibo-text-post-time">${post.time}</div>
                            </div>
                            <button class="weibo-text-post-follow ${post.followed ? 'followed' : ''}" onclick="toggleTextFollow(${idx})">${post.followed ? '已关注' : '+关注'}</button>
                        </div>
                        <div class="weibo-text-post-content">${contentHtml}</div>
                        <div class="weibo-text-post-actions">
                            <div class="weibo-text-post-action ${post.liked ? 'liked' : ''}" onclick="toggleTextLike(${idx})">
                                <span>${post.liked ? '❤️' : '🤍'}</span>
                                <span id="textLikeCount${idx}">${formatNumber(post.likes)}</span>
                            </div>
                            <div class="weibo-text-post-action">
                                <span>💬</span>
                                <span id="textCommentCount${idx}">${post.comments.length}</span>
                            </div>
                            <div class="weibo-text-post-action">
                                <span>📤</span>
                                <span>${formatNumber(post.shares)}</span>
                            </div>
                        </div>
                        ${post.comments.length > 0 ? `<div class="weibo-text-post-comments">${commentsHtml}</div>` : ''}
                        <div class="weibo-text-post-comment-input">
                            <input type="text" id="textCommentInput${idx}" placeholder="写评论..." onkeydown="if(event.key==='Enter')sendTextComment(${idx})">
                            <button onclick="sendTextComment(${idx})">发送</button>
                        </div>
                    </div>
                `;
            }).join('');
        }

        function toggleTextLike(idx) {
            const post = weiboVideoData[idx];
            post.liked = !post.liked;
            post.likes += post.liked ? 1 : -1;
            renderWeiboVideos();
        }

        function toggleTextFollow(idx) {
            const post = weiboVideoData[idx];
            post.followed = !post.followed;
            renderWeiboVideos();
        }

        function sendTextComment(idx) {
            const input = document.getElementById('textCommentInput' + idx);
            const text = input.value.trim();
            if (!text) return;
            weiboVideoData[idx].comments.push({
                name: weiboUser.name,
                avatar: weiboUser.avatar,
                text: text
            });
            input.value = '';
            renderWeiboVideos();
        }

        // ========== 消息功能 ==========
        const weiboMessageData = [
            { name: '微博官方', avatar: '🔔', text: '您的微博已通过审核，快来发布第一条动态吧！', time: '刚刚', badge: 2 },
            { name: '美食探店王', avatar: '👨‍🍳', text: '回复了你的评论：谢谢喜欢！', time: '5分钟前', badge: 1 },
            { name: '旅行日记', avatar: '✈️', text: '赞了你的微博', time: '1小时前', badge: 0 },
            { name: '萌宠日常', avatar: '🐱', text: '关注了你', time: '3小时前', badge: 0 },
            { name: '系统通知', avatar: '⚙️', text: '您的账号安全等级已提升', time: '昨天', badge: 0 },
            { name: '科技前沿', avatar: '🤖', text: '转发了一条微博', time: '昨天', badge: 0 }
        ];

        function renderWeiboMessages() {
            const list = document.getElementById('weiboMessageList');
            list.innerHTML = weiboMessageData.map(msg => `
                <div class="weibo-message-item">
                    <div class="weibo-message-avatar">${msg.avatar}</div>
                    <div class="weibo-message-info">
                        <div class="weibo-message-name">${msg.name}</div>
                        <div class="weibo-message-text">${msg.text}</div>
                    </div>
                    <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;">
                        <div class="weibo-message-time">${msg.time}</div>
                        ${msg.badge > 0 ? `<div class="weibo-message-badge">${msg.badge}</div>` : ''}
                    </div>
                </div>
            `).join('');
        }

        // ========== 淘宝功能 ==========
        const taobaoCategories = [
            { icon: '👗', name: '女装', bg: '#FFF0F0' }, { icon: '👔', name: '男装', bg: '#F0F0FF' },
            { icon: '📱', name: '手机', bg: '#F0FFF0' }, { icon: '💻', name: '电脑', bg: '#FFFFF0' },
            { icon: '🏠', name: '家居', bg: '#F0FFFF' }, { icon: '👟', name: '运动', bg: '#FFF5F0' },
            { icon: '💄', name: '美妆', bg: '#FFF0F5' }, { icon: '🍎', name: '生鲜', bg: '#F0FFF5' },
            { icon: '📚', name: '图书', bg: '#F5F0FF' }, { icon: '🎮', name: '游戏', bg: '#F0F5FF' }
        ];
        const taobaoProducts = [
            { id:1, name:'2024新款轻薄羽绒服女短款白鸭绒保暖外套', price:199, sold:'2.3万', icon:'🧥', tag:'天猫', shop:'优衣库官方旗舰店' },
            { id:2, name:'Apple iPhone 15 Pro Max 256GB 原色钛金属', price:8999, sold:'5.6万', icon:'📱', tag:'正品', shop:'Apple官方旗舰店' },
            { id:3, name:'Nike Air Force 1 空军一号板鞋男鞋经典低帮', price:599, sold:'12万', icon:'👟', tag:'爆款', shop:'Nike官方旗舰店' },
            { id:4, name:'小米14 Ultra 徕卡光学 骁龙8Gen3 12+256GB', price:5499, sold:'8.9万', icon:'📱', tag:'新品', shop:'小米官方旗舰店' },
            { id:5, name:'兰蔻小黑瓶精华液面部肌底液100ml 保湿修护', price:760, sold:'6.7万', icon:'💧', tag:'大牌', shop:'兰蔻官方旗舰店' },
            { id:6, name:'三只松鼠坚果大礼包零食组合装送女友', price:89, sold:'45万', icon:'🥜', tag:'热销', shop:'三只松鼠旗舰店' },
            { id:7, name:'海尔冰箱双开门对开门大容量家用变频节能', price:2699, sold:'3.2万', icon:'🧊', tag:'大促', shop:'海尔官方旗舰店' },
            { id:8, name:'戴森V15吸尘器家用手持大吸力除螨无线', price:3990, sold:'1.8万', icon:'🧹', tag:'旗舰', shop:'戴森官方旗舰店' },
            { id:9, name:'索尼WH-1000XM5头戴式降噪蓝牙耳机', price:2299, sold:'4.1万', icon:'🎧', tag:'好评', shop:'索尼官方旗舰店' },
            { id:10, name:'SK-II神仙水精华液230ml 护肤品套装', price:1190, sold:'7.3万', icon:'✨', tag:'经典', shop:'SK-II官方旗舰店' }
        ];
        let taobaoCart = JSON.parse(localStorage.getItem('taobaoCart')) || [];
        let currentTaobaoProduct = null;
        let taobaoBannerIdx = 0;
        const taobaoBanners = [
            { text: '双11狂欢节', bg: 'linear-gradient(135deg, #FF5000, #FF0050)' },
            { text: '限时秒杀', bg: 'linear-gradient(135deg, #FF2D55, #5856D6)' },
            { text: '百亿补贴', bg: 'linear-gradient(135deg, #34C759, #007AFF)' }
        ];
        const taobaoGuangData = [
            { title: '这个穿搭也太绝了吧！秋季必入的5件单品', author: '时尚达人小美', avatar: '👩', likes: '2.3万', comments: '856', icon: '👗', bg: '#FFF0F0' },
            { title: '开箱测评！小米14 Ultra一个月使用体验', author: '数码测评君', avatar: '🤓', likes: '1.8万', comments: '1203', icon: '📱', bg: '#F0F0FF' },
            { title: '租房改造｜500元打造ins风小窝', author: '家居改造王', avatar: '🏠', likes: '5.6万', comments: '3400', icon: '🏡', bg: '#FFFFF0' },
            { title: '减脂期也能吃的美食合集', author: '美食博主小厨', avatar: '👨‍🍳', likes: '3.4万', comments: '2100', icon: '🥗', bg: '#F0FFF0' }
        ];

        function renderTaobao() {
            // 轮播图
            const slides = document.getElementById('taobaoBannerSlides');
            const dots = document.getElementById('taobaoBannerDots');
            slides.innerHTML = taobaoBanners.map(b => `<div class="taobao-banner-slide" style="background:${b.bg}">${b.text}</div>`).join('');
            dots.innerHTML = taobaoBanners.map((_, i) => `<div class="taobao-banner-dot ${i===0?'active':''}"></div>`).join('');
            slides.style.transform = 'translateX(0)';
            clearInterval(window._taobaoBannerTimer);
            window._taobaoBannerTimer = setInterval(() => {
                taobaoBannerIdx = (taobaoBannerIdx + 1) % taobaoBanners.length;
                slides.style.transform = `translateX(-${taobaoBannerIdx * 100}%)`;
                dots.querySelectorAll('.taobao-banner-dot').forEach((d, i) => d.classList.toggle('active', i === taobaoBannerIdx));
            }, 3000);

            // 分类
            document.getElementById('taobaoCategories').innerHTML = taobaoCategories.map(c => `
                <div class="taobao-cat-item"><div class="taobao-cat-icon" style="background:${c.bg}">${c.icon}</div><span>${c.name}</span></div>
            `).join('');

            // 商品列表
            renderTaobaoProducts(taobaoProducts);
        }

        function renderTaobaoProducts(products) {
            document.getElementById('taobaoProductGrid').innerHTML = products.map(p => `
                <div class="taobao-product-item" onclick="openTaobaoDetail(${p.id})">
                    <div class="taobao-product-img">${p.icon}</div>
                    <div class="taobao-product-info">
                        <div class="taobao-product-name"><span class="taobao-product-tag">${p.tag}</span>${p.name}</div>
                        <div class="taobao-product-price"><span class="taobao-product-price-num">${p.price}</span><span class="taobao-product-sold">${p.sold}+人付款</span></div>
                    </div>
                </div>
            `).join('');
        }

        function openTaobaoDetail(id) {
            currentTaobaoProduct = taobaoProducts.find(p => p.id === id);
            if (!currentTaobaoProduct) return;
            document.getElementById('taobaoDetailContent').innerHTML = `
                <div style="width:100%;aspect-ratio:1;background:#f0f0f0;display:flex;align-items:center;justify-content:center;font-size:80px;">${currentTaobaoProduct.icon}</div>
                <div style="padding:12px 16px;background:#fff;">
                    <div style="font-size:12px;color:#FF5000;margin-bottom:6px;"><span class="taobao-product-tag">${currentTaobaoProduct.tag}</span> 30天最低价</div>
                    <div style="font-size:24px;color:#FF5000;font-weight:700;margin-bottom:8px;">¥${currentTaobaoProduct.price}</div>
                    <div style="font-size:15px;color:#333;line-height:1.6;margin-bottom:12px;">${currentTaobaoProduct.name}</div>
                    <div style="font-size:12px;color:#999;">${currentTaobaoProduct.sold}+人付款 · 发货速度很快</div>
                </div>
                <div style="padding:12px 16px;background:#fff;margin-top:8px;">
                    <div style="font-size:14px;font-weight:600;margin-bottom:10px;">店铺信息</div>
                    <div style="display:flex;align-items:center;gap:10px;">
                        <div style="width:40px;height:40px;border-radius:50%;background:#f0f0f0;display:flex;align-items:center;justify-content:center;font-size:20px;">🏪</div>
                        <div><div style="font-size:14px;font-weight:500;">${currentTaobaoProduct.shop}</div><div style="font-size:12px;color:#999;">粉丝 100万+ · 全部商品 2000+</div></div>
                    </div>
                </div>
                <div style="padding:12px 16px;background:#fff;margin-top:8px;">
                    <div style="font-size:14px;font-weight:600;margin-bottom:10px;">宝贝评价 (999+)</div>
                    <div style="font-size:13px;color:#666;line-height:1.6;">质量很好，物流也快，包装精美，非常满意的一次购物体验！推荐给大家~</div>
                </div>
            `;
            document.getElementById('taobaoPage').classList.remove('open');
            document.getElementById('taobaoDetailPage').classList.add('open');
        }

        function renderTaobaoCart() {
            const list = document.getElementById('taobaoCartList');
            if (taobaoCart.length === 0) {
                list.innerHTML = '<div style="text-align:center;padding:60px;color:#999;"><div style="font-size:48px;margin-bottom:12px;">🛒</div><div>购物车是空的</div></div>';
            } else {
                list.innerHTML = taobaoCart.map((item, idx) => `
                    <div class="taobao-cart-item">
                        <input type="checkbox" checked onchange="updateTaobaoCartTotal()">
                        <div class="taobao-cart-item-img">${item.icon}</div>
                        <div class="taobao-cart-item-info">
                            <div class="taobao-cart-item-name">${item.name}</div>
                            <div class="taobao-cart-item-price">¥${item.price}</div>
                            <div class="taobao-cart-item-qty">
                                <button onclick="changeTaobaoQty(${idx},-1)">-</button>
                                <span>${item.qty}</span>
                                <button onclick="changeTaobaoQty(${idx},1)">+</button>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
            document.getElementById('taobaoCartCount2').textContent = taobaoCart.reduce((s,i) => s+i.qty, 0);
            updateTaobaoCartTotal();
        }

        function changeTaobaoQty(idx, delta) {
            taobaoCart[idx].qty += delta;
            if (taobaoCart[idx].qty <= 0) taobaoCart.splice(idx, 1);
            localStorage.setItem('taobaoCart', JSON.stringify(taobaoCart));
            renderTaobaoCart();
        }

        function updateTaobaoCartTotal() {
            const checks = document.querySelectorAll('.taobao-cart-item input[type="checkbox"]');
            let total = 0, count = 0;
            taobaoCart.forEach((item, idx) => {
                if (checks[idx] && checks[idx].checked) { total += item.price * item.qty; count += item.qty; }
            });
            document.getElementById('taobaoCartTotal').textContent = total;
            document.getElementById('taobaoCartBuy').textContent = `结算(${count})`;
        }

        function renderTaobaoGuang() {
            document.getElementById('taobaoGuangList').innerHTML = taobaoGuangData.map(g => `
                <div class="taobao-guang-item">
                    <div class="taobao-guang-img" style="background:${g.bg}">${g.icon}</div>
                    <div class="taobao-guang-info">
                        <div class="taobao-guang-title">${g.title}</div>
                        <div class="taobao-guang-author">
                            <div class="taobao-guang-avatar">${g.avatar}</div>
                            <span>${g.author}</span>
                            <div class="taobao-guang-stats"><span>❤️ ${g.likes}</span><span>💬 ${g.comments}</span></div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function renderTaobaoMessages() {
            document.getElementById('taobaoMsgList').innerHTML = [
                { name:'物流通知', avatar:'📦', text:'您的包裹已发出，预计明天送达', badge:2 },
                { name:'交易消息', avatar:'💰', text:'您购买的商品已签收，请评价', badge:1 },
                { name:'客服消息', avatar:'🎧', text:'亲，有什么可以帮您的吗？', badge:0 },
                { name:'活动通知', avatar:'🎉', text:'双11预售已开始，付定金立减50', badge:0 },
                { name:'系统通知', avatar:'⚙️', text:'您的账号已通过实名认证', badge:0 }
            ].map(m => `
                <div class="taobao-msg-item">
                    <div class="taobao-msg-avatar">${m.avatar}</div>
                    <div class="taobao-msg-info"><div class="taobao-msg-name">${m.name}</div><div class="taobao-msg-text">${m.text}</div></div>
                    ${m.badge > 0 ? `<div class="taobao-msg-badge">${m.badge}</div>` : ''}
                </div>
            `).join('');
        }

        // 淘宝返回按钮
        document.getElementById('taobaoBack')?.addEventListener('click', () => {
            document.getElementById('taobaoPage').classList.remove('open');
        });

        // 淘宝事件
        document.getElementById('taobaoDetailBack')?.addEventListener('click', () => {
            document.getElementById('taobaoDetailPage').classList.remove('open');
            document.getElementById('taobaoPage').classList.add('open');
        });

        document.getElementById('taobaoAddCart')?.addEventListener('click', () => {
            if (!currentTaobaoProduct) return;
            const exist = taobaoCart.find(i => i.id === currentTaobaoProduct.id);
            if (exist) { exist.qty++; } else { taobaoCart.push({ ...currentTaobaoProduct, qty: 1 }); }
            localStorage.setItem('taobaoCart', JSON.stringify(taobaoCart));
            alert('已加入购物车');
        });

        document.getElementById('taobaoBuyNow')?.addEventListener('click', () => {
            if (!currentTaobaoProduct) return;
            alert('下单成功！感谢购买');
        });

        document.getElementById('taobaoSearchInput')?.addEventListener('input', (e) => {
            const q = e.target.value.trim();
            if (!q) { renderTaobaoProducts(taobaoProducts); return; }
            renderTaobaoProducts(taobaoProducts.filter(p => p.name.includes(q) || p.shop.includes(q)));
        });

        document.getElementById('taobaoCartCheckAll')?.addEventListener('change', (e) => {
            document.querySelectorAll('.taobao-cart-item input[type="checkbox"]').forEach(c => c.checked = e.target.checked);
            updateTaobaoCartTotal();
        });

        // 底部导航
        const taobaoPages = { home:'taobaoHomePage', guang:'taobaoGuangPage', msg:'taobaoMsgPage', cart:'taobaoCartPage', my:'taobaoMyPage' };
        document.querySelectorAll('.taobao-bottom-item').forEach(item => {
            item.addEventListener('click', () => {
                const page = item.dataset.page;
                document.querySelectorAll('.taobao-bottom-item').forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                Object.values(taobaoPages).forEach(id => document.getElementById(id).style.display = 'none');
                const target = taobaoPages[page];
                if (target) document.getElementById(target).style.display = 'block';
                // 控制购物车结算栏显示
                document.getElementById('taobaoCartBottom').style.display = page === 'cart' ? 'flex' : 'none';
                if (page === 'cart') renderTaobaoCart();
                if (page === 'guang') renderTaobaoGuang();
                if (page === 'msg') renderTaobaoMessages();
            });
        });

        // ========== 视频通话功能 ==========
        // 视频通话挂断
        document.getElementById('videoCallHangupBtn').addEventListener('click', () => {
            const videoCallPage = document.getElementById('wechatVideoCallPage');
            videoCallPage.classList.remove('active');
            
            // 添加通话结束记录
            if (videoCallContactName && isVideoCallConnected) {
                if (!chatMessages[videoCallContactName]) chatMessages[videoCallContactName] = [];
                chatMessages[videoCallContactName].push({
                    sender: 'system',
                    type: 'system',
                    content: '视频通话已结束',
                    time: new Date().toISOString()
                });
                localStorage.setItem('wechatChatMessages', JSON.stringify(chatMessages));
                
                // 更新聊天列表
                const chat = chatList.find(c => c.contactName === videoCallContactName);
                if (chat) {
                    chat.lastMessage = '[视频通话已结束]';
                    const now = new Date();
                    chat.time = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
                    localStorage.setItem('wechatChatList', JSON.stringify(chatList));
                    renderChatList();
                }
            }
            
            // 重置状态
            videoCallContactName = '';
            isVideoCallConnected = false;
            const typingEl = document.getElementById('videoCallTyping');
            if (typingEl) typingEl.style.display = 'none';
        });

        // 视频通话麦克风切换
        let videoCallMicOn = true;
        document.getElementById('videoCallMicBtn').addEventListener('click', () => {
            videoCallMicOn = !videoCallMicOn;
            const btn = document.getElementById('videoCallMicBtn');
            const span = btn.querySelector('span');
            const icon = btn.querySelector('.wechat-videocall-btn-icon');
            if (videoCallMicOn) {
                span.textContent = '麦克风开启';
                icon.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" stroke="#333" stroke-width="1.5" fill="none"/><path d="M19 11v2a7 7 0 01-14 0v-2" stroke="#333" stroke-width="1.5" fill="none"/><path d="M12 19v4M8 23h8" stroke="#333" stroke-width="1.5"/></svg>';
            } else {
                span.textContent = '麦克风关闭';
                icon.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" stroke="#333" stroke-width="1.5" fill="none"/><path d="M19 11v2a7 7 0 01-14 0v-2" stroke="#333" stroke-width="1.5" fill="none"/><path d="M1 1l22 22" stroke="#FF3B30" stroke-width="2"/></svg>';
            }
        });

        // 视频通话扬声器切换
        let videoCallSpeakerOn = true;
        document.getElementById('videoCallSpeakerBtn').addEventListener('click', () => {
            videoCallSpeakerOn = !videoCallSpeakerOn;
            const btn = document.getElementById('videoCallSpeakerBtn');
            const span = btn.querySelector('span');
            const icon = btn.querySelector('.wechat-videocall-btn-icon');
            if (videoCallSpeakerOn) {
                span.textContent = '扬声器开启';
                icon.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M11 5L6 9H2v6h4l5 4V5z" stroke="#333" stroke-width="1.5" fill="none"/><path d="M15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14" stroke="#333" stroke-width="1.5" fill="none"/></svg>';
            } else {
                span.textContent = '扬声器关闭';
                icon.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M11 5L6 9H2v6h4l5 4V5z" stroke="#333" stroke-width="1.5" fill="none"/><path d="M23 9l-6 6M17 9l6 6" stroke="#FF3B30" stroke-width="2"/></svg>';
            }
        });

        // 视频通话功能已简化 - 不再显示对话大框和替用户描写动作

        // 初始化
        initOfflineData();

        // 全局图片加载失败处理
        document.addEventListener('error', function(e) {
            if (e.target.tagName === 'IMG') {
                console.log('图片加载失败，已隐藏:', e.target.src);
                e.target.style.display = 'none';
                // 如果父元素有背景色，保持显示
                const parent = e.target.parentElement;
                if (parent && parent.classList.contains('app-icon-bg')) {
                    parent.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                }
            }
        }, true);

    