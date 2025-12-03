import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
    const { id } = useParams();
    const projectId = parseInt(id);
    const project = projects.find(p => p.id === projectId);
    
    const prevProject = projects.find(p => p.id === projectId - 1);
    const nextProject = projects.find(p => p.id === projectId + 1);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">프로젝트를 찾을 수 없습니다</h1>
                    <Link to="/projects" className="text-orange-500 hover:underline">
                        프로젝트 목록으로 돌아가기
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FFF9F0] py-8 px-4 sm:px-6 lg:px-8 print:py-0 print:px-0 print:bg-white">
            <div className="max-w-6xl mx-auto">
                {/* 네비게이션 (인쇄 시 숨김) */}
                <div className="flex justify-between items-center mb-6 print:hidden">
                    <Link 
                        to="/projects" 
                        className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>목록으로</span>
                    </Link>
                    <div className="flex gap-4">
                        {prevProject && (
                            <Link 
                                to={`/projects/${prevProject.id}`}
                                className="flex items-center gap-1 text-gray-600 hover:text-orange-500 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                <span className="hidden sm:inline">이전</span>
                            </Link>
                        )}
                        {nextProject && (
                            <Link 
                                to={`/projects/${nextProject.id}`}
                                className="flex items-center gap-1 text-gray-600 hover:text-orange-500 transition-colors"
                            >
                                <span className="hidden sm:inline">다음</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        )}
                    </div>
                </div>

                {/* 프로젝트 카드 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-sm overflow-hidden print:rounded-none print:shadow-none"
                >
                    {/* 상단: 제목 영역 */}
                    <div className="bg-[#FFF9F0] px-8 py-6 print:px-6 print:py-4">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 print:text-2xl">{project.title}</h1>
                        {project.result && (
                            <div className="mt-3 text-gray-700 print:text-sm print:mt-2">
                                {Array.isArray(project.result) ? (
                                    <div className="flex flex-col gap-1">
                                        {project.result.map((res, idx) => (
                                            <div key={idx} className="flex items-center">
                                                <span className="text-lg mr-2 print:text-base">🏆</span>
                                                <span className="word-keep-all">{res}</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex items-center">
                                        <span className="text-lg mr-2 print:text-base">🏆</span>
                                        <span className="word-keep-all">{project.result}</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* 본문: 좌우 2단 레이아웃 */}
                    <div className="flex flex-col lg:flex-row">
                        {/* 왼쪽: 요약 + 이미지 */}
                        <div className="lg:w-2/5 p-8 print:p-6 border-r border-gray-100">
                            <div className="w-12 h-1 bg-orange-400 mb-5"></div>
                            <h2 className="text-xl font-bold text-orange-500 mb-4 word-keep-all whitespace-pre-line print:text-lg">
                                {project.summary}
                            </h2>
                            <p className="text-gray-600 word-keep-all leading-relaxed whitespace-pre-line mb-8 print:text-sm print:mb-6">
                                {project.description}
                            </p>
                            
                            <div className="rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-auto object-contain max-h-64 print:max-h-48"
                                    />
                                ) : (
                                    <div className="w-full h-48 flex items-center justify-center bg-gray-100 text-gray-400">
                                        {project.title} Image
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* 오른쪽: 상세 정보 */}
                        <div className="lg:w-3/5 p-8 print:p-6 space-y-6 print:space-y-4">
                            {/* 기간 / 인원 */}
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2 print:text-sm">기간 / 인원 수.</h3>
                                <p className="text-gray-600 print:text-sm">{project.period} / {project.team}</p>
                            </div>

                            {/* 기술 스택 */}
                            <div>
                                <h3 className="font-bold text-gray-900 mb-3 print:text-sm">기술 스택.</h3>
                                <div className="text-gray-600 space-y-1 print:text-sm">
                                    {Object.entries(project.stack).map(([key, value]) => (
                                        <div key={key} className="flex items-start">
                                            <span className="font-medium text-orange-500 mr-2">[{key}]</span>
                                            <span className="word-keep-all">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 담당 역할 */}
                            <div>
                                <h3 className="font-bold text-gray-900 mb-3 print:text-sm">담당 역할.</h3>
                                <div className="text-gray-600 print:text-sm">
                                    {project.contribution && (
                                        <div className="font-semibold text-orange-500 mb-4 print:mb-3">
                                            기여도 {project.contribution}
                                        </div>
                                    )}
                                    <ul className="list-disc list-outside ml-5 space-y-2 print:space-y-1">
                                        {project.roleDetails.map((detail, i) => (
                                            <li key={i} className="word-keep-all">{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* 배운 내용 */}
                            {project.learned && (
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-3 print:text-sm">배운 내용.</h3>
                                    <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 print:text-sm print:space-y-1">
                                        {project.learned.map((item, i) => (
                                            <li key={i} className="word-keep-all">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* 하단 네비게이션 (인쇄 시 숨김) */}
                <div className="flex justify-between items-center mt-8 print:hidden">
                    {prevProject ? (
                        <Link 
                            to={`/projects/${prevProject.id}`}
                            className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
                        >
                            <ArrowLeft className="w-5 h-5 text-gray-400" />
                            <div className="text-left">
                                <p className="text-xs text-gray-400">이전 프로젝트</p>
                                <p className="font-medium text-gray-900">{prevProject.title}</p>
                            </div>
                        </Link>
                    ) : <div />}
                    
                    {nextProject ? (
                        <Link 
                            to={`/projects/${nextProject.id}`}
                            className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="text-right">
                                <p className="text-xs text-gray-400">다음 프로젝트</p>
                                <p className="font-medium text-gray-900">{nextProject.title}</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400" />
                        </Link>
                    ) : <div />}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;

