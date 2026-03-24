import React from 'react';
import FadeIn from '../components/FadeIn';
import {
    Brain,
    Eye,
    Activity,
    Monitor,
    Smartphone,
    BarChart3,
    Globe,
    Users,
    ShieldCheck,
    Zap,
    Layers,
    MousePointer2,
    Heart,
    Search,
    BookOpen,
    Headphones,
    CheckCircle2,
    ArrowRight,
    PiggyBank
} from 'lucide-react';

export default function UXResearchPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-100 selection:text-teal-900">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(20,184,166,0.1),transparent)] pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <FadeIn>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-[1.1] mb-8">
                            元镜视界<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                                消费者洞察与用户体验研究
                            </span>
                        </h1>
                        <p className=" text-slate-400 max-w-3xl leading-relaxed font-light mb-12">
                            点击流、调查问卷仅能呈现用户表面行为，却难以挖掘行为背后的深层动因与体验痛点
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Core Value Proposition */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeIn direction="left">
                            <h2 className="text-4xl font-bold tracking-tight mb-8">
                                打破单一主观反馈的局限
                            </h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    元镜视界依托<span className="text-teal-600 font-semibold">AI情感量化核心技术</span>，融合眼动追踪、皮肤电反应（GSR）、面部表情分析等多模态感知能力，精准捕捉用户注意力分布、认知负荷与情绪变化。
                                </p>
                                <p>
                                    用客观、可量化的生理与情绪数据，定位产品/界面可用性问题，验证设计决策有效性，打破单一依赖用户主观反馈的研究局限，为用户体验优化提供科学、精准的决策依据。
                                </p>
                            </div>
                        </FadeIn>
                        <FadeIn direction="right" className="grid grid-cols-2 gap-4">
                            {[
                                { icon: Eye, label: '眼动追踪', color: 'bg-blue-500' },
                                { icon: Activity, label: '皮肤电反应', color: 'bg-rose-500' },
                                { icon: Brain, label: '认知负荷', color: 'bg-purple-500' },
                                { icon: Heart, label: '情绪变化', color: 'bg-teal-500' },
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                                    <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center text-white mb-4`}>
                                        <item.icon size={24} />
                                    </div>
                                    <span className="font-bold text-slate-900">{item.label}</span>
                                </div>
                            ))}
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Lab Operation Mode */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">实验室运作模式</h2>
                        <p className="max-w-3xl mx-auto text-xl text-slate-500">
                            元镜用户体验研究实验室，是集研究设置、多源数据采集、智能分析于一体的全流程研究平台，以灵活的部署与集成能力，实现全场景、高精准的用户体验研究
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: ' 一体化操作平台',
                                desc: '基于PC端搭建核心操作系统，一站式完成研究方案搭建、多维度数据同步采集、智能化数据分析全流程，简化研究操作链路',
                                icon: Monitor
                            },
                            {
                                title: ' 多设备多信号联动',
                                desc: '可无缝连接各类外部硬件设备与多摄像头信号，实现眼动、生理、情绪、行为等多源数据同步采集，为研究提供丰富且全面的数据源',
                                icon: Layers
                            },
                            {
                                title: ' 多平台高效集成',
                                desc: '兼容Qualtrics等主流调查平台，同时内置自研调查功能，满足多样化调研需求，实现主观反馈与客观数据的融合分析',
                                icon: Zap
                            },
                            {
                                title: ' 全场景数据采集',
                                desc: '支持实验室现场集中采集，亦可通过互联网实现参与者自有设备的远程数据采集，打破时空限制，适配不同研究场景需求',
                                icon: Globe
                            }
                        ].map((item, i) => (
                            <FadeIn key={i} delay={i * 0.1} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:border-teal-200 transition-colors">
                                <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Functional Highlights - Updated with User Content */}
            <section className="py-10 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <FadeIn>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                                核心功能亮点
                            </h2>
                            <p className="text-xl text-slate-500 max-w-4xl mx-auto font-light leading-relaxed">
                                元镜用户体验研究实验室是覆盖全数字平台的综合性研究平台，提供多维度、高精度的工具体系，全方位评估用户体验，精准挖掘体验优化方向。
                            </p>
                        </FadeIn>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Feature 1 */}
                        <FadeIn className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-teal-200 transition-all duration-500">
                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                                <Eye size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">精准捕捉视觉注意力，优化设计布局</h3>
                            <p className="text-slate-500 leading-relaxed font-light">
                                依托专业眼动追踪技术，实时捕捉用户视觉注意力焦点、专注时长与注视轨迹，通过量化数据明确界面中吸引用户关注的核心元素，为产品/界面的设计布局、信息层级梳理、核心内容展示提供科学依据，让视觉设计更贴合用户视觉习惯。
                            </p>
                        </FadeIn>

                        {/* Feature 2 */}
                        <FadeIn delay={0.1} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-teal-200 transition-all duration-500">
                            <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                                <Heart size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">多维度情绪投入分析，挖掘深层体验感受</h3>
                            <p className="text-slate-500 leading-relaxed font-light mb-4">
                                融合面部表情分析+皮肤电反应（GSR） 双技术，从可见情绪与生理反应双维度，全面评估用户互动过程中的情绪变化：
                            </p>
                            <ul className="space-y-3 text-slate-500 text-sm font-light">
                                <li className="flex gap-2">
                                    <span className="text-teal-500 font-bold">1.</span>
                                    <span><strong>面部表情分析：</strong>精准识别快乐、惊讶、沮丧等9种以上实时情绪表达，还原用户与内容互动中的直观情绪反馈；</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-teal-500 font-bold">2.</span>
                                    <span><strong>皮肤电反应（GSR）：</strong>通过测量生理唤醒水平，量化情绪强度，捕捉用户潜意识中的情绪变化，补充面部表情分析的信息盲区，让情绪洞察更全面、更深入。</span>
                                </li>
                            </ul>
                        </FadeIn>

                        {/* Feature 3 */}
                        <FadeIn delay={0.2} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-teal-200 transition-all duration-500">
                            <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                                <Smartphone size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">全终端适配测试，保障跨设备体验一致性</h3>
                            <p className="text-slate-500 leading-relaxed font-light mb-4">
                                配备专为智能手机、平板电脑打造的移动测试台，实现移动设备与桌面设备的无缝测试：
                            </p>
                            <ul className="space-y-3 text-slate-500 text-sm font-light">
                                <li className="flex gap-2">
                                    <span className="text-teal-500 font-bold">1.</span>
                                    <span><strong>移动测试台</strong>可稳定设备，确保眼动追踪、面部表情分析等技术在移动场景下的精准数据采集；</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-teal-500 font-bold">2.</span>
                                    <span><strong>全方位评估</strong>不同屏幕尺寸、不同设备类型下的产品可用性、用户参与度与情感反应，确保跨终端用户体验的一致性与高品质。</span>
                                </li>
                            </ul>
                        </FadeIn>

                        {/* Feature 4 */}
                        <FadeIn delay={0.3} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-teal-200 transition-all duration-500">
                            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                                <BarChart3 size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">可视化成果输出，直观呈现研究洞察</h3>
                            <p className="text-slate-500 leading-relaxed font-light mb-4">
                                自动生成可直接用于演示汇报的可视化图表，通过热图、视线路径图、用户旅程图等多元形式，直观展示核心用户体验洞察：
                            </p>
                            <ul className="space-y-3 text-slate-500 text-sm font-light">
                                <li className="flex gap-2">
                                    <span className="text-teal-500 font-bold">1.</span>
                                    <span><strong>热图</strong>突出视觉关注度高低区域，视线路径图还原用户在界面上的注意力流动顺序；</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-teal-500 font-bold">2.</span>
                                    <span><strong>结合用户旅程图</strong>，完整呈现用户交互全流程的情绪变化，让利益相关者快速理解用户参与模式，精准发现设计优化机会。</span>
                                </li>
                            </ul>
                        </FadeIn>

                        {/* Feature 5 */}
                        <FadeIn delay={0.4} className="md:col-span-2 p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-teal-200 transition-all duration-500">
                            <div className="flex flex-col md:flex-row md:items-center gap-8">
                                <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                                    <Monitor size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">音视频与数据同步集成，全面还原体验过程</h3>
                                    <p className="text-slate-500 leading-relaxed font-light">
                                        同步记录用户交互行为、音视频画面与生物识别数据（眼动、生理、情绪），实现体验过程与数据反馈的一一对应，全方位还原用户真实体验场景，为深度分析体验痛点、挖掘行为动因提供完整依据。
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* All-Scenario Application */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">全场景应用方向</h2>
                        <p className="text-xl text-slate-500">元镜用户体验研究实验室可根据不同研究需求灵活定制，适配多场景用户体验研究，为产品优化、<br/>设计升级提供精准支撑</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: '网站体验优化', icon: Globe, desc: '在用户与网站互动过程中，实时采集眼动追踪、面部表情、生理反应等多维度生物识别数据，挖掘用户潜意识的情绪反应与注意力模式，精准优化网站的布局设计、内容排布、导航逻辑，提升用户网站参与度与转化效率。' },
                            { title: '用户旅程体验梳理', icon: MousePointer2, desc: '捕捉并分析用户与产品/服务全触点互动中的生物特征信号，绘制各接触点的情绪变化图谱+认知负荷图谱，精准识别用户旅程中的体验痛点与优化节点，让产品/服务的用户体验流程更直观、更流畅、更贴合用户需求。' },
                            { title: '产品可用性测试', icon: Search, desc: '以生物识别技术升级传统可用性测试，通过眼动追踪明确用户注意力焦点，结合面部表情分析与生理数据深入解读用户情绪状态，发现单一标准测试方法易忽略的隐性可用性问题，让产品优化更具针对性。' },
                            { title: '移动用户体验测试', icon: Smartphone, desc: '借助移动测试台开展移动设备专属可用性测试，在可控且贴近真实的环境中，观察用户的触摸手势、设备操作等真实交互行为，精准识别移动设备特有体验问题（如触摸目标设计、屏幕响应速度、手持操作便捷性等），全方位优化移动应用的使用体验。' },
                            { title: '多场景拓展研究', icon: Layers, desc: '可灵活适配实验室内受控环境测试、在线远程测试、虚拟场景体验测试、移动学习场景研究等多元场景，满足不同行业、不同类型的用户体验研究需求，为各领域产品/服务的体验升级提供支撑。' }
                        ].map((item, i) => (
                            <FadeIn key={i} delay={i * 0.05} className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-teal-100 transition-all">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-400 group-hover:text-teal-500 shadow-sm mb-6 transition-colors">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Remote Capability */}
            <section className="py-24 px-6 bg-teal-600 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeIn direction="left">
                            <h2 className="text-4xl font-bold mb-8">远程数据采集能力</h2>
                            <p className="text-xl text-teal-50 leading-relaxed mb-8">
                                打破时空限制，实现全域、高效的用户数据采集：<br />
                                元镜远程数据采集系统，支持在任意地点对受试者开展眼动追踪、面部表情分析、语音分析、呼吸监测等多维度研究，可从不同地理位置收集样本数据，提升研究参与者的可及性与包容性。
                            </p>
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                        <Users size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">扩大样本量</h4>
                                        <p className="text-sm text-teal-100">远程采集模式能有效扩大样本量、丰富样本多样性，让研究结果更具普适性。</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                        <PiggyBank size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">降低成本</h4>
                                        <p className="text-sm text-teal-100">大幅减少实验室相关的后勤工作与成本投入，打造灵活、高效、适应性强的研究环境。</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                        <div className="relative">
                            <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full"></div>
                            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[3rem] shadow-2xl">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                                    </div>
                                    <div className="text-xs font-mono opacity-50 tracking-widest uppercase">Remote System v2.0</div>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-4 w-3/4 bg-white/20 rounded"></div>
                                    <div className="h-4 w-1/2 bg-white/20 rounded"></div>
                                    <div className="h-32 w-full bg-white/10 rounded-2xl flex items-center justify-center">
                                        <Globe className="animate-pulse text-teal-200" size={48} />
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="h-12 bg-white/5 rounded-lg"></div>
                                        <div className="h-12 bg-white/5 rounded-lg"></div>
                                        <div className="h-12 bg-white/5 rounded-lg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support & Training */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">全流程支持与专业培训</h2>
                        <p className="text-xl text-slate-500">为所有客户提供全生命周期的专业支持与系统化培训，确保高效挖掘研究价值</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: ' 售前咨询与演示', desc: '深入了解客户研究需求，提供定制化方案建议与产品功能演示，确保配置方案贴合实际研究需求。', icon: Headphones },
                            { title: ' 全时技术支持', desc: '搭建内容丰富的帮助中心，提供操作指引文章；配备专业产品专家，7×24小时在线响应。', icon: ShieldCheck },
                            { title: ' 专属客户服务', desc: '为每一位用户配备专属客户成功经理，提供一对一上线指导、操作培训，协助解决研究过程中的个性化问题。', icon: Users },
                            { title: ' 专业认证培训', desc: '开设元镜学院专项课程，提供5天沉浸式强化培训，完成学习并通过考核后，可获得元镜用户体验研究实验室使用认证，提升专业研究能力。', icon: BookOpen }
                        ].map((item, i) => (
                            <FadeIn key={i} delay={i * 0.1} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                                <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">开启用户体验研究新变革</h2>
                        <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                            元镜视界秉持以数据为基、以人为本的核心理念，深度聚焦各行业用户体验研究的痛点与需求。我们期待深入了解你的研究项目与挑战，以专业的AI情感量化技术与全流程研究平台，为你打造更科学、更精准的用户体验研究解决方案，用数据驱动体验升级，让产品/服务更贴合用户核心需求。
                        </p>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
