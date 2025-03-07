# Linux File Structure

In Linux, the **file system structure** follows a **hierarchical tree format** starting from the **root (`/`) directory**. Every file and directory is placed under `/`. Here's a breakdown of the important directories and their purposes:

---

## **📂 1. Root Directory (`/`)**
- The **top-level directory** in Linux.
- Contains all system files, user files, and application data.

---

## **📂 2. `/bin` - Essential User Binaries**
- Stores essential commands like `ls`, `cp`, `mv`, `cat`, etc.
- Commands needed for system boot and recovery.

**Example:** `/bin/ls`, `/bin/cp`

---

## **📂 3. `/sbin` - System Binaries**
- Stores system administration commands (`root` user tools).
- Commands like `shutdown`, `fdisk`, `iptables` are here.

**Example:** `/sbin/reboot`, `/sbin/mount`

---

## **📂 4. `/etc` - Configuration Files**
- Contains system-wide **configuration files**.
- Example: User accounts (`/etc/passwd`), Network settings (`/etc/network`), SSH settings (`/etc/ssh/sshd_config`).

**Example:** `/etc/hostname`, `/etc/fstab`

---

## **📂 5. `/home` - User Home Directories**
- Stores personal files and settings for each user.
- Each user gets a folder like `/home/kevin/`.

**Example:** `/home/kevin/Desktop/`

---

## **📂 6. `/root` - Root User’s Home Directory**
- Home directory for the `root` (superuser) account.
- Separate from `/home` to keep it secure.

**Example:** `/root/.bashrc`

---

## **📂 7. `/var` - Variable Data Files**
- Stores log files, cache, and temporary data.
- Logs are inside `/var/log/` (e.g., `/var/log/syslog` for system logs).

**Example:** `/var/log/auth.log`, `/var/www/html/` (Web server files)

---

## **📂 8. `/tmp` - Temporary Files**
- Stores temporary files that are **deleted on reboot**.
- Used by applications to store cache and session data.

**Example:** `/tmp/some_temp_file`

---

## **📂 9. `/usr` - User Utilities and Applications**
- Contains installed programs and libraries.
- `usr` stands for **Unix System Resources**.

**Example:**  
  - `/usr/bin/` → Additional user binaries (e.g., `/usr/bin/python`)  
  - `/usr/local/` → Locally installed software  

---

## **📂 10. `/dev` - Device Files**
- Represents hardware devices as files.
- Example:
  - Hard disk: `/dev/sda`
  - USB drive: `/dev/sdb1`
  - Null device: `/dev/null`

**Example:** `ls /dev/`

---

## **📂 11. `/proc` - Process Information**
- Contains information about running processes.
- Virtual filesystem (not stored on disk).

**Example:** `/proc/cpuinfo` (CPU details), `/proc/uptime`

---

## **📂 12. `/sys` - Kernel Information**
- Exposes kernel data and hardware information.
- Similar to `/proc` but used for **kernel interaction**.

**Example:** `/sys/class/net/` (Network interfaces)

---

## **📂 13. `/lib` & `/lib64` - Shared Libraries**
- Stores shared libraries (`.so` files) required by programs.
- `/lib64/` is for **64-bit** systems.

**Example:** `/lib/x86_64-linux-gnu/`

---

## **📂 14. `/media` & `/mnt` - Mount Points**
- `/media/` → Auto-mounted external devices (USB, CD).  
- `/mnt/` → Manually mounted devices.

**Example:**  
  - Insert a USB → Mounted at `/media/usb_drive/`  
  - Manually mount drive → `mount /dev/sdb1 /mnt/mydisk`  

---

## **📂 15. `/opt` - Optional Software**
- Stores third-party software **manually installed** by users.
- Often used for non-standard applications.

**Example:** `/opt/google/chrome/`

---

## **Summary (Cheat Sheet)**

| Directory  | Purpose |
|------------|---------|
| `/` | Root directory (everything starts here) |
| `/bin` | Essential commands (ls, cp, mv, cat) |
| `/sbin` | System admin commands (reboot, shutdown) |
| `/etc` | Configuration files (passwd, hostname) |
| `/home` | User directories (`/home/kevin/`) |
| `/root` | Root user's home |
| `/var` | Logs, cache (`/var/log/`) |
| `/tmp` | Temporary files |
| `/usr` | Installed software (`/usr/bin/`, `/usr/local/`) |
| `/dev` | Device files (`/dev/sda`, `/dev/null`) |
| `/proc` | Running process info (`/proc/cpuinfo`) |
| `/sys` | Kernel & hardware info |
| `/lib` | Shared libraries (`.so` files) |
| `/media` | Auto-mounted external devices (USB, CD) |
| `/mnt` | Manually mounted drives |
| `/opt` | Manually installed third-party software |

---

## **Want a Hands-On Task?**
Try these commands in your terminal:

```bash
ls /
ls /etc
ls /home
cat /proc/cpuinfo
df -h   # Check disk usage of each directory
du -sh /var/log  # Check log file size
```

This will help you explore the Linux file system practically!  

Let me know if you need more details. 🚀
