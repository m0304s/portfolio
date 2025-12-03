import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="min-h-screen bg-[#FFF9F0] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl w-full mx-auto bg-white rounded-[2rem] shadow-sm overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    
                    {/* Left Column: Profile & Intro */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2 p-8 md:p-12 space-y-6 border-r border-gray-100"
                    >
                        <div>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                                안녕하세요,<br />
                                <span className="text-orange-500">백엔드</span> 개발자 최민석입니다.
                            </h1>
                        </div>

                        <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                            <img
                                src="/images/PROFILE.jpg"
                                alt="최민석"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="space-y-5 text-gray-700">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">
                                    <span className="text-orange-500">효율적인 협업</span>을 중요하게 생각합니다.
                                </h3>
                                <p className="leading-relaxed text-gray-600 text-sm word-keep-all">
                                    프로젝트 경험과 기술 스택 외에도 효율적인 협업과 문제 해결 능력을 통해 팀의 성과를 극대화하는 데 기여하고 있습니다.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">
                                    <span className="text-orange-500">문제 해결</span>을 중요하게 생각합니다.
                                </h3>
                                <p className="leading-relaxed text-gray-600 text-sm word-keep-all">
                                    개발은 단순 구현이 아닌 서비스의 설계와 운영까지 이어진다는 관점을 가지고 있으며, 높은 품질의 서비스를 위해 시스템의 근본적인 문제를 해결하는 것을 중요하게 생각합니다.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">
                                    <span className="text-orange-500">지속적인 성장</span>을 목표로 합니다.
                                </h3>
                                <p className="leading-relaxed text-gray-600 text-sm word-keep-all">
                                    "기술은 세상을 변화시키고 서비스는 기술을 활용하여 세상의 방향성을 결정한다"는 가치관을 가지고, 유저에게 편리함을 제공하기 위해 끊임없이 학습합니다.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Education & Awards */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-1/2 p-8 md:p-12 space-y-8 bg-[#FFFCF8]"
                    >
                        {/* Education */}
                        <div>
                            <div className="flex items-center mb-4">
                                <span className="text-xl mr-2">🎓</span>
                                <h2 className="text-xl font-bold text-gray-900">Graduation & Education</h2>
                            </div>
                            <ul className="space-y-2 text-sm">
                                <li className="flex gap-3">
                                    <span className="font-semibold text-gray-800 min-w-[8.5rem] whitespace-nowrap">2025.01 ~ 2025.12</span>
                                    <span className="text-gray-600 word-keep-all">삼성 청년 SW AI 아카데미 13기 (Web(Java) 개발자 과정)</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-semibold text-gray-800 min-w-[8.5rem] whitespace-nowrap">2023.01 ~ 2023.02</span>
                                    <span className="text-gray-600 word-keep-all">부경대학교X삼성멀티캠퍼스 주관 Java Spring Framework 중급과정</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-semibold text-gray-800 min-w-[8.5rem] whitespace-nowrap">2020.03 ~ 2025.02</span>
                                    <span className="text-gray-600 word-keep-all">국립부경대학교 컴퓨터공학과</span>
                                </li>
                            </ul>
                        </div>

                        {/* Awards */}
                        <div>
                            <div className="flex items-center mb-4">
                                <span className="text-xl mr-2">🏆</span>
                                <h2 className="text-xl font-bold text-gray-900">Awards</h2>
                            </div>
                            <ul className="space-y-2 text-sm">
                                <li className="flex gap-3">
                                    <span className="font-semibold text-gray-800 min-w-[8.5rem] whitespace-nowrap">2025.11</span>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-gray-600 word-keep-all">(SSAFY) 2학기 3차 프로젝트 기업연계 4반 <span className="text-orange-500 font-bold">1등</span> (7팀 중 1등)</span>
                                        <span className="text-gray-600 word-keep-all">(SSAFY) 2학기 3차 프로젝트 전국 <span className="text-orange-500 font-bold">4등</span> (118팀 중 4등)</span>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-semibold text-gray-800 min-w-[8.5rem] whitespace-nowrap">2025.10</span>
                                    <span className="text-gray-600 word-keep-all">(SSAFY) 2학기 2차 프로젝트 부울경 1반 <span className="text-orange-500 font-bold">2등</span> (7팀 중 2등)</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-semibold text-gray-800 min-w-[8.5rem] whitespace-nowrap">2025.08</span>
                                    <span className="text-gray-600 word-keep-all">(SSAFY) 2학기 1차 프로젝트 부울경 2반 <span className="text-orange-500 font-bold">1등</span> (7팀 중 1등)</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-semibold text-gray-800 min-w-[8.5rem] whitespace-nowrap">2024.11</span>
                                    <span className="text-gray-600 word-keep-all">2024 관광데이터 활용 공모전 <span className="text-orange-500 font-bold">최우수상</span> (300팀 중 2등)</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-semibold text-gray-800 min-w-[8.5rem] whitespace-nowrap">2024.01</span>
                                    <span className="text-gray-600 word-keep-all">2023 모배디 해커톤 대회 <span className="text-orange-500 font-bold">대상</span> (1등)</span>
                                </li>
                            </ul>
                        </div>

                        {/* Certificates */}
                        <div>
                            <div className="flex items-center mb-4">
                                <span className="text-xl mr-2">💡</span>
                                <h2 className="text-xl font-bold text-gray-900">Certificates</h2>
                            </div>
                            <ul className="space-y-2 text-sm">
                                <li className="flex gap-3">
                                    <span className="font-semibold text-gray-800 min-w-[8.5rem] whitespace-nowrap">2025.06</span>
                                    <span className="text-gray-600">정보처리기사</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-semibold text-gray-800 min-w-[8.5rem] whitespace-nowrap">2024.09</span>
                                    <span className="text-gray-600">SQLD</span>
                                </li>
                            </ul>
                        </div>

                        {/* Social Activities */}
                        <div>
                            <div className="flex items-center mb-4">
                                <span className="text-xl mr-2">💁🏻</span>
                                <h2 className="text-xl font-bold text-gray-900">Social Activities</h2>
                            </div>
                            <ul className="space-y-2 text-sm">
                                <li className="flex gap-3">
                                    <span className="font-semibold text-gray-800 min-w-[8.5rem] whitespace-nowrap">2025.10 ~ 2025.12</span>
                                    <span className="text-gray-600 word-keep-all">삼성청년 SW AI 아카데미 2학기 반장 (부울경 캠퍼스 자치회 활동)</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-semibold text-gray-800 min-w-[8.5rem] whitespace-nowrap">2023.08 ~ 2025.02</span>
                                    <span className="text-gray-600 word-keep-all">부경대학교 정보 및 데이터베이스 연구실(IDBLAB) 학부연구생</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-semibold text-gray-800 min-w-[8.5rem] whitespace-nowrap">2023.08 ~ 2024.08</span>
                                    <span className="text-gray-600 word-keep-all">부경대학교 UMC 동아리 (Spring Boot 스터디 / CS 스터디)</span>
                                </li>
                            </ul>
                        </div>

                        {/* Papers */}
                        <div>
                            <div className="flex items-center mb-4">
                                <span className="text-xl mr-2">📕</span>
                                <h2 className="text-xl font-bold text-gray-900">Papers</h2>
                            </div>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <h4 className="font-semibold text-gray-800 mb-0.5">머신러닝 기반 음식구성을 통한 개인 맞춤형 식단 구성</h4>
                                    <p className="text-gray-500 text-xs">KDBC 한국정보과학회 발표</p>
                                </li>
                                <li>
                                    <h4 className="font-semibold text-gray-800 mb-0.5">LSTM을 이용한 학교급식 식단 구성 기법</h4>
                                    <p className="text-gray-500 text-xs">NOLTA, KCC 학술대회 게재</p>
                                </li>
                            </ul>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
