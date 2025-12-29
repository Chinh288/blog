
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
  bio: "Sống và làm việc theo tấm gương đạo đức Hồ Chí Minh",
  tools: ["Wireshark", "Suricata", "Wazuh", "Linux", "Nmap", "Burp Suite"]
};

export const MOCK_ACTIVITIES: Activity[] = [
  {
    id: '2025-12-29-system-hacking',
    date: '2025-12-29',
    title: 'System Hacking - Leo thang đặc quyền và Post-Exploitation',
    tags: [Tag.LAB],
    level: SkillLevel.ADVANCED,
    images: ['https://picsum.photos/seed/privesc1/1200/800'],
    content: 
    `### Những gì đã làm
Thực hành kỹ thuật leo thang đặc quyền trên Linux và Windows. Khai thác các dịch vụ cấu hình sai, SUID binaries, và lỗ hổng kernel để đạt quyền root/SYSTEM.

### Những gì đã học
* Leo thang đặc quyền trên Linux:
  - Khai thác SUID/SGID binaries (find / -perm -4000)
  - Lỗi cấu hình sudo (sudo -l, GTFOBins)
  - Cron jobs và PATH hijacking
  - Khai thác lỗ hổng kernel (DirtyCow, PwnKit)
  
* Leo thang đặc quyền trên Windows:
  - Unquoted service paths
  - Weak service permissions (sc qc, accesschk)
  - Token impersonation (SeImpersonatePrivilege)
  - Kỹ thuật bypass UAC
  
* Post-Exploitation:
  - Cơ chế duy trì truy cập (backdoors, scheduled tasks)
  - Trích xuất thông tin đăng nhập (mimikatz, /etc/shadow)
  - Di chuyển ngang (Pass-the-Hash, PSExec)
  - Xóa log và chống điều tra số

### Bước tiếp theo
Nghiên cứu về khai thác Active Directory và leo thang đặc quyền domain. Thực hành trên HackTheBox và TryHackMe machines.`
  },
  {
    id: '2025-12-28-cryptography-basics',
    date: '2025-12-28',
    title: 'Mã hóa hiện đại và ứng dụng Cryptography',
    tags: [Tag.READING, Tag.LAB],
    level: SkillLevel.INTERMEDIATE,
    images: ['https://picsum.photos/seed/crypto1/1200/800'],
    content: 
    `### Những gì đã làm
Nghiên cứu và thực hành các thuật toán mã hóa: AES-256, RSA, SHA-256. Thực hiện bài lab mã hóa end-to-end communication sử dụng thư viện Python cryptography.

### Những gì đã học
* So sánh mã hóa đối xứng và bất đối xứng: Các trường hợp sử dụng và đánh đổi hiệu suất
* Hàm băm: SHA-256, HMAC để đảm bảo tính toàn vẹn dữ liệu
* Chữ ký số: Ký và xác minh RSA
* Quản lý khóa: Thực hành tốt nhất trong môi trường production

### Bước tiếp theo
Tìm hiểu về PKI (Public Key Infrastructure) và quản lý chứng chỉ. Thực hành phá mã hóa yếu trong các thử thách CTF.`
  },
  {
    id: '2025-12-27-digital-forensics',
    date: '2025-12-27',
    title: 'Digital Forensics - Phân tích dấu vết tấn công',
    tags: [Tag.LAB],
    level: SkillLevel.INTERMEDIATE,
    images: ['https://picsum.photos/seed/forensic1/1200/800'],
    content: 
    `### Những gì đã làm
Phân tích memory dump sử dụng Volatility framework. Trích xuất artifacts từ disk image với Autopsy để điều tra sự cố.

### Những gì đã học
* Điều tra bộ nhớ: Phân tích tiến trình, kết nối mạng, phát hiện malware
* Artifacts hệ thống file: Lịch sử trình duyệt, khôi phục file đã xóa, phân tích timeline
* Phân tích log: Windows Event Logs, tương quan Linux syslogs
* Chuỗi bảo quản: Thực hành tốt nhất trong xử lý bằng chứng

### Bước tiếp theo
Học thêm về điều tra thiết bị di động (Android/iOS). Thực hành điều tra mạng với Wireshark và NetworkMiner.`
  },
  {
    id: '2025-12-26-binary-exploitation',
    date: '2025-12-26',
    title: 'PWN - Binary Exploitation và Buffer Overflow',
    tags: [Tag.LAB],
    level: SkillLevel.ADVANCED,
    images: ['https://picsum.photos/seed/pwn1/1200/800'],
    content: 
    `### Những gì đã làm
Thực hành khai thác lỗi buffer overflow trong chương trình C. Sử dụng GDB và pwntools để tạo payload và vượt qua bảo vệ stack.

### Những gì đã học
* Cấu trúc Stack: Thao tác EBP, ESP, return address
* Phát triển Shellcode: Viết và inject mã assembly x86
* Cơ chế bảo vệ: DEP, ASLR, Stack Canaries và kỹ thuật vượt qua
* Return-Oriented Programming (ROP): Xây dựng chuỗi ROP

### Bước tiếp theo
Nghiên cứu khai thác heap và lỗ hổng use-after-free. Tham gia các thử thách CTF PWN để thực hành.`
  },
  {
    id: '2025-12-25-java-security',
    date: '2025-12-25',
    title: 'Java Security - Secure Coding Practices',
    tags: [Tag.READING, Tag.LAB],
    level: SkillLevel.INTERMEDIATE,
    images: ['https://picsum.photos/seed/javasec1/1200/800'],
    content: 
    `### Những gì đã làm
Tìm hiểu về các lỗ hổng phổ biến trong ứng dụng Java: SQL Injection, XXE, tấn công Deserialization. Thực hành lập trình an toàn theo hướng dẫn OWASP.

### Những gì đã học
* Xác thực đầu vào: Làm sạch input người dùng, prepared statements
* Xác thực & Ủy quyền: Triển khai Spring Security
* Deserialization an toàn: Tránh lỗ hổng ObjectInputStream
* Mã hóa trong Java: Framework JCE, sử dụng SecureRandom
* Quét phụ thuộc: Phát hiện thư viện dễ bị tấn công với OWASP Dependency-Check

### Bước tiếp theo
Tìm hiểu sâu về phân tích Java bytecode và cơ chế bảo vệ runtime (SecurityManager).`
  },
  {
    id: '2025-12-24-web-security',
    date: '2025-12-24',
    title: 'Web Application Security Testing',
    tags: [Tag.LAB],
    level: SkillLevel.INTERMEDIATE,
    images: ['https://picsum.photos/seed/websec1/1200/800'],
    content: 
    `### Những gì đã làm
Thực hành tấn công và phòng thủ ứng dụng web. Sử dụng Burp Suite để kiểm tra các lỗ hổng OWASP Top 10 trên DVWA và WebGoat.

### Những gì đã học
* XSS (Stored, Reflected, DOM-based): Khai thác và phòng chống
* CSRF: Xác thực token và SameSite cookies
* SQL Injection: Tấn công Union-based, Blind SQLi, Time-based
* Lỗi xác thực: Quản lý session, lỗ hổng reset mật khẩu
* SSRF và XXE: Truy cập mạng nội bộ và tấn công phân tích XML

### Bước tiếp theo
Học về kiểm tra bảo mật API (REST/GraphQL) và lỗ hổng OAuth 2.0. Thực hành bug bounty hunting.`
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
