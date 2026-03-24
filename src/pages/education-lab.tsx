import React from 'react';
import { motion } from 'motion/react';
import FadeIn from '../components/FadeIn';
import {
    FlaskConical,
    Brain,
    Activity,
    Eye,
    Smile,
    Mic2,
    Globe,
    Zap,
    CheckCircle2,
    ArrowRight,
    Target,
    Cpu,
    Award,
    Users,
    Layers,
    Search,
    BookOpen,
    PieChart,
    Lightbulb,
    ShieldCheck,
    Rocket,
    Briefcase,
    GraduationCap
} from 'lucide-react';

export default function EducationLabPage() {
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
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                                教育实验室
                            </span>
                        </h1>
                        <p className=" text-slate-400 max-w-4xl leading-relaxed font-light mb-12">
                            升维研究能力，赋能教育创新。元镜视界教育实验室融合专属教育版平台与专业研究实验室双解决方案，打造尖端技术与学术探索深度共生的研究教学体系。
                        </p>

                    </FadeIn>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <FadeIn>
                            <h2 className="text-4xl font-bold mb-4">预见高等教育未来，锚定学术与应用融合新坐标</h2>
                            <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed">
                                针对当下高校资源集约利用、多元融资探索的发展需求，精准破解学术研究、人才培养、教学实践、校政校企合作的核心痛点。
                            </p>
                        </FadeIn>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: '科研端', icon: Search, desc: '为研究人员提供经严格验证的前沿技术，支撑高水平创新研究开展' },
                            { title: '教学端', icon: GraduationCap, desc: '为学生打造实用技能培养体系，提升未来就业市场核心竞争力' },
                            { title: '师资端', icon: Users, desc: '为教育工作者配备高效教学工具，实现体验式学习与课程深度融合' },
                            { title: '管理端', icon: Briefcase, desc: '为院校管理者搭建合作桥梁，助力校企产业合作与校内跨学科协同' }
                        ].map((item, i) => (
                            <FadeIn key={i} delay={i * 0.1} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                                <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center mb-6">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Suite Section */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeIn direction="left">
                            <h2 className="text-4xl font-bold mb-8">全维产品套件，驱动高等教育模式革新</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                面对就业市场快速迭代与高等教育行业的激烈竞争，元镜视界打破传统僵化的学位课程体系，引领教育向动态技能导向、技术创新赋能、沉浸式实践体验转型。
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-6 h-6 rounded-full bg-teal-500/10 flex items-center justify-center shrink-0 text-teal-600">
                                        <CheckCircle2 size={14} />
                                    </div>
                                    <span className="font-medium text-slate-700">整合行业前沿教育版智能平台</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-6 h-6 rounded-full bg-teal-500/10 flex items-center justify-center shrink-0 text-teal-600">
                                        <CheckCircle2 size={14} />
                                    </div>
                                    <span className="font-medium text-slate-700">专业研究实验室双解决方案</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-6 h-6 rounded-full bg-teal-500/10 flex items-center justify-center shrink-0 text-teal-600">
                                        <CheckCircle2 size={14} />
                                    </div>
                                    <span className="font-medium text-slate-700">构建从教学实践到科研创新的全链路能力</span>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn direction="right">
                            <div className="relative p-12 bg-white rounded-[3rem] border border-slate-200 shadow-sm text-center">
                                <Rocket className="mx-auto mb-8 text-teal-500" size={80} />
                                <h3 className="text-2xl font-bold mb-4">引领教育转型</h3>
                                <p className="text-slate-500 font-light leading-relaxed">
                                    助力高校培养未来领域开拓者，实现教育愿景落地。
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Custom Solutions Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <FadeIn>
                            <h2 className="text-4xl font-bold mb-4">分域定制能力，精准适配教学与科研需求</h2>
                        </FadeIn>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* For Educators */}
                        <FadeIn className="p-10 rounded-[3rem] bg-slate-50 border border-slate-200">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-teal-500 text-white flex items-center justify-center">
                                    <Users size={24} />
                                </div>
                                <h3 className="text-2xl font-bold">面向教育工作者——课堂教学专属解决方案</h3>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-2">核心功能：</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">集成网络摄像头眼动追踪、面部表情分析、智能调查问卷等基础研究工具；支持热图、注视路径等数据可视化呈现；支持数据导出。</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-2">产品优势：</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">高度可扩展，适配多规模课堂；配备教育课程专属授权；全系统兼容；界面简洁直观。</p>
                                </div>
                                <div className="flex gap-4">
                                    <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 text-xs font-bold">全体师生</span>
                                    <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 text-xs font-bold">日常课堂教学</span>
                                </div>
                            </div>
                        </FadeIn>

                        {/* For Researchers */}
                        <FadeIn delay={0.1} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-200">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-cyan-500 text-white flex items-center justify-center">
                                    <Search size={24} />
                                </div>
                                <h3 className="text-2xl font-bold">面向研究人员——高级科研专属解决方案</h3>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-2">核心功能：</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">支持多台生物识别传感器连接与数据同步；配备深度分析工具；提供远程数据采集扩展程序；兼容多种多媒体刺激素材；开放API接口。</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-2">产品优势：</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">配备学生科研专属授权；算法透明可追溯，支持自定义优化；数据处理高效，助力科研成果快速落地。</p>
                                </div>
                                <div className="flex gap-4">
                                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 text-xs font-bold">科研人员</span>
                                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 text-xs font-bold">学术成果发表</span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Specific Benefits Section */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <FadeIn direction="left">
                            <h3 className="text-3xl font-bold mb-6">致教育工作者：以前沿技术，育时代人才</h3>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                元镜视界教育版平台，专为课堂教学打造零门槛易操作的智能工具，无需师生具备专业技术背景。让学生通过沉浸式实操掌握市场领先的前沿技能，大幅提升就业竞争力。
                            </p>
                            <ul className="space-y-4">
                                {[
                                    '适配20人及以上规模化教学场景',
                                    '以院校课程规划为核心定制落地',
                                    '内置访问控制管理与项目共享功能',
                                    '实现生物识别研究技术的课堂民主化普及'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-teal-500 shrink-0" size={18} />
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>
                        <FadeIn direction="right">
                            <h3 className="text-3xl font-bold mb-6">致研究人员：以专业平台，筑科研高地</h3>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                元镜视界研究实验室是集研究设计、多源数据同步采集、神经科学数据快速分析与可视化于一体的全流程科研平台。
                            </p>
                            <div className="space-y-6">
                                <div className="p-6 bg-white rounded-2xl border border-slate-200">
                                    <h4 className="font-bold mb-2">科研创新的催化剂</h4>
                                    <p className="text-sm text-slate-500">支撑更前沿、更具协作性的跨学科研究，助力产出更多新颖成果。</p>
                                </div>
                                <div className="p-6 bg-white rounded-2xl border border-slate-200">
                                    <h4 className="font-bold mb-2">算法透明可溯</h4>
                                    <p className="text-sm text-slate-500">拒绝“黑箱操作”，所有底层算法均提供完整文档说明，保障科学性与合规性。</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Cooperation Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <FadeIn>
                            <h2 className="text-4xl font-bold mb-4">多维协同合作，打开教育发展新空间</h2>
                            <p className="text-xl text-slate-500">以技术为纽带，搭建校内、社区、产业三层合作桥梁</p>
                        </FadeIn>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: '校内跨部门合作', icon: Layers, desc: '打破学科壁垒，支持多源数据、多类传感器的一体化整合，让不同领域研究人员高效协作。' },
                            { title: '社会社区合作', icon: Globe, desc: '链接科研教学，赋能社区发展；为学生搭建技术实践平台，培养新时代应用型人才。' },
                            { title: '校企产业合作', icon: Briefcase, desc: '院校与企业开展深度合作，让学生接触真实产业案例，同时为院校实验室争取多元资金来源。' }
                        ].map((item, i) => (
                            <FadeIn key={i} delay={i * 0.1} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center">
                                <div className="w-16 h-16 rounded-2xl bg-white text-teal-500 flex items-center justify-center mx-auto mb-6 shadow-sm">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Commitments Section */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <FadeIn>
                            <h2 className="text-4xl font-bold mb-4">元镜视界教育实验室的核心承诺</h2>
                        </FadeIn>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            '前沿技术保障：持续提供人类行为研究领域的最新软件工具',
                            '高度灵活适配：拒绝“一刀切”，精准匹配不同规模院校需求',
                            '全场景学习覆盖：从实验室线下实验到线上远程数据收集',
                            '多元合作赋能：以技术为桥梁搭建校企、校社合作平台',
                            '数据同步高效：实现数据收集、分析、同步的无缝衔接',
                            '全维专业支持：提供响应及时、个性化、高标准的专业服务'
                        ].map((item, i) => (
                            <FadeIn key={i} delay={i * 0.05} className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-200">
                                <CheckCircle2 className="text-teal-500 shrink-0 mt-1" size={20} />
                                <span className="text-slate-700 font-medium">{item}</span>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
}
