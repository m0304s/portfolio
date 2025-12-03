export const projects = [
    {
        id: 1,
        title: "RAG익스텐션",
        result: [
            "(SSAFY) 2학기 3차 프로젝트 기업연계 4반 1등 (7팀 중 1등)",
            "(SSAFY) 2학기 3차 프로젝트 전국 4등 (118팀 중 4등)"
        ],
        summary: "RAG 기반 챗봇 서비스 플랫폼",
        description: "레티나 서비스 내 RAG 기반 챗봇 서비스를 제공하는 플랫폼으로, (주)히비스와 협력하여 진행한 프로젝트입니다.\n사용자가 업로드한 파일 내 이미지까지 설명하는 고성능 RAG 시스템을 구현하였습니다.",
        period: "2025.10 ~ 2025.11 (7주)",
        team: "7명",
        contribution: "30%",
        image: "/images/RAG-EXTENSION.png",
        stack: {
            FE: "TypeScript, React, Zustand",
            BE: "Python, FastAPI, Java, SpringBoot, QueryDSL, Redis, MySQL, MongoDB, Milvus",
            INFRA: "Jenkins, Docker, Amazon AWS, Nginx",
            AI: "Marker, YOLO/Doclayout"
        },
        roleDetails: [
            "프로젝트 전반적인 설계 및 팀 리더 수행",
            "Pub/Sub 기반 실시간 성능 모니터링 시스템 구현 (Redis Stream 리팩토링으로 데이터 영속성 보장)",
            "MSA 구조를 활용한 서비스 간 결합도 감소 및 독립적 배포 환경 확보",
            "YOLO/Doclayout 적용으로 고성능 RAG 시스템 구현"
        ],
        learned: [
            "Redis Stream을 활용한 메시지 브로커의 영속성 보장 방법과 비동기 처리 패턴을 학습했습니다.",
            "MSA 환경에서의 서비스 간 통신 및 독립적 배포 전략을 경험했습니다.",
            "RAG 시스템 구축을 위한 AI 모델(YOLO, Doclayout) 서빙 및 최적화 방법을 익혔습니다."
        ]
    },
    {
        id: 2,
        title: "Watch Out",
        result: "(SSAFY) 2학기 2차 프로젝트 부울경 1반 2등 (7팀 중 2등)",
        summary: "산업재해 예방을 위한 AI 영상분석 스마트안전관제시스템",
        description: "AI 영상 분석과 스마트워치를 연동하여 건설 현장의 위험 상황을 실시간으로 감지하고 대응할 수 있는 스마트 안전 관제 플랫폼입니다.",
        period: "2025.08 ~ 2025.10 (5주)",
        team: "6명",
        contribution: "40%",
        image: "/images/WATCHOUT.jpg",
        stack: {
            FE: "React, TypeScript, Capacitor, Zustand, Axios",
            BE: "Java, Spring Boot, QueryDSL",
            AI: "YOLACT, OpenCV, ArcFace",
            Mobile: "Android, Wear OS",
            Infra: "Nginx, Jenkins, Docker, Amazon AWS, Kafka",
            DB: "PostgreSQL, Redis"
        },
        roleDetails: [
            "프로젝트 총괄 및 백엔드 시스템 아키텍처 설계",
            "종합 관제 대시보드 API 개발 및 인프라 구축",
            "Kafka 기반 이벤트 처리 아키텍처 도입 (안면인식/CCTV 데이터 실시간 처리)",
            "PR-Agent 도입으로 코드 리뷰 프로세스 자동화"
        ],
        learned: [
            "Kafka를 활용한 대용량 영상 데이터의 실시간 이벤트 처리 파이프라인 구축 경험을 쌓았습니다.",
            "Blue/Green 무중단 배포 전략을 적용하여 서비스 안정성을 확보하는 방법을 익혔습니다.",
            "PR-Agent와 같은 AI 도구를 도입하여 팀의 코드 품질을 높이고 개발 생산성을 향상시키는 경험을 했습니다."
        ]
    },
    {
        id: 3,
        title: "Review",
        result: "(SSAFY) 2학기 1차 프로젝트 부울경 2반 1등 (7팀 중 1등)",
        summary: "AI 기반 온라인 화상 면접 코칭 서비스",
        description: "WebRTC 기능을 이용해 실전 면접 환경과 유사한 환경을 제공하고 AI 기반 피드백을 통해 면접 준비를 지원하는 개인 맞춤형 모의 면접 플랫폼입니다.",
        period: "2025.07 ~ 2025.08 (6주)",
        team: "6명",
        contribution: "50%",
        image: "/images/REVIEW.png",
        stack: {
            FE: "TypeScript, React, Zustand",
            BE: "Spring Boot, Java, Spring Data JPA",
            AI: "KoBERT, Chat GPT",
            Infra: "Nginx, Jenkins, Docker, Amazon AWS, Kafka",
            DB: "MySQL, Redis"
        },
        roleDetails: [
            "서비스 운영 환경 구축 및 WebRTC 기반 API 개발",
            "개인 맞춤형 질문 생성 API 및 답변 분석 AI 모델 개발 (KoBERT, LLM)",
            "Kafka, Zookeeper 도입으로 AI 영상 분석 비동기 처리 (대기 시간 50% 단축)",
            "Jenkins, Docker 기반 CI/CD 파이프라인 구축 및 안정적 운영 환경 구성"
        ],
        learned: [
            "테스트/운영용 네트워크 분리를 통한 서비스 운영 안정성 향상 기법을 익혔습니다.",
            "WebRTC(OpenVidu)를 활용한 실시간 화상 통신 구현 및 세션 관리 노하우를 습득했습니다.",
            "Kafka와 Zookeeper를 활용한 분산 환경에서의 비동기 메시지 처리 및 시스템 성능 최적화 경험을 쌓았습니다."
        ]
    },
    {
        id: 4,
        title: "야구행",
        result: "2024 관광데이터 활용 공모전 최우수상 수상",
        summary: "프로야구 팬들을 위한 여행 정보 제공 웹서비스",
        description: "경기 일정 확인 및 카카오 지도를 통해 주변 관광지 정보를 확인할 수 있는 기능을 제공하여 야구 관람과 여행을 연계한 서비스를 제공합니다.",
        period: "2024.04.01 ~ 2024.10.02",
        team: "4명 (팀 리더)",
        contribution: "30%",
        image: "/images/YAGUHANG.jpg",
        stack: {
            Backend: "Spring Boot, JdbcTemplate",
            DevOps: "Linux (Mini PC), Nginx, Blue/Green Deployment",
            API: "Tour API, Kakao Map API"
        },
        roleDetails: [
            "프로젝트 총괄 및 전반적인 아키텍처 설계",
            "야구 경기/날씨 데이터 수집 API 개발",
            "@Scheduled, cron을 활용한 데이터 수집 자동화 및 JdbcTemplate 배치 업데이트로 속도 37% 개선",
            "Tour API 호출 로직 리팩토링 (추상 클래스 도입, OCP 준수)",
            "온프레미스 서버 구축 및 Nginx 리버스 프록시 기반 무중단 배포 환경 구성"
        ]
    },
    {
        id: 5,
        title: "WAG",
        result: "누적 서비스 사용자 10,000명 돌파",
        summary: "온라인으로 즐기는 양세찬 게임",
        description: "웹 소켓 기반 실시간 채팅 기반 웹 미니게임을 제공하는 서비스로, 간편하고 빠르게 즐길 수 있습니다.",
        period: "2024.02.10 ~ 현재",
        team: "5명",
        contribution: "25%",
        image: "/images/WAG.png",
        stack: {
            FE: "React, TypeScript, Axios, TailWind, SocketJS",
            BE: "Spring Boot, Kafka, WebSocket",
            INFRA: "Docker, Jenkins, Nginx"
        },
        roleDetails: [
            "운영 환경 고도화 및 백엔드 아키텍처 개선 담당",
            "STOMP → Kafka 기반 이벤트 스트리밍 아키텍처 전환 (Sticky Session 문제 해결, Stateless 구현)",
            "Docker 기반 이미지 전환 및 Jenkins CI/CD 파이프라인 구축",
            "NGINX 리버스 프록시 연동 Blue/Green 무중단 배포 환경 구성"
        ],
        learned: [
            "STOMP와 Kafka를 결합하여 상태 비의존적(Stateless)인 실시간 통신 아키텍처를 설계하고 구현했습니다.",
            "Sticky Session 문제 해결 과정을 통해 분산 환경에서의 세션 관리와 로드 밸런싱에 대한 이해를 높였습니다."
        ]
    },
    {
        id: 6,
        title: "Todays-Menu",
        result: "API 응답 시간 80% 이상 개선 (5분 → 1분 이내)",
        summary: "개인 맞춤형 식단 정보 제공 어플리케이션",
        description: "머신러닝 기반으로 개인의 신체 상태, 식습관, 건강 상태 등을 바탕으로 영양학적으로 알맞은 식단을 제안합니다.",
        period: "2023.08.01 ~ 2025.02.20",
        team: "학부연구생",
        contribution: "백엔드 개발자",
        image: "/images/TODAYS-MENU.png",
        stack: {
            Backend: "Node.js",
            AI: "Machine Learning (LSTM)",
            Research: "KCBC, NOLTA, KCC 학술대회 논문 게재"
        },
        roleDetails: [
            "기존 어플리케이션 유지보수 및 성능 최적화 작업",
            "식단 조합 실시간 계산 로직 → 사전 처리 방식으로 리팩토링 (성능 병목 해결)",
            "머신러닝 기반 음식 구성을 통한 개인 맞춤형 식단 구성 관련 논문 발표 및 게재"
        ]
    }
];

