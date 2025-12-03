import { Outlet, Link, useLocation } from 'react-router-dom';
import { generateFullPortfolioPDF } from '../utils/pdfGenerator';
import { Printer, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Layout = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const handlePrintPDF = () => {
        generateFullPortfolioPDF();
    };

    const navLinks = [
        { to: '/', label: '홈' },
        { to: '/about', label: '소개' },
        { to: '/skills', label: '기술 스택' },
        { to: '/projects', label: '프로젝트' },
        { to: '/contact', label: '연락처' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <div className="min-h-screen bg-[#FFFBF5] text-gray-900 font-sans">
            <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 print:hidden">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link to="/" className="text-xl font-bold text-orange-500">
                        Portfolio<span className="text-gray-900">.</span>
                    </Link>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex space-x-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className={`text-sm font-medium transition-colors ${
                                        isActive(link.to)
                                            ? 'text-orange-500'
                                            : 'text-gray-600 hover:text-orange-500'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        {/* <button
                            onClick={handlePrintPDF}
                            className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium shadow-sm"
                            title="PDF로 저장 (인쇄)"
                        >
                            <Printer className="w-4 h-4" />
                            <span>PDF 저장</span>
                        </button> */}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6 text-gray-600" />
                        ) : (
                            <Menu className="w-6 h-6 text-gray-600" />
                        )}
                    </button>
                </nav>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 py-4">
                        <div className="flex flex-col space-y-2 px-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                                        isActive(link.to)
                                            ? 'bg-orange-50 text-orange-500'
                                            : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <button
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    handlePrintPDF();
                                }}
                                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 bg-orange-500 text-white rounded-lg text-sm font-medium"
                            >
                                <Printer className="w-4 h-4" />
                                <span>PDF 저장</span>
                            </button>
                        </div>
                    </div>
                )}
            </header>
            
            <main className="pt-16 print:pt-0">
                <Outlet />
            </main>
            
            <footer className="bg-gray-900 text-white py-8 print:hidden">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} 최민석. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
