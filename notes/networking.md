# Networking Tools for Ubuntu

## 1️⃣ Install Basic Networking Tools
```sh
sudo apt update && sudo apt install -y net-tools iputils-ping traceroute dnsutils curl wget whois nmap tcpdump socat
```
### **Included Tools:**
- `net-tools` → Provides `ifconfig`, `netstat`, `route`, etc. (legacy but useful)
- `iputils-ping` → Allows you to use `ping`
- `traceroute` → Traces network paths to an IP
- `dnsutils` → Provides `nslookup` and `dig` for DNS queries
- `curl` → Fetches data from URLs via CLI
- `wget` → Downloads files from the web
- `whois` → Retrieves domain/IP information
- `nmap` → Network scanning tool
- `tcpdump` → Captures and analyzes network packets
- `socat` → Advanced network communication tool

---

## 2️⃣ Install Advanced Networking Tools (Optional)
```sh
sudo apt install -y wireshark tshark arp-scan iperf3 aircrack-ng hydra
```
### **Additional Tools:**
- `wireshark` → GUI-based packet analyzer
- `tshark` → CLI version of Wireshark
- `arp-scan` → Scans local network for active devices
- `iperf3` → Measures network speed and bandwidth
- `aircrack-ng` → Wireless network security tool
- `hydra` → Network login brute-force tool (ethical use only)

---

## 3️⃣ Install Netcat (Swiss Army Knife of Networking)
```sh
sudo apt install -y netcat-openbsd
```
Netcat (`nc`) is useful for testing open ports, transferring data, or creating reverse shells.

---

## 4️⃣ Install Speedtest CLI (Test Internet Speed)
```sh
sudo apt install -y speedtest-cli
```
Run it with:
```sh
speedtest
```

---

## 5️⃣ Install Docker and Kubernetes (For Cloud Networking)
```sh
sudo apt install -y docker.io kubectl
```
These are useful for **container networking**.

---

## ✅ Verify Installation
After installation, test with:
```sh
ifconfig -a
ping 8.8.8.8 -c 4
dig google.com
nslookup google.com
traceroute google.com
netstat -tulnp
nmap -F 127.0.0.1
tcpdump -i any
```

---

## 📌 Need Help?
Use the `man` command to get documentation for any tool:
```sh
man <command>
```
Example:
```sh
man nmap
