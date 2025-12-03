import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link 
                to={`/projects/${project.id}`}
                className="block bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all group"
            >
                <div className="flex flex-col md:flex-row">
                    {/* 이미지 */}
                    <div className="md:w-2/5 bg-gray-50 p-6 flex items-center justify-center">
                        {project.image ? (
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto object-contain max-h-48 group-hover:scale-105 transition-transform"
                            />
                        ) : (
                            <div className="w-full h-40 flex items-center justify-center bg-gray-100 text-gray-400">
                                {project.title}
                            </div>
                        )}
                    </div>
                    
                    {/* 정보 */}
                    <div className="md:w-3/5 p-6">
                        <div className="flex items-start justify-between mb-3">
                            <h2 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                                {project.title}
                            </h2>
                            <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                        </div>
                        
                        {project.result && (
                            <div className="mb-3 text-sm text-gray-600">
                                {Array.isArray(project.result) ? (
                                    <span className="flex items-center">
                                        <span className="mr-1">🏆</span>
                                        {project.result[0]}
                                    </span>
                                ) : (
                                    <span className="flex items-center">
                                        <span className="mr-1">🏆</span>
                                        {project.result}
                                    </span>
                                )}
                            </div>
                        )}
                        
                        <p className="text-orange-500 font-medium mb-2">{project.summary}</p>
                        <p className="text-gray-500 text-sm line-clamp-2 word-keep-all">
                            {project.description.replace(/\n/g, ' ')}
                        </p>
                        
                        <div className="mt-4 flex flex-wrap gap-2">
                            {Object.keys(project.stack).slice(0, 3).map((key) => (
                                <span 
                                    key={key} 
                                    className="px-2 py-1 bg-orange-50 text-orange-600 text-xs rounded-full"
                                >
                                    {key}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <div className="min-h-screen bg-[#FFF9F0] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* 페이지 타이틀 */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900">
                        Projects<span className="text-orange-500">.</span>
                    </h1>
                    {/* <p className="mt-3 text-gray-600">총 {projects.length}개의 프로젝트</p> */}
                </div>

                {/* 프로젝트 목록 */}
                <div className="space-y-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
