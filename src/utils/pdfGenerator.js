/**
 * 포트폴리오 PDF 생성 유틸리티
 * 
 * html2canvas는 Tailwind CSS v4의 oklch 색상 포맷을 지원하지 않아
 * 브라우저 인쇄 기능(window.print())을 활용하여 PDF 저장을 유도합니다.
 */

/**
 * 현재 페이지를 PDF로 저장 (브라우저 인쇄 다이얼로그 활용)
 */
export const generatePortfolioPDF = async () => {
    // 인쇄 전 스타일 적용을 위한 클래스 추가
    document.body.classList.add('printing');
    
    // 인쇄 다이얼로그 열기
    window.print();
    
    // 인쇄 후 클래스 제거
    document.body.classList.remove('printing');
};

/**
 * 전체 포트폴리오를 PDF로 저장하기 위한 안내
 * 브라우저 인쇄 기능을 사용하여 PDF 저장을 유도
 */
export const generateFullPortfolioPDF = async () => {
    const confirmed = window.confirm(
        '전체 포트폴리오를 PDF로 저장하려면:\n\n' +
        '1. 인쇄 다이얼로그가 열립니다.\n' +
        '2. "대상"을 "PDF로 저장"으로 선택하세요.\n' +
        '3. 필요시 "추가 설정"에서 "배경 그래픽" 옵션을 활성화하세요.\n\n' +
        '계속하시겠습니까?'
    );
    
    if (confirmed) {
        document.body.classList.add('printing');
        window.print();
        document.body.classList.remove('printing');
    }
};
