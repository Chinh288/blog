
import { Tag, SkillLevel, Activity, Project, Certification } from './types';

export const PROFILE_INFO = {
  fullName: "Đinh Duy Chính",
  studentId: "2280600311",
  dateOfBirth: "28/08/2004",
  className: "22DTHE5",
  email: "duychinhdinh@gmail.com",
  github: "https://github.com/Chinh288",
  school: "Hutech University",
  field: "An toàn thông tin / An ninh mạng",
  focus: "Bảo mật hệ thống",
  bio: "Bản ghi quá trình học tập thực tế và bằng chứng kỹ thuật. Chuyên sâu về phân tích log và giám sát an ninh mạng.",
  tools: ["Wireshark", "Suricata", "Wazuh", "Linux", "Nmap", "Burp Suite"]
};

export const MOCK_ACTIVITIES: Activity[] = [
  {
    id: '2025-12-28-cryptography-basics',
    date: '2025-12-28',
    title: 'Mã hóa hiện đại và ứng dụng Cryptography',
    tags: [Tag.READING, Tag.LAB],
    level: SkillLevel.INTERMEDIATE,
    images: ['https://picsum.photos/seed/crypto1/1200/800'],
    content: 
    `### What I did
Nghiên cứu và thực hành các thuật toán mã hóa: AES-256, RSA, SHA-256. Thực hiện bài lab mã hóa end-to-end communication sử dụng Python cryptography library.

### What I learned
* Symmetric vs Asymmetric encryption: Use cases và performance trade-offs
* Hash functions: SHA-256, HMAC cho data integrity
* Digital signatures: RSA signing và verification
* Key management: Best practices trong production environment

### Next step
Tìm hiểu về PKI (Public Key Infrastructure) và certificate management. Thực hành break weak encryption trong CTF challenges.`
  },
  {
    id: '2025-12-27-digital-forensics',
    date: '2025-12-27',
    title: 'Digital Forensics - Phân tích dấu vết tấn công',
    tags: [Tag.LAB],
    level: SkillLevel.INTERMEDIATE,
    images: ['https://picsum.photos/seed/forensic1/1200/800'],
    content: 
    `### What I did
Phân tích memory dump sử dụng Volatility framework. Trích xuất artifacts từ disk image với Autopsy để điều tra incident.

### What I learned
* Memory forensics: Process analysis, network connections, malware detection
* File system artifacts: Browser history, deleted files recovery, timeline analysis
* Log analysis: Windows Event Logs, Linux syslogs correlation
* Chain of custody: Evidence handling best practices

### Next step
Học thêm về mobile forensics (Android/iOS). Thực hành network forensics với Wireshark và NetworkMiner.`
  },
  {
    id: '2025-12-26-binary-exploitation',
    date: '2025-12-26',
    title: 'PWN - Binary Exploitation và Buffer Overflow',
    tags: [Tag.LAB],
    level: SkillLevel.ADVANCED,
    images: ['https://picsum.photos/seed/pwn1/1200/800'],
    content: 
    `### What I did
Thực hành khai thác lỗi buffer overflow trong C program. Sử dụng GDB và pwntools để craft payload và bypass stack protection.

### What I learned
* Stack layout: EBP, ESP, return address manipulation
* Shellcode development: Writing và injecting x86 assembly
* Protection mechanisms: DEP, ASLR, Stack Canaries và bypass techniques
* Return-Oriented Programming (ROP): Building ROP chains

### Next step
Nghiên cứu heap exploitation và use-after-free vulnerabilities. Tham gia CTF PWN challenges để thực hành.`
  },
  {
    id: '2025-12-25-java-security',
    date: '2025-12-25',
    title: 'Java Security - Secure Coding Practices',
    tags: [Tag.READING, Tag.LAB],
    level: SkillLevel.INTERMEDIATE,
    images: ['https://picsum.photos/seed/javasec1/1200/800'],
    content: 
    `### What I did
Tìm hiểu về common vulnerabilities trong Java applications: SQL Injection, XXE, Deserialization attacks. Thực hành secure coding với OWASP guidelines.

### What I learned
* Input validation: Sanitizing user input, prepared statements
* Authentication & Authorization: Spring Security implementation
* Secure deserialization: Avoiding ObjectInputStream vulnerabilities
* Cryptography in Java: JCE framework, SecureRandom usage
* Dependency scanning: Detecting vulnerable libraries với OWASP Dependency-Check

### Next step
Deep dive vào Java bytecode analysis và runtime protection mechanisms (SecurityManager).`
  },
  {
    id: '2025-12-24-web-security',
    date: '2025-12-24',
    title: 'Web Application Security Testing',
    tags: [Tag.LAB],
    level: SkillLevel.INTERMEDIATE,
    images: ['https://picsum.photos/seed/websec1/1200/800'],
    content: 
    `### What I did
Thực hành tấn công và phòng thủ web applications. Sử dụng Burp Suite để test OWASP Top 10 vulnerabilities trên DVWA và WebGoat.

### What I learned
* XSS (Stored, Reflected, DOM-based): Exploitation và mitigation
* CSRF: Token validation và SameSite cookies
* SQL Injection: Union-based, Blind SQLi, Time-based attacks
* Authentication flaws: Session management, password reset vulnerabilities
* SSRF và XXE: Internal network access và XML parsing attacks

### Next step
Học về API security testing (REST/GraphQL) và OAuth 2.0 vulnerabilities. Thực hành bug bounty hunting.`
  },
  {
    id: '2025-12-20-lap-trinh-mang',
    date: '2025-12-20',
    title: 'Lập Trình Mạng',
    tags: [Tag.READING],
    level: SkillLevel.INTERMEDIATE,
    content: 
    `## PHẦN 1: TỔNG QUAN VÀ KIẾN THỨC NỀN TẢNG

### 1.1 Tổng quan về Lập trình mạng và Môi trường phát triển
* Giới thiệu môn học: Khái niệm, vai trò, ứng dụng thực tế (Web server, Chat, Game, IoT).
* Chuẩn bị môi trường: Java (OOP, Exception), JDK, IntelliJ/Eclipse, Netcat, Telnet.

### 1.2 Kiến thức nền tảng về Mạng máy tính cho lập trình viên
* Mô hình tham chiếu: OSI 7 tầng, TCP/IP 4 tầng. Quá trình Encapsulation/Decapsulation.
* Giao thức cốt lõi: IP, So sánh TCP vs UDP. Khái niệm Port và Socket.
* Kiến trúc: Client-Server, Peer-to-Peer.

## PHẦN 2: QUẢN LÝ DỮ LIỆU VÀ KẾT NỐI

### 2.1 Quản lý luồng vào/ra dữ liệu (Java I/O)
* Luồng Byte (Byte Streams): InputStream, OutputStream.
* Luồng Ký tự (Character Streams): Reader, Writer, Encoding/Decoding.
* Nâng cao: Buffered I/O, Data Streams, Object Serialization.

### 2.2 Quản lý địa chỉ và kết nối mạng trong Java
* Lớp InetAddress: Quản lý IP, DNS Lookup.
* NetworkInterface: Quản lý card mạng, địa chỉ MAC.
* Endpoint: InetSocketAddress.

## PHẦN 3: LẬP TRÌNH SOCKET CƠ BẢN

### 3.1 Lập trình Socket với giao thức TCP (Giao thức tin cậy)
* Cơ chế: Three-way handshake, độ tin cậy.
* Server: ServerSocket, accept(), I/O streams.
* Client: Socket, kết nối IP/Port.
* Vấn đề Blocking: Nghẽn tại accept() và read().

### 3.2 Lập trình Socket với giao thức UDP (Giao thức tốc độ)
* Đặc điểm: Không kết nối, tốc độ cao (Streaming, DNS).
* Lớp cốt lõi: DatagramSocket, DatagramPacket.
* Quy trình: send() và receive().

## PHẦN 4: KỸ THUẬT NÂNG CAO VÀ ỨNG DỤNG PHÂN TÁN

### 4.1 Lập trình đa luồng và Xử lý đồng thời
* Giới hạn server đơn luồng.
* Multithreaded Server: Chiến lược Thread-per-client.
* Quản lý hiệu quả: Thread Pools (ExecutorService).

### 4.2 Các chủ đề nâng cao: Multicast UDP và Java RMI
* Multicast UDP: Unicast/Broadcast/Multicast, MulticastSocket, joinGroup.
* Java RMI: Gọi phương thức từ xa, RMI Registry, Stub/Skeleton.`
  }
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'steganography-detection',
    title: 'Phát hiện tin ẩn trong ảnh bằng CNN',
    description: 'Xây dựng hệ thống web phát hiện steganography sử dụng Deep Learning.',
    technologies: ['Python', 'TensorFlow', 'CNN', 'Flask', 'React'],
    content: `Phát triển mô hình CNN để phát hiện thông tin ẩn trong ảnh (steganography). Xây dựng website cho phép người dùng kiểm tra ảnh trước khi tải về, cảnh báo nếu phát hiện dữ liệu ẩn đáng ngờ. Hệ thống sử dụng transfer learning và đạt độ chính xác 92% trên tập test.`
  }
];

export const MOCK_CERTIFICATIONS: Certification[] = [
  {
    id: 'hutech-is-2025',
    title: 'Giải Khuyến Khích - Sinh viên với An toàn thông tin HUTECH 2025',
    images: ['/images/SVATTT.jpg'],
    issuer: 'Trường Đại học Công nghệ TP.HCM (HUTECH)',
    date: '20/06/2025',
    content: 'Đạt giải Khuyến khích trong cuộc thi chuyên môn về An toàn thông tin cấp trường dành cho nhóm sinh viên.'
  },
  {
    id: 'maze-of-shadows-ctf',
    title: 'Giải Khuyến Khích - Cuộc thi CTF "The Maze of Shadows"',
    images: ['/images/ctf-maze.jpg'],
    issuer: 'Câu lạc bộ An toàn thông tin HUTECH',
    date: '06/06/2025',
    content: 'Chứng nhận thành tích giải Khuyến khích trong giải đấu Capture The Flag nội bộ.'
  },
  {
    id: 'cisco-intro-cyber',
    title: 'Introduction to Cybersecurity',
    images: ['/images/Seccyber.jpg'],
    issuer: 'Cisco Networking Academy',
    date: '29/11/2024',
    content: 'Chứng nhận hoàn thành khóa học nền tảng về an ninh mạng, bảo vệ dữ liệu và nguyên tắc bảo mật.'
  },
  {
    id: 'cisco-js-essentials',
    title: 'JavaScript Essentials 1',
    images: ['/images/java1.jpg'],
    issuer: 'Cisco Networking Academy',
    date: '01/12/2025',
    content: 'Nắm vững kiến thức lập trình JavaScript cơ bản phục vụ cho phát triển ứng dụng và tự động hoá.'
  },
  {
    id: 'cisco-networking-basics',
    title: 'Networking Basics',
    images: ['/images/NetworkBasic.jpg'],
    issuer: 'Cisco Networking Academy',
    date: '20/11/2025',
    content: 'Hiểu rõ các nguyên lý mạng, mô hình OSI và cấu hình thiết bị mạng Cisco.'
  },
   {
    id: 'cisco-js-essentials',
    title: 'JavaScript Essentials 2',
    images: ['/images/Jvaess2.jpg'],
    issuer: 'Cisco Networking Academy',
    date: '20/12/2025',
    content: 'Nắm vững kiến thức lập trình JavaScript cơ bản phục vụ cho phát triển ứng dụng và tự động hoá.'
  }
];
