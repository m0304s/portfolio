import { motion } from 'framer-motion';

const SkillCard = ({ title, icon, color, skills, horizontal = false }) => {
    const colorClasses = {
        orange: {
            title: "text-orange-500",
            dot: "bg-orange-500",
            border: "border-orange-200",
            bg: "bg-orange-50"
        },
        blue: {
            title: "text-blue-600",
            dot: "bg-blue-600",
            border: "border-blue-200",
            bg: "bg-blue-50"
        },
        green: {
            title: "text-emerald-600",
            dot: "bg-emerald-600",
            border: "border-emerald-200",
            bg: "bg-emerald-50"
        },
        purple: {
            title: "text-purple-600",
            dot: "bg-purple-600",
            border: "border-purple-200",
            bg: "bg-purple-50"
        },
        pink: {
            title: "text-pink-600",
            dot: "bg-pink-600",
            border: "border-pink-200",
            bg: "bg-pink-50"
        }
    };

    const colors = colorClasses[color] || colorClasses.orange;

    return (
        <div className={`rounded-2xl border ${colors.border} ${colors.bg} p-6 h-full`}>
            <div className="flex items-center gap-2 mb-5">
                <span className="text-xl">{icon}</span>
                <h3 className={`text-lg font-bold ${colors.title}`}>{title}</h3>
            </div>
            <div className={horizontal ? "grid grid-cols-2 md:grid-cols-4 gap-4" : "space-y-4"}>
                {skills.map((skill, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-bold text-gray-900">{skill.name}</span>
                            <div className="flex gap-1">
                                {[...Array(3)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-2.5 h-2.5 rounded-full ${i < skill.level ? colors.dot : 'bg-gray-200'}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <ul className="text-gray-600 text-sm space-y-1">
                            {skill.descriptions.map((desc, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="text-gray-400 mr-2">•</span>
                                    <span className="word-keep-all">{desc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    const skillData = {
        languages: [
            { name: "Java", level: 3, descriptions: ["기본적인 문법 및 객체 지향 프로그래밍 개념을 이해하고 있음"] },
            { name: "Python", level: 2, descriptions: ["자료 구조, 함수 등을 적용하여 문제 해결 가능"] },
            { name: "Javascript / Typescript", level: 2, descriptions: ["ES6+ 를 이해하고 프로젝트 진행 가능"] },
            // { name: "Dart", level: 2, descriptions: ["Flutter 프레임워크를 활용한 모바일 앱 개발 가능"] },
        ],
        frameworks: [
            { name: "Spring Boot", level: 3, descriptions: ["RESTful API 설계 및 구현 가능", "JPA/Hibernate를 활용한 데이터베이스 연동"] },
            { name: "FastAPI", level: 2, descriptions: ["Python 기반의 고성능 API 서버 구축 및 AI 모델 서빙 경험"] },
            { name: "React.js", level: 2, descriptions: ["Redux, Zustand 등을 통한 상태 관리 가능"] },
            // { name: "Flutter", level: 2, descriptions: ["크로스 플랫폼 모바일 애플리케이션 개발 가능"] },
        ],
        tools: [
            { name: "Git / GitLab", level: 3, descriptions: ["프로젝트 관리 및 협업 가능", "n8n을 활용한 코드 리뷰 자동화 경험"] },
            { name: "Docker / Jenkins", level: 3, descriptions: ["CI/CD 파이프라인 구축 및 Blue/Green 무중단 배포 경험"] },
            { name: "AWS", level: 2, descriptions: ["EC2, RDS 등 클라우드 인프라 구축 및 운영 가능"] },
            { name: "Kafka", level: 2, descriptions: ["대용량 트래픽 처리를 위한 메시지 큐 시스템 구축 경험"] },
        ],
        databases: [
            { name: "MySQL / MariaDB", level: 3, descriptions: ["SQL 언어를 이해하고 복잡한 쿼리 작성 및 최적화 가능"] },
            { name: "Redis", level: 3, descriptions: ["캐싱, 세션 관리 및 Redis Stream을 활용한 메시지 처리 가능"] },
            { name: "Milvus", level: 2, descriptions: ["벡터 데이터베이스 설계 및 유사도 검색 구현 가능"] },
            { name: "MongoDB", level: 2, descriptions: ["NoSQL 데이터베이스 설계 및 쿼리 작성 가능"] },
        ],
        ai: [
            { name: "PyTorch", level: 2, descriptions: ["딥러닝 모델 구현 및 학습 가능", "YOLO, LSTM 등 모델 활용 경험"] },
            { name: "LangChain", level: 2, descriptions: ["RAG 파이프라인 구축 및 LLM 연동 가능"] },
            // { name: "OpenCV", level: 2, descriptions: ["영상 처리 및 컴퓨터 비전 알고리즘 적용 가능"] },
            { name: "HuggingFace", level: 2, descriptions: ["사전학습 모델 활용 및 Fine-tuning 경험"] },
        ]
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#FFF9F0] to-[#FFF5E6] py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto"
            >
                {/* 페이지 타이틀 */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900">
                        Skills<span className="text-orange-500">.</span>
                    </h1>
                    <p className="mt-3 text-gray-600">기술 스택 및 역량</p>
                </div>

                {/* 스킬 그리드 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <SkillCard 
                            title="Programming Language" 
                            icon="💻" 
                            color="orange" 
                            skills={skillData.languages} 
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <SkillCard 
                            title="Framework / Library" 
                            icon="🚀" 
                            color="blue" 
                            skills={skillData.frameworks} 
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <SkillCard 
                            title="AI / ML" 
                            icon="🤖" 
                            color="pink" 
                            skills={skillData.ai} 
                        />
                    </motion.div>

                </div>

                {/* 하단 2개 카드 - 반반 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <SkillCard 
                            title="DevOps & Collaboration" 
                            icon="⚙️" 
                            color="green" 
                            skills={skillData.tools} 
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <SkillCard 
                            title="Database" 
                            icon="🗄️" 
                            color="purple" 
                            skills={skillData.databases}
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Skills;
