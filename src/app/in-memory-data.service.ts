import { Injectable } from '@angular/core';
//import { map } from 'rxjs';
import { Question } from 'src/app/shared/question';
import { InMemoryDbService } from 'angular-in-memory-web-api';
//import * as Fragen from 'src/assets/Lpic_Fragebkatalog/fragen.json'


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
async createDb() {
  const questions : Question[] = //Fragen

    [
      {
        "id": "1",
          "frage": "Which type of file system is created by mkfs when it is executed with the block device name only and without any additional parameters?",
          "antworten": [
              {"option": "A. XFS", "istRichtig": false},
              {"option": "B. VFAT", "istRichtig": false},
              {"option": "C. ext2", "istRichtig": true},
              {"option": "D. ext3", "istRichtig": false},
              {"option": "E. ext4", "istRichtig": false}
          ]
      },
      {
        "id": "2",
          "frage": "Which umask value ensures that new directories can be read, written and listed by their owning user, read and listed by their owning group and are not accessible at all for everyone else?",
          "antworten": [
              {"option": "A. 0750", "istRichtig": false},
              {"option": "B. 0027", "istRichtig": true},
              {"option": "C. 0036", "istRichtig": false},
              {"option": "D. 7640", "istRichtig": false},
              {"option": "E. 0029", "istRichtig": false}
          ]
      },
      {
        "id": "3",
          "frage": "Which of the following commands changes the number of days before the ext3 filesystem on /dev/sda1 has to run through a full filesystem check while booting?",
          "antworten": [
              {"option": "A. tune2fs -d 200 /dev/sda1", "istRichtig": false},
              {"option": "B. tune2fs -i 200 /dev/sda1", "istRichtig": true},
              {"option": "C. tune2fs -c 200 /dev/sda1", "istRichtig": false},
              {"option": "D. tune2fs -n 200 /dev/sda1", "istRichtig": false},
              {"option": "E. tune2fs --days 200 /dev/sda1", "istRichtig": false}
          ]
      },
      {
        "id": "4",
          "frage": "Which is the default percentage of reserved space for the root user on new ext4 filesystems?",
          "antworten": [
              {"option": "A. 10%", "istRichtig": false},
              {"option": "B. 3%", "istRichtig": false},
              {"option": "C. 15%", "istRichtig": false},
              {"option": "D. 0%", "istRichtig": false},
              {"option": "E. 5%", "istRichtig": true}
          ]
      },
      {
        "id": "5",
          "frage": "Which of the following is true when a file system, which is neither listed in /etc/fstab nor known to system, is mounted manually?",
          "antworten": [
              {"option": "A. systemd ignores any manual mounts which are not done using the systemctl mount", "istRichtig": false},
              {"option": "B. The command systemctl mountsync can be used to create a mount unit based on the existing mount", "istRichtig": false},
              {"option": "C. systemd automatically generates a mount unit and monitors the mount point without changing it", "istRichtig": true},
              {"option": "D. Unless a systemd mount unit is created, systemd unmounts the file system after a short period of time", "istRichtig": false},
              {"option": "E. systemctl unmount must be used to remove the mount because system opens a file descriptor on the mount point", "istRichtig": false}
          ]
      },
      {
        "id": "6",
          "frage": "What does the command mount --bind do?",
          "antworten": [
              {"option": "A. It makes the contents of one directory available in another directory", "istRichtig": true},
              {"option": "B. It mounts all available filesystems to the current directory", "istRichtig": false},
              {"option": "C. It mounts all user mountable filesystems to the user’s home directory", "istRichtig": false},
              {"option": "D. It mounts all file systems listed in /etc/fstab which have the option userbindset", "istRichtig": false},
              {"option": "E. It permanently mounts a regular file to a directory", "istRichtig": false}
          ]
      },
      {
        "id": "7",
          "frage": "Consider the following output from the command ls -i: 525385 a.txt How would a new file named c.txt be created with the same inode number as a.txt (Inode 525385)?",
          "antworten": [
              {"option": "A. ln -h a.txt c.txt", "istRichtig": false},
              {"option": "B. ln c.txt a.txt", "istRichtig": false},
              {"option": "C. ln a.txt c.txt", "istRichtig": true},
              {"option": "D. ln -f c.txt a.txt", "istRichtig": false},
              {"option": "E. ln -i 525385 c.txt", "istRichtig": false}
          ]
      },
      {
        "id": "8",
          "frage": "Consider the following directory: drwxrwxr-x 2 root sales 4096 Jan 1 15:21 sales. Which command ensures new files created within the directory sales are owned by the group sales? (Choose two.)",
          "antworten": [
              {"option": "A. chmod g+s sales", "istRichtig": true},
              {"option": "B. setpol -R newgroup=sales sales", "istRichtig": false},
              {"option": "C. chgrp -p sales sales", "istRichtig": false},
              {"option": "D. chown --persistent *.sales sales", "istRichtig": false},
              {"option": "E. chmod 2775 sales", "istRichtig": true}
          ]
      },
      {
        "id": "9",
          "frage": "In order to display all currently mounted filesystems, which of the following commands could be used? (Choose two.)",
          "antworten": [
              {"option": "A. cat /proc/self/mounts", "istRichtig": true},
              {"option": "B. free", "istRichtig": false},
              {"option": "C. lsmounts", "istRichtig": false},
              {"option": "D. mount", "istRichtig": true},
              {"option": "E. cat /proc/filesystems", "istRichtig": false}
          ]
      },
      {
        "id": "10",
          "frage": "Which chown command changes the ownership to dave and the group to staff on a file named data.txt?",
          "antworten": [
              {"option": "A. chown dave/staff data.txt", "istRichtig": false},
              {"option": "B. chown -u dave -g staff data.txt", "istRichtig": false},
              {"option": "C. chown --user dave --group staff data.txt", "istRichtig": false},
              {"option": "D. chown dave+staff data.txt", "istRichtig": false},
              {"option": "E. chown dave:staff data.txt", "istRichtig": true}
          ]
      },
      {
        "id": "11",
          "frage": "When considering the use of hard links, what are valid reasons not to use hard links?",
          "antworten": [
              {"option": "A. Hard links are not available on all Linux systems because traditional filesystems, such as ext4, do not support them", "istRichtig": false},
              {"option": "B. Each hard link has individual ownership, permissions and ACLs which can lead to unintended disclosure of file content", "istRichtig": false},
              {"option": "C. Hard links are specific to one filesystem and cannot point to files on another filesystem", "istRichtig": true},
              {"option": "D. If users other than root should be able to create hard links, suln has to be installed and configured", "istRichtig": false},
              {"option": "E. When a hard linked file is changed, a copy of the file is created and consumes additional space", "istRichtig": false}
          ]
      },
      {
        "id": "12",
          "frage": "In compliance with the FHS, in which of the directories are man pages found?",
          "antworten": [
              {"option": "A. /opt/man/", "istRichtig": false},
              {"option": "B. /usr/doc/", "istRichtig": false},
              {"option": "C. /usr/share/man/", "istRichtig": true},
              {"option": "D. /var/pkg/man", "istRichtig": false},
              {"option": "E. /var/man/", "istRichtig": false}
          ]
      },
      {
        "id": "13",
          "frage": "What is the process ID number of the init process on a System V init based system?",
          "antworten": [
              {"option": "A. -1", "istRichtig": false},
              {"option": "B. 0", "istRichtig": false},
              {"option": "C. 1", "istRichtig": true},
              {"option": "D. It is different with each reboot", "istRichtig": false},
              {"option": "E. It is set to the current run level", "istRichtig": false}
          ]
      },
      {
        "id": "14",
          "frage": "Which daemon handles power management events on a Linux system?",
          "antworten": [
              {"option": "A. acpid", "istRichtig": true},
              {"option": "B. batteryd", "istRichtig": false},
              {"option": "C. pwrmgntd", "istRichtig": false},
              {"option": "D. psd", "istRichtig": false},
              {"option": "E. inetd", "istRichtig": false}
          ]
      },
      {
        "id": "15",
          "frage": "Which of the following statements are true about the boot sequence of a PC using a BIOS? (Choose two.)",
          "antworten": [
              {"option": "A. Some parts of the boot process can be configured from the BIOS", "istRichtig": true},
              {"option": "B. Linux does not require the assistance of the BIOS to boot a computer", "istRichtig": false},
              {"option": "C. The BIOS boot process starts only if secondary storage, such as the hard disk, is functional", "istRichtig": false},
              {"option": "D. The BIOS initiates the boot process after turning the computer on", "istRichtig": true},
              {"option": "E. The BIOS is started by loading hardware drivers from secondary storage, such as the hard disk", "istRichtig": false}
          ]
      },
      {
        "id": "16",
          "frage": "What is true regarding UEFI firmware? (Choose two.)",
          "antworten": [
              {"option": "A. It can read and interpret partition tables", "istRichtig": true},
              {"option": "B. It can use and read certain file systems", "istRichtig": true},
              {"option": "C. It stores its entire configuration on the /boot/ partition", "istRichtig": false},
              {"option": "D. It is stored in a special area within the GPT metadata", "istRichtig": false},
              {"option": "E. It is loaded from a fixed boot disk position", "istRichtig": false}
          ]
      },
      {
        "id": "17",
          "frage": "A faulty kernel module is causing issues with a network interface card. Which of the following actions ensures that this module is not loaded automatically when the system boots?",
          "antworten": [
              {"option": "A. Using lsmod --remove --autocleanwithout specifying the name of a specific module", "istRichtig": false},
              {"option": "B. Using modinfo -kfollowed by the name of the offending module", "istRichtig": false},
              {"option": "C. Using modprobe -rfollowed by the name of the offending module", "istRichtig": false},
              {"option": "D. Adding a blacklist line including the name of the offending module to the file /etc/modprobe.d/blacklist.conf", "istRichtig": true},
              {"option": "E. Deleting the kernel module’s directory from the file system and recompiling the kernel, including its modules", "istRichtig": false}
          ]
      },
      {
        "id": "18",
          "frage": "When is the content of the kernel ring buffer reset? (Choose two.)",
          "antworten": [
              {"option": "A. When the ring buffer is explicitly reset using the command dmesg --clear", "istRichtig": true},
              {"option": "B. When the ring buffer is read using dmesg without any additional parameters", "istRichtig": false},
              {"option": "C. When a configurable amount of time, 15 minutes by default, has passed", "istRichtig": false},
              {"option": "D. When the kernel loads a previously unloaded kernel module", "istRichtig": false},
              {"option": "E. When the system is shut down or rebooted", "istRichtig": true}
          ]
      },
      {
        "id": "19",
          "frage": "What is the first program the Linux kernel starts at boot time when using System V init?",
          "antworten": [
              {"option": "A. /lib/init.so", "istRichtig": false},
              {"option": "B. /proc/sys/kernel/init", "istRichtig": false},
              {"option": "C. /etc/rc.d/rcinit", "istRichtig": false},
              {"option": "D. /sbin/init", "istRichtig": true},
              {"option": "E. /boot/init", "istRichtig": false}
          ]
      },
      {
        "id": "20",
          "frage": "A Debian package creates several files during its installation. Which of the following commands searches for packages owning the file /etc/debian_version?",
          "antworten": [
              {"option": "A. apt-get search /etc/debian_version", "istRichtig": false},
              {"option": "B. apt -r /etc/debian_version", "istRichtig": false},
              {"option": "C. find /etc/debian_version -dpkg", "istRichtig": false},
              {"option": "D. dpkg -S  /etc/debian_version", "istRichtig": true},
              {"option": "E. apt-file /etc/debian_version", "istRichtig": false}
          ]
      },
      {
        "id": "21",
          "frage": "What is contained on the EFI System Partition?",
          "antworten": [
              {"option": "A. The Linux root file system", "istRichtig": false},
              {"option": "B. The first stage boot loader", "istRichtig": true},
              {"option": "C. The default swap space file", "istRichtig": false},
              {"option": "D. The Linux default shell binaries", "istRichtig": false},
              {"option": "E. The user home directories", "istRichtig": false}
          ]
      },
      {
        "id": "22",
          "frage": "Which of the following directories on a 64 bit Linux system typically contain shared libraries? (Choose two.)",
          "antworten": [
              {"option": "A. ~/.lib64/", "istRichtig": false},
              {"option": "B. /usr/lib64/", "istRichtig": true},
              {"option": "C. /var/lib64/", "istRichtig": false},
              {"option": "D. /lib64/", "istRichtig": true},
              {"option": "E. /opt/lib64/", "istRichtig": false}
          ]
      },
      {
        "id": "23",
          "frage": "Which of the following files exist in a standard GRUB 2 installation? (Choose two.)",
          "antworten": [
              {"option": "A. /boot/grub/stages/stage0", "istRichtig": false},
              {"option": "B. /boot/grub/i386-pc/lvm.mod", "istRichtig": true},
              {"option": "C. /boot/grub/fstab", "istRichtig": false},
              {"option": "D. /boot/grub/grub.cfg", "istRichtig": true},
              {"option": "E. /boot/grub/linux/vmlinuz", "istRichtig": false}
          ]
      },
      {
        "id": "24",
          "frage": "Which of the following commands installs all packages with a name ending with the string foo?",
          "antworten": [
              {"option": "A. zypper get \"*foo\"", "istRichtig": false},
              {"option": "B. zypper update \"foo?\"", "istRichtig": false},
              {"option": "C. zypper force \"foo*\"", "istRichtig": false},
              {"option": "D. zypper install \"*foo\"", "istRichtig": true},
              {"option": "E. zypper add \".*foo\"", "istRichtig": false}
          ]
      },
      {
        "id": "25",
          "frage": "Which of the following properties of a Linux system should be changed when a virtual machine is cloned? (Choose two.)",
          "antworten": [
              {"option": "A. The partitioning scheme", "istRichtig": false},
              {"option": "B. The file system", "istRichtig": false},
              {"option": "C. The D-Bus Machine ID", "istRichtig": true},
              {"option": "D. The permissions of /root/", "istRichtig": false},
              {"option": "E. The SSH host keys", "istRichtig": true}
          ]
      },
      {
        "id": "26",
          "frage": "Which of the following commands installs GRUB 2 into the master boot record on the third hard disk?",
          "antworten": [
              {"option": "A. grub2 install /dev/sdc", "istRichtig": false},
              {"option": "B. grub-mkrescue /dev/sdc", "istRichtig": false},
              {"option": "C. grub-mbrinstall /dev/sdc", "istRichtig": false},
              {"option": "D. grub-setup /dev/sdc", "istRichtig": false},
              {"option": "E. grub-install /dev/sdc", "istRichtig": true}
          ]
      },
      {
        "id": "27",
          "frage": "Which of the following partition types is used for Linux swap spaces when partitioning hard disk drives?",
          "antworten": [
              {"option": "A. 7", "istRichtig": false},
              {"option": "B. 82", "istRichtig": true},
              {"option": "C. 83", "istRichtig": false},
              {"option": "D. 8e", "istRichtig": false},
              {"option": "E. fd", "istRichtig": false}
          ]
      },
      {
        "id": "28",
          "frage": "What is true regarding the configuration of yum? (Choose two.)",
          "antworten": [
              {"option": "A. Changes to the repository configuration become active after running yum confupdate", "istRichtig": true},
              {"option": "B. Changes to the yum configuration become active after restarting the yumd service", "istRichtig": false},
              {"option": "C. The configuration of package repositories can be divided into multiple files", "istRichtig": true},
              {"option": "D. Repository configurations can include variables such as $basearch or $releasever", "istRichtig": false},
              {"option": "E. In case /etc/yum.repos.d/ contains files, /etc/yum.config ignored", "istRichtig": false}
          ]
      },
      {
        "id": "29",
          "frage": "Which of the following apt-get subcommands installs the newest versions of all currently installed packages?",
          "antworten": [
              {"option": "A. auto-update", "istRichtig": false},
              {"option": "B. dist-upgrade", "istRichtig": true},
              {"option": "C. full-upgrade", "istRichtig": false},
              {"option": "D. install", "istRichtig": false},
              {"option": "E. update", "istRichtig": false}
          ]
      },
      {
        "id": "30",
          "frage": "Which command uninstalls a package but keeps its configuration files in case the package is re-installed?",
          "antworten": [
              {"option": "A. dpkg -s pkgname", "istRichtig": false},
              {"option": "B. dpkg -L pkgname", "istRichtig": false},
              {"option": "C. dpkg -P pkgname", "istRichtig": true},
              {"option": "D. dpkg -v pkgname", "istRichtig": false},
              {"option": "E. dpkg -r pkgname", "istRichtig": false}
          ]
      },
      {
        "id": "31",
          "frage": "Which of the following commands lists the dependencies of the RPM package file foo.rpm?",
          "antworten": [
              {"option": "A. rpm -qpR foo.rpm", "istRichtig": true},
              {"option": "B. rpm -dep foo", "istRichtig": false},
              {"option": "C. rpm -ld foo.rpm", "istRichtig": false},
              {"option": "D. rpm -R foo.rpm", "istRichtig": false},
              {"option": "E. rpm -pD foo", "istRichtig": false}
          ]
      },
      {
        "id": "32",
          "frage": "What is the maximum niceness value that a regular user can assign to a process with the nice command when executing a new process?",
          "antworten": [
              {"option": "A. 9", "istRichtig": false},
              {"option": "B. 15", "istRichtig": false},
              {"option": "C. 19", "istRichtig": true},
              {"option": "D. 49", "istRichtig": false},
              {"option": "E. 99", "istRichtig": false}
          ]
      },
      {
        "id": "33",
          "frage": "Which of the following commands list all files and directories within the /tmp/ directory and its subdirectories which are owned by the user root? (Choose two.)",
          "antworten": [
              {"option": "A. find /tmp -user root -print", "istRichtig": true},
              {"option": "B. find -path /tmp -uid root", "istRichtig": false},
              {"option": "C. find /tmp -uid root -print", "istRichtig": false},
              {"option": "D. find /tmp -user root", "istRichtig": true},
              {"option": "E. find -path /tmp -user root -print", "istRichtig": false}
          ]
      },
      {
        "id": "34",
          "frage": "Which of the following are valid stream redirection operators within Bash? (Choose two.)",
          "antworten": [
              {"option": "A. <", "istRichtig": true},
              {"option": "B. #>", "istRichtig": false},
              {"option": "C. %>", "istRichtig": false},
              {"option": "D. >>>", "istRichtig": false},
              {"option": "E. 2>&1", "istRichtig": true}
          ]
      },
      {
        "id": "35",
          "frage": "Which of the following vi commands deletes two lines, the current and the following line?",
          "antworten": [
              {"option": "A. d2", "istRichtig": false},
              {"option": "B. 2d", "istRichtig": false},
              {"option": "C. 2dd", "istRichtig": true},
              {"option": "D. dd2", "istRichtig": false},
              {"option": "E. de12", "istRichtig": false}
          ]
      },
      {
        "id": "36",
          "frage": "The command dbmaint & was used to run dbmaint in the background. However, dbmaint is terminated after logging out of the system. Which alternative dbmaint invocation lets dbmaint continue to run, even when the user, running the program, logs out?",
          "antworten": [
              {"option": "A. job -b dmaint", "istRichtig": false},
              {"option": "B. dbmaint &>/dev/pts/null", "istRichtig": false},
              {"option": "C. nohup dbmaint &", "istRichtig": true},
              {"option": "D. bg dbmaint", "istRichtig": false},
              {"option": "E. wait dbmaint", "istRichtig": false}
          ]
      },
      {
        "id": "37",
          "frage": "From a Bash shell, which of the following commands directly execute the instructions from the file /usr/local/bin/runme.sh without starting a subshell? (Choose two.)",
          "antworten": [
              {"option": "A. source /usr/local/bin/runme.sh", "istRichtig": true},
              {"option": "B. /usr/local/bin/runme.sh", "istRichtig": false},
              {"option": "C. /bin/bash /usr/local/bin/runme.sh", "istRichtig": false},
              {"option": "D. .  /usr/local/bin/runme.sh", "istRichtig": true},
              {"option": "E. run /usr/local/bin/runme.sh", "istRichtig": false}
          ]
      },
      {
        "id": "38",
          "frage": "Immediately after deleting 3 lines of text in vi and moving the cursor to a different line, which single character command will insert the deleted content below the current line?",
          "antworten": [
              {"option": "A. i (lowercase)", "istRichtig": false},
              {"option": "B. p (lowercase)", "istRichtig": true},
              {"option": "C. P (uppercase)", "istRichtig": false},
              {"option": "D. U (uppercase)", "istRichtig": false},
              {"option": "E. u (lowercase)", "istRichtig": false}
          ]
      },
      {
        "id": "39",
          "frage": "Which of the following commands changes all CR-LF line breaks in the text file userlist.txt to Linux standard LF line breaks and stores the result in newlist.txt?",
          "antworten": [
              {"option": "A. tr -d '\\r' < userlist.txt > newlist.txt", "istRichtig": true},
              {"option": "B. tr -c '\\n\\r' '' <newlist.txt> userlist.txt", "istRichtig": false},
              {"option": "C. tr '\\r\\n' '' <userlist.txt> newlist.txt", "istRichtig": false},
              {"option": "D. tr '\\r' '\\n' userlist.txt newlist.txt", "istRichtig": false},
              {"option": "E. tr -s '/^M/^J/' userlist.txt newlist.txt", "istRichtig": false}
          ]
      },
      {
        "id": "40",
          "frage": "Given the following input stream: txt1.txt atxt.txt txtB.txt Which of the following regular expressions turns this input stream into the following output stream?",
          "antworten": [
              {"option": "A. s/^.txt/.bak/", "istRichtig": false},
              {"option": "B. s/txt/bak.txt/", "istRichtig": false},
              {"option": "C. s/txt$/bak.txt/", "istRichtig": true},
              {"option": "D. s/^txt$/.bak^/", "istRichtig": false},
              {"option": "E. s/[.txt]/.bak$1/", "istRichtig": false}
          ]
      },
      {
        "id": "41",
          "frage": "Which command must be entered before exiting vi to save the current file as filea.txt?",
          "antworten": [
              {"option": "A. %s filea.txt", "istRichtig": false},
              {"option": "B. %w filea.txt", "istRichtig": false},
              {"option": ":save filea.txt", "istRichtig": false},
              {"option": "D. :w filea.txt", "istRichtig": true},
              {"option": "E. :s filea.txt", "istRichtig": false}
          ]
      },
      {
        "id": "42",
          "frage": "Which of the following signals is sent to a process when the key combination Ctrl+C is pressed on the keyboard?",
          "antworten": [
              {"option": "A. SIGTERM", "istRichtig": false},
              {"option": "B. SIGCONT", "istRichtig": false},
              {"option": "C. SIGSTOP", "istRichtig": false},
              {"option": "D. SIGKILL", "istRichtig": false},
              {"option": "E. SIGINT", "istRichtig": true}
          ]
      },
      {
        "id": "43",
          "frage": "Which of the following commands displays the output of the foo command on the screen and also writes it to a file called /tmp/foodata?",
          "antworten": [
              {"option": "A. foo | less /tmp/foodata", "istRichtig": false},
              {"option": "B. foo | cp /tmp/foodata", "istRichtig": false},
              {"option": "C. foo > /tmp/foodata", "istRichtig": false},
              {"option": "D. foo | tee /tmp/foodata", "istRichtig": true},
              {"option": "E. foo > stdout >> /tmp/foodata", "istRichtig": false}
          ]
      },
      {
        "id": "44",
          "frage": "What output will be displayed when the user fred executes the following command? echo 'fred $USER’",
          "antworten": [
              {"option": "A. fred fred", "istRichtig": false},
              {"option": "B. fred /home/fred/", "istRichtig": false},
              {"option": "C. 'fred $USER’", "istRichtig": false},
              {"option": "D. fred $USER", "istRichtig": true},
              {"option": "E. 'fred fred’", "istRichtig": false}
          ]
      },
      {
        "id": "45",
          "frage": "Which of the following commands displays the path to the executable file that would be executed when the command foo is invoked?",
          "antworten": [
              {"option": "A. lsattr foo", "istRichtig": false},
              {"option": "B. apropos foo", "istRichtig": false},
              {"option": "C. locate foo", "istRichtig": false},
              {"option": "D. whatis foo", "istRichtig": false},
              {"option": "E. which foo", "istRichtig": true}
          ]
      },
      {
        "id": "46",
          "frage": "When redirecting the output of find to the xargs command, what option to find is useful if the filenames contain spaces?",
          "antworten": [
              {"option": "A. -rep-space", "istRichtig": false},
              {"option": "B. -printnul", "istRichtig": true},
              {"option": "C. -nospace", "istRichtig": false},
              {"option": "D. -ignore-space", "istRichtig": false},
              {"option": "E. -print0", "istRichtig": false}
          ]
      },
      {
        "id": "47",
          "frage": "Which of the following commands can be used to determine how long the system has been running? (Choose two.)",
          "antworten": [
              {"option": "A. uptime", "istRichtig": true},
              {"option": "B. up", "istRichtig": false},
              {"option": "C. time --up", "istRichtig": false},
              {"option": "D. uname -u", "istRichtig": false},
              {"option": "E. top", "istRichtig": true}
          ]
      },
      {
        "id": "48",
          "frage": "What is true regarding the command ls > files if files does not exist?",
          "antworten": [
              {"option": "A. The output of ls is printed to the terminal", "istRichtig": false},
              {"option": "B. files is created and contains the output of ls", "istRichtig": true},
              {"option": "C. An error message is shown and ls is not executed", "istRichtig": false},
              {"option": "D. The command files is executed and receives the output of ls", "istRichtig": false},
              {"option": "E. Any output of ls is discarded", "istRichtig": false}
          ]
      },
      {
        "id": "49",
          "frage": "Which of the following files, located in a user’s home directory, contains the Bash history?",
          "antworten": [
              {"option": "A. .bashrc_history", "istRichtig": false},
              {"option": "B. .bash_histfile", "istRichtig": false},
              {"option": "C. .history", "istRichtig": false},
              {"option": "D. .bash_history", "istRichtig": true},
              {"option": "E. .history_bash", "istRichtig": false}
          ]
      },
      {
        "id": "50",
          "frage": "Which wildcards will match the following filenames? (Choose two.) ttyS0 ttyS1 ttyS2",
          "antworten": [
              {"option": "A. ttyS[1-5]", "istRichtig": false},
              {"option": "B. tty?[0-5]", "istRichtig": true},
              {"option": "C. tty*2", "istRichtig": false},
              {"option": "D. tty[A-Z][012]", "istRichtig": true},
              {"option": "E. tty[Ss][02]", "istRichtig": false}
          ]
      },
      {
        "id": "51",
          "frage": "Which of the following commands redirects the output of ls to standard error?",
          "antworten": [
              {"option": "A. ls >-1", "istRichtig": false},
              {"option": "B. ls <<ERR", "istRichtig": false},
              {"option": "C. ls >&2", "istRichtig": true},
              {"option": "D. ls >>2", "istRichtig": false},
              {"option": "E. ls |error", "istRichtig": false}
          ]
      },
      {
        "id": "52",
          "frage": "Which of the following commands displays the contents of a gzip compressed tar archive?",
          "antworten": [
              {"option": "A. gzip archive.tgz | tar xvf", "istRichtig": false},
              {"option": "B. tar -fzt archive.tgz", "istRichtig": false},
              {"option": "C. gzip -d archive.tgz | tar tvf", "istRichtig": false},
              {"option": "D. tar cf archive.tgz", "istRichtig": false},
              {"option": "E. tar ztf archive.tgz", "istRichtig": true}
          ]
      },
      {
        "id": "53",
          "frage": "Which of the following commands prints a list of usernames (first column) and their primary group (fourth column) from the /etc/passwd file?",
          "antworten": [
              {"option": "A. fmt -f 1,4 /etc/passwd", "istRichtig": false},
              {"option": "B. cut -d : -f 1,4 /etc/passwd", "istRichtig": true},
              {"option": "C. sort -t : -k 1,4 /etc/passwd", "istRichtig": false},
              {"option": "D. paste -f 1,4 /etc/passwd", "istRichtig": false},
              {"option": "E. split -c 1,4 /etc/passwd", "istRichtig": false}
          ]
      },
      {
        "id": "54",
          "frage": "Which of the following regular expressions represents a single upper-case letter?",
          "antworten": [
              {"option": "A. :UPPER:", "istRichtig": false},
              {"option": "B. [A-Z]", "istRichtig": true},
              {"option": "C. !a-z", "istRichtig": false},
              {"option": "D. %C", "istRichtig": false},
              {"option": "E. {AZ}", "istRichtig": false}
          ]
      },
      {
        "id": "55",
          "frage": "Given a log file loga.log with timestamps of the format DD/MM/YYYY:hh:mm:ss, which command filters out all log entries in the time period between 8:00 am and 8:59 am?",
          "antworten": [
              {"option": "A. grep -E ':08:[09]+:[09]+' loga.log", "istRichtig": false},
              {"option": "B. grep -E ':08:[00]+' loga.log", "istRichtig": false},
              {"option": "C. grep -E loga.log ':08:[0-9]+:[0-9]+'", "istRichtig": false},
              {"option": "D. grep loga.log ':08:[0-9]:[0-9]'", "istRichtig": false},
              {"option": "E. grep -E ':08:[0-9]+:[0-9]+' loga.log", "istRichtig": true}
          ]
      },
      {
        "id": "56",
          "frage": "Instead of supplying an explicit device in /etc/fstab for mounting, what other options may be used to identify the intended partition? (Choose two.)",
          "antworten": [
              {"option": "A. LABEL", "istRichtig": true},
              {"option": "B. ID", "istRichtig": false},
              {"option": "C. FIND", "istRichtig": false},
              {"option": "D. NAME", "istRichtig": false},
              {"option": "E. UUID", "istRichtig": true}
          ]
      },
      {
        "id": "57",
          "frage": "A yum repository can declare sets of related packages. Which yum command installs all packages belonging to the group admintools?",
          "antworten": [
              {"option": "A. yum pkgsel --install admintools", "istRichtig": false},
              {"option": "B. yum install admintools/*", "istRichtig": false},
              {"option": "C. yum groupinstall admintools", "istRichtig": true},
              {"option": "D. yum taskinstall admintools", "istRichtig": false},
              {"option": "E. yum collection install admintools", "istRichtig": false}
          ]
      },
      {
        "id": "58",
          "frage": "Which of the following commands installs the GRUB boot files into the currently active file systems and the boot loader into the first partition of the first disk?",
          "antworten": [
              {"option": "A. grub-install /dev/sda", "istRichtig": false},
              {"option": "B. grub-install /dev/sda1", "istRichtig": true},
              {"option": "C. grub-install current /dev/sda0", "istRichtig": false},
              {"option": "D. grub-install /dev/sda0", "istRichtig": false},
              {"option": "E. grub-install current /dev/sda1", "istRichtig": false}
          ]
      },
      {
        "id": "59",
          "frage": "Which of the following files are found in the /boot/ filesystem? (Choose two.)",
          "antworten": [
              {"option": "A. Linux kernel images", "istRichtig": true},
              {"option": "B. Bash shell binaries", "istRichtig": false},
              {"option": "C. systemd target and service units", "istRichtig": false},
              {"option": "D. Initial ramdisk images", "istRichtig": true},
              {"option": "E. fsck binaries", "istRichtig": false}
          ]
      },
      {
        "id": "60",
          "frage": "Which file defines the network locations from where the Debian package manager downloads software packages?",
          "antworten": [
              {"option": "A. /etc/dpkg/dpkg.cfg", "istRichtig": false},
              {"option": "B. /etc/apt/apt.conf.d", "istRichtig": false},
              {"option": "C. /etc/apt/apt.conf", "istRichtig": false},
              {"option": "D. /etc/dpkg/dselect.cfg", "istRichtig": false},
              {"option": "E. /etc/apt/sources.list", "istRichtig": true}
          ]
      },
      {
        "id": "61",
          "frage": "When removing a package on a system using dpkg package management, which dpkg option ensures configuration files are removed as well?",
          "antworten": [
              {"option": "A. --clean", "istRichtig": false},
              {"option": "B. --purge", "istRichtig": true},
              {"option": "C. --vacuum", "istRichtig": false},
              {"option": "D. --remove", "istRichtig": false},
              {"option": "E. --declare", "istRichtig": false}
          ]
      },
      {
        "id": "62",
          "frage": "Which of the following statements are correct when comparing Linux containers with traditional virtual machines (e.g. LXC vs. KVM)? (Choose three.)",
          "antworten": [
              {"option": "A. Containers are a lightweight virtualization method where the kernel controls process isolation and resource management.", "istRichtig": true},
              {"option": "B. Fully virtualized machines can run any operating system for a specific hardware architecture within the virtual machine.", "istRichtig": true},
              {"option": "C. Containers are completely decoupled from the host system’s physical hardware and can only use emulated virtual hardware devices.", "istRichtig": false},
              {"option": "D. The guest environment for fully virtualized machines is created by a hypervisor which provides virtual and emulated hardware devices.", "istRichtig": true},
              {"option": "E. Containers on the same host can use different operating systems, as the container hypervisor creates separate kernel execution.", "istRichtig": false}
          ]
      },
      {
        "id": "63",
          "frage": "The installation of a local Debian package failed due to unsatisfied dependencies. Which of the following commands installs missing dependencies and completes the interrupted package installation?",
          "antworten": [
              {"option": "A. dpkg --fix --all", "istRichtig": false},
              {"option": "B. apt-get autoinstall", "istRichtig": false},
              {"option": "C. dpkg-reconfigure --all", "istRichtig": false},
              {"option": "D. apt-get all", "istRichtig": false},
              {"option": "E. apt-get install -f", "istRichtig": true}
          ]
      },
      {
        "id": "64",
          "frage": "Which of the following commands lists all currently installed packages when using RPM package management?",
          "antworten": [
              {"option": "A. yum --query --all", "istRichtig": false},
              {"option": "B. yum --list --installed", "istRichtig": false},
              {"option": "C. rpm --query --list", "istRichtig": false},
              {"option": "D. rpm --list --installed", "istRichtig": true},
              {"option": "E. rpm --query --all", "istRichtig": false}
          ]
      },
      {
        "id": "65",
          "frage": "Which of the following commands are valid in the GRUB 2 configuration file? (Choose two.)",
          "antworten": [
              {"option": "A. menuentry", "istRichtig": true},
              {"option": "B. uefi", "istRichtig": false},
              {"option": "C. pxe-ifconfig", "istRichtig": false},
              {"option": "D. insmod", "istRichtig": true},
              {"option": "E. kpartx", "istRichtig": false}
          ]
      },
      {
        "id": "66",
          "frage": "What is the purpose of the ldd command?",
          "antworten": [
              {"option": "A. It lists which shared libraries a binary needs to run.", "istRichtig": true},
              {"option": "B. It installs and updates installed shared libraries.", "istRichtig": false},
              {"option": "C. It turns a dynamically linked binary into a static binary.", "istRichtig": false},
              {"option": "D. It defines which version of a library should be used by default.", "istRichtig": false},
              {"option": "E. It runs a binary with an alternate library search path.", "istRichtig": false}
          ]
      },
      {
        "id": "67",
          "frage": "What can the Logical Volume Manager (LVM) be used for? (Choose three.)",
          "antworten": [
              {"option": "A. To create snapshots.", "istRichtig": true},
              {"option": "B. To dynamically change the size of logical volumes.", "istRichtig": true},
              {"option": "C. To dynamically create or delete logical volumes.", "istRichtig": true},
              {"option": "D. To create RAID 9 arrays.", "istRichtig": false},
              {"option": "E. To encrypt logical volumes.", "istRichtig": false}
          ]
      },
      {
        "id": "68",
          "frage": "What are the main differences between GPT and MBR partition tables regarding maximum number and size of partitions? (Choose two.)",
          "antworten": [
              {"option": "A. MBR can handle partition sizes up to 4 TB, whereas GPT supports partition sizes up to 128 ZB.", "istRichtig": true},
              {"option": "B. By default, GPT can manage up to 128 partitions while MBR only supports four primary partitions.", "istRichtig": false},
              {"option": "C. By default, GPT can manage up to 64 partitions while MBR only supports 16 primary partitions.", "istRichtig": false},
              {"option": "D. MBR can handle partition sizes up to 2.2 TB, whereas GPT supports sizes up to 9.4 ZB.", "istRichtig": true},
              {"option": "E. Both GPT and MBR support up to four primary partitions, each with up to 4096 TB.", "istRichtig": false}
          ]
      },
      {
        "id": "69",
          "frage": "A backup software heavily uses hard links between files which have not been changed in between two backup runs. Which benefits are realized due to these hard links? (Choose two.)",
          "antworten": [
              {"option": "A. The old backups can be moved to slow backup media, such as tapes, while still serving as hard link target in new backups.", "istRichtig": true},
              {"option": "B. The backup runs faster because hard links are asynchronous operations, postponing the copy operation to a later point in time.", "istRichtig": false},
              {"option": "C. The backup is guaranteed to be uncharged because a hard linked file cannot be modified after its creation.", "istRichtig": false},
              {"option": "D. The backup consumes less space because the hard links point to the same data on disk instead of storing redundant copies.", "istRichtig": true},
              {"option": "E. The backup runs faster because, instead of copying the data of each file, hard links only change file system meta data.", "istRichtig": false}
          ]
      },
      {
        "id": "70",
          "frage": "How many fields are in a syntactically correct line of /etc/fstab?",
          "antworten": [
              {"option": "A. 3", "istRichtig": false},
              {"option": "B. 4", "istRichtig": false},
              {"option": "C. 5", "istRichtig": false},
              {"option": "D. 6", "istRichtig": true},
              {"option": "E. 7", "istRichtig": false}
          ]
      },
      {
        "id": "71",
          "frage": "Running chmod 640 filea.txt as a regular user doesn’t update filea.txt’s permission. What might be a reason why chmod cannot modify the permissions? (Choose two.)",
          "antworten": [
              {"option": "A. filea.txt is owned by another user and a regular user cannot change the permissions of another user’s file.", "istRichtig": true},
              {"option": "B. filea.txt is a symbolic link whose permissions are a fixed value which cannot be changed.", "istRichtig": true},
              {"option": "C. filea.txt has the sticky bit set and a regular user cannot remove this permission.", "istRichtig": false},
              {"option": "D. filea.txt is a hard link whose permissions are inherited from the target and cannot be set directly.", "istRichtig": false},
              {"option": "E. filea.txt has the SetUID bit set which imposes the restriction that only the root user can make changes to the file.", "istRichtig": false}
          ]
      },
      {
        "id": "72",
          "frage": "Which of the following Linux filesystems preallocate a fixed number of inodes when creating a new filesystem instead of generating them as needed? (Choose two.)",
          "antworten": [
              {"option": "A. JFS", "istRichtig": false},
              {"option": "B. ext3", "istRichtig": true},
              {"option": "C. XFS", "istRichtig": false},
              {"option": "D. ext2", "istRichtig": true},
              {"option": "E. procfs", "istRichtig": false}
          ]
      },
      {
        "id": "73",
          "frage": "Which of the following commands sets the SetUID permission on the executable /bin/foo?",
          "antworten": [
              {"option": "A. chmod 4755 /bin/foo", "istRichtig": true},
              {"option": "B. chmod 1755 /bin/foo", "istRichtig": false},
              {"option": "C. chmod u-s /bin/foo", "istRichtig": false},
              {"option": "D. chmod 755+s /bin/foo", "istRichtig": false},
              {"option": "E. chmod 2755 /bin/foo", "istRichtig": false}
          ]
      },
      {
        "id": "74",
          "frage": "Which of the following commands can be used to display the inode number of a given file? (Choose two.)",
          "antworten": [
              {"option": "A. inode", "istRichtig": false},
              {"option": "B. ln", "istRichtig": false},
              {"option": "C. ls", "istRichtig": true},
              {"option": "D. cp", "istRichtig": false},
              {"option": "E. stat", "istRichtig": true}
          ]
      },
      {
        "id": "75",
          "frage": "Which of the following settings for umask ensures that new files have the default permissions -rw-r-----?",
          "antworten": [
              {"option": "A. 0017", "istRichtig": false},
              {"option": "B. 0640", "istRichtig": false},
              {"option": "C. 0038", "istRichtig": false},
              {"option": "D. 0227", "istRichtig": false},
              {"option": "E. 0027", "istRichtig": true}
          ]
      },
      {
        "id": "76",
          "frage": "After a power outage, the XFS file system of /dev/sda3 is inconsistent. How can the existing file system errors be fixed?",
          "antworten": [
              {"option": "A. By using mount -f to force a mount of the file system", "istRichtig": false},
              {"option": "B. By running xfsck on the file system", "istRichtig": false},
              {"option": "C. By mounting the file system with the option xfs_repair", "istRichtig": false},
              {"option": "D. By running xfsadmin repairon the file system", "istRichtig": false},
              {"option": "E. By running xfs_repair on the file system", "istRichtig": true}
          ]
      },
      {
        "id": "77",
          "frage": "Which of the following properties of an existing file changes when a hard link pointing to that file is created?",
          "antworten": [
              {"option": "A. File size", "istRichtig": false},
              {"option": "B. Link count", "istRichtig": true},
              {"option": "C. Modify timestamp", "istRichtig": false},
              {"option": "D. Inode number", "istRichtig": false},
              {"option": "E. Permissions", "istRichtig": false}
          ]
      },
      {
        "id": "78",
          "frage": "Which of the following commands show how the shell handles a specific command?",
          "antworten": [
              {"option": "A. where", "istRichtig": false},
              {"option": "B. type", "istRichtig": true},
              {"option": "C. stat", "istRichtig": false},
              {"option": "D. case", "istRichtig": false},
              {"option": "E. fileinfo", "istRichtig": false}
          ]
      },
      {
        "id": "79",
          "frage": "When in Normal mode in vi, which character can be used to begin a reverse search of the text?",
          "antworten": [
              {"option": "A. r", "istRichtig": false},
              {"option": "B. /", "istRichtig": false},
              {"option": "C. F", "istRichtig": false},
              {"option": "D. ?", "istRichtig": true},
              {"option": "E. s", "istRichtig": false}
          ]
      },
      {
        "id": "80",
          "frage": "Which of the following commands displays the manual page command from section 1?",
          "antworten": [
              {"option": "A. man command(1)", "istRichtig": false},
              {"option": "B. man command@1", "istRichtig": false},
              {"option": "C. man 1 command", "istRichtig": true},
              {"option": "D. man 1.command", "istRichtig": false},
              {"option": "E. man -s 1 command", "istRichtig": false}
          ]
      },
      {
        "id": "81",
          "frage": "Which of the following commands creates or, in case it already exists, overwrites a file called data with the output of ls?",
          "antworten": [
              {"option": "A. ls 3> data", "istRichtig": false},
              {"option": "B. ls >& data", "istRichtig": false},
              {"option": "C. ls > data", "istRichtig": true},
              {"option": "D. ls >> data", "istRichtig": false},
              {"option": "E. ls >>> data", "istRichtig": false}
          ]
      },
      {
        "id": "82",
          "frage": "Which of the following commands is used to change options and positional parameters within a running Bash shell?",
          "antworten": [
              {"option": "A. history", "istRichtig": false},
              {"option": "B. setsh", "istRichtig": false},
              {"option": "C. bashconf", "istRichtig": false},
              {"option": "D. set", "istRichtig": true},
              {"option": "E. envsetup", "istRichtig": false}
          ]
      },
      {
        "id": "83",
          "frage": "Which of the following commands display the IDs of all processes owned by root? (Choose two.)",
          "antworten": [
              {"option": "A. pgrep -c root", "istRichtig": false},
              {"option": "B. pgrep -u root", "istRichtig": true},
              {"option": "C. pgrep -f root", "istRichtig": false},
              {"option": "D. pgrep -U 0", "istRichtig": false},
              {"option": "E. pgrep -c 0", "istRichtig": true}
          ]
      },
      {
        "id": "84",
          "frage": "Which of the following sequences in the vi editor saves the opened document and exits the editor? (Choose two.)",
          "antworten": [
              {"option": "A. Ctrl XX", "istRichtig": false},
              {"option": "B. Ctrl :W", "istRichtig": false},
              {"option": "C. Esc zz", "istRichtig": false},
              {"option": "D. Esc :wq", "istRichtig": true},
              {"option": "E. Esc ZZ", "istRichtig": true}
          ]
      },
      {
        "id": "85",
          "frage": "What is the effect of the -v option for the grep command?",
          "antworten": [
              {"option": "A. It enables color to highlight matching parts.", "istRichtig": false},
              {"option": "B. It shows the command’s version information.", "istRichtig": false},
              {"option": "C. It only outputs non-matching lines.", "istRichtig": true},
              {"option": "D. It changes the output order showing the last matching line first.", "istRichtig": false},
              {"option": "E. It outputs all lines and prefixes matching lines with a+.", "istRichtig": false}
          ]
      },
      {
        "id": "86",
          "frage": "Which of the following tools can show the complete path of an executable file that the current shell would execute when starting a command without specifying its complete path? (Choose two.)",
          "antworten": [
              {"option": "A. find", "istRichtig": false},
              {"option": "B. pwd", "istRichtig": false},
              {"option": "C. which", "istRichtig": true},
              {"option": "D. locate", "istRichtig": false},
              {"option": "E. type", "istRichtig": true}
          ]
      },
      {
        "id": "87",
          "frage": "Which of the following signals is sent to a process when the key combination Ctrl+Z is pressed on the keyboard?",
          "antworten": [
              {"option": "A. SIGTERM", "istRichtig": false},
              {"option": "B. SIGCONT", "istRichtig": false},
              {"option": "C. SIGSTOP", "istRichtig": true},
              {"option": "D. SIGKILL", "istRichtig": false},
              {"option": "E. SIGINT", "istRichtig": false}
          ]
      },
      {
        "id": "88",
          "frage": "What is the output when the regular expression 's/[ABC][abc]/xx/' is applied to the following string? ABCabc",
          "antworten": [
              {"option": "A. ABxxbc", "istRichtig": true},
              {"option": "B. xxCxxc", "istRichtig": false},
              {"option": "C. xxxxxx", "istRichtig": false},
              {"option": "D. ABCabc", "istRichtig": false},
              {"option": "E. Axxaxx", "istRichtig": false}
          ]
      },
      {
        "id": "89",
          "frage": "Which of the following commands print the current working directory when using a Bash shell? (Choose two.)",
          "antworten": [
              {"option": "A. echo \"${PWD}\"", "istRichtig": true},
              {"option": "B. echo \"${WD}\"", "istRichtig": false},
              {"option": "C. printwd", "istRichtig": false},
              {"option": "D. pwd", "istRichtig": true},
              {"option": "E. echo \"${pwd}\"", "istRichtig": false}
          ]
      },
      {
        "id": "90",
          "frage": "Which of the following commands outputs test to the shell? ++++++++++++++++++++++++++++++++++++++++++++++++++ A. cat <!EOT test EOT B. cat <|EOT C. cat !<EOT D. cat &<EOT E. cat <<EOT",
          "antworten": [
              {"option": "A. cat <!EOT test EOT", "istRichtig": false},
              {"option": "B. cat <|EOT", "istRichtig": false},
              {"option": "C. cat !<EOT", "istRichtig": false},
              {"option": "D. cat &<EOT", "istRichtig": false},
              {"option": "E. cat <<EOT", "istRichtig": true}
          ]
      },
      {
        "id": "91",
          "frage": "What is the default nice level when a process is started using the nice command?",
          "antworten": [
              {"option": "A. -10", "istRichtig": false},
              {"option": "B. 0", "istRichtig": false},
              {"option": "C. 10", "istRichtig": true},
              {"option": "D. 15", "istRichtig": false},
              {"option": "E. 20", "istRichtig": false}
          ]
      },
      {
        "id": "92",
          "frage": "A user accidentally created the subdirectory \\dir in his home directory. Which of the following commands will remove that directory?",
          "antworten": [
              {"option": "A. rmdir ~/\\\\dir", "istRichtig": true},
              {"option": "B. rmdir \"~/\\dir\"", "istRichtig": false},
              {"option": "C. rmdir ~/’dir’", "istRichtig": false},
              {"option": "D. rmdir ~\\/\\dir", "istRichtig": false},
              {"option": "E. rmdir '~/\\dir’", "istRichtig": false}
          ]
      },
      {
        "id": "93",
          "frage": "Which of the following commands can perform searches on file contents using regular expressions?",
          "antworten": [
              {"option": "A. find", "istRichtig": false},
              {"option": "B. locate", "istRichtig": false},
              {"option": "C. grep", "istRichtig": true},
              {"option": "D. reggrep", "istRichtig": false},
              {"option": "E. pgrep", "istRichtig": false}
          ]
      },
      {
        "id": "94",
          "frage": "In a nested directory structure, which find command line option would be used to restrict the command to searching down a particular number of subdirectories?",
          "antworten": [
              {"option": "A. -maxdepth", "istRichtig": true},
              {"option": "B. -dirmax", "istRichtig": false},
              {"option": "C. -maxlevels", "istRichtig": false},
              {"option": "D. -s", "istRichtig": false},
              {"option": "E. -n", "istRichtig": false}
          ]
      },
      {
        "id": "95",
          "frage": "Which of the following commands determines a file’s format by using a definition database file which contains information about all common file types?",
          "antworten": [
              {"option": "A. type", "istRichtig": false},
              {"option": "B. file", "istRichtig": true},
              {"option": "C. magic", "istRichtig": false},
              {"option": "D. pmagic", "istRichtig": false},
              {"option": "E. hash", "istRichtig": false}
          ]
      },
      {
        "id": "96",
          "frage": "Which of the following commands generates a list of user names from /etc/passwd along with their login shell?",
          "antworten": [
              {"option": "A. column -s : 1,7 /etc/passwd", "istRichtig": false},
              {"option": "B. chop -c 1,7 /etc/passwd", "istRichtig": false},
              {"option": "C. colrm 1,7 /etc/passwd", "istRichtig": false},
              {"option": "D. sort -t: -k1,7 /etc/passwd", "istRichtig": false},
              {"option": "E. cut -d: -f1,7 /etc/passwd", "istRichtig": true}
          ]
      },
      {
        "id": "97",
          "frage": "If the gzip compressed tar archive texts.tgz contains the files a.txt and b.txt, which files will be present in the current directory after running gunzip texts.tgz?",
          "antworten": [
              {"option": "A. Only a.txt, b.txt, and texts.tgz", "istRichtig": false},
              {"option": "B. Only texts.tar and texts.tgz", "istRichtig": false},
              {"option": "C. Only a.txt.gz and b.txt.gz", "istRichtig": false},
              {"option": "D. Only a.txt and b.txt", "istRichtig": false},
              {"option": "E. Only texts.tar", "istRichtig": true}
          ]
      },
      {
        "id": "98",
          "frage": "In the vi editor, how can commands such as moving the cursor or copying lines into the buffer be issued multiple times or applied to multiple rows?",
          "antworten": [
              {"option": "A. By using the command :repeat followed by the number and the command", "istRichtig": false},
              {"option": "B. By specifying the number right in front of a command such as 4l or 2yj.", "istRichtig": true},
              {"option": "C. By selecting all affected lines using the shift and cursor keys before applying the command.", "istRichtig": false},
              {"option": "D. By issuing a command such as :set repetition=4 with repeats every subsequent command 4 times.", "istRichtig": false},
              {"option": "E. By specifying the number after a command such as l4 or yj2 followed by escape.", "istRichtig": false}
          ]
      },
      {
        "id": "99",
          "frage": "Which of the following statements is correct for a command ending with an & character?",
          "antworten": [
              {"option": "A. The command’s output is redirected to /dev/null.", "istRichtig": false},
              {"option": "B. The command is run in the background of the current shell.", "istRichtig": true},
              {"option": "C. The command’s output is executed by the shell.", "istRichtig": false},
              {"option": "D. The command is run as a direct child of the init process.", "istRichtig": false},
              {"option": "E. The command’s input is read from /dev/null.", "istRichtig": false}
          ]
      },
      {
        "id": "100",
          "frage": "Which of the following commands reads a file and creates separate chunks of a given size from the file’s contents?",
          "antworten": [
              {"option": "A. ar", "istRichtig": false},
              {"option": "B. cat", "istRichtig": false},
              {"option": "C. break", "istRichtig": false},
              {"option": "D. split", "istRichtig": true},
              {"option": "E. parted", "istRichtig": false}
          ]
      },
      {
        "id": "101",
          "frage": "What is the purpose of the xargs command?",
          "antworten": [
              {"option": "A. It passes arguments to an X server.", "istRichtig": false},
              {"option": "B. It repeats the execution of a command using different parameters for each invocation.", "istRichtig": true},
              {"option": "C. It reads standard input and builds up commands to execute.", "istRichtig": false},
              {"option": "D. It asks a question, graphically, and returns the answer to the shell.", "istRichtig": false},
              {"option": "E. It allows specifying long options (like --help) for commands that normally only accept short options (like -h)", "istRichtig": false}
          ]
      },
      {
        "id": "102",
          "frage": "In Bash, inserting 1>&2 after a command redirects…",
          "antworten": [
              {"option": "A. …standard error to standard input.", "istRichtig": false},
              {"option": "B. …standard output to standard error.", "istRichtig": true},
              {"option": "C. …standard input to standard error.", "istRichtig": false},
              {"option": "D. …standard error to standard output.", "istRichtig": false},
              {"option": "E. …standard output to standard input.", "istRichtig": false}
          ]
      },
      {
        "id": "103",
          "frage": "When booting from the hard disk, a computer successfully loads the Linux kernel and initramfs but hangs during the subsequent startup tasks. The system is booted using a Linux based rescue CD to investigate the problem. Which of the following methods helps to identify the root cause of the problem?",
          "antworten": [
              {"option": "A. Using the dmesg command from the rescue CD’s shell to view the original system’s boot logs.", "istRichtig": false},
              {"option": "B. Investigating the file /proc/kmsg on the computer’s hard disk for possible errors.", "istRichtig": false},
              {"option": "C. Investigating the files in /var/log on the computer’s hard disk for possible errors.", "istRichtig": true},
              {"option": "D. Using chroot to switch to the file system on the hard disk and use dmesg to view the logs.", "istRichtig": false},
              {"option": "E. Rebooting again from the hard drive since the system successfully booted from the rescue CD.", "istRichtig": false}
          ]
      },
      {
        "id": "104",
          "frage": "Where is the bootloader stored on the hard disk of a UEFI system?",
          "antworten": [
              {"option": "A. In the EFI Boot Record (EBR).", "istRichtig": false},
              {"option": "B. In the Master Boot Record (MBR).", "istRichtig": false},
              {"option": "C. On the EFI System Partition (ESP).", "istRichtig": true},
              {"option": "D. On the partition labeled boot.", "istRichtig": false},
              {"option": "E. On the partition number 127.", "istRichtig": false}
          ]
      },
      {
        "id": "105",
          "frage": "What is the correct way to set the default systemd boot target to multi-user?",
          "antworten": [
              {"option": "A. systemctl isolate multi-user.target", "istRichtig": false},
              {"option": "B. systemctl set-runlevel multi-user.target", "istRichtig": false},
              {"option": "C. systemctl set-boot multi-user.target", "istRichtig": false},
              {"option": "D. systemctl set-default multi-user.target", "istRichtig": true},
              {"option": "E. systemctl boot -p multi-user.target", "istRichtig": false}
          ]
      },
      {
        "id": "106",
          "frage": "Which of the following statements are correct about the initial RAM disk involved in the boot process of Linux? (Choose two.)",
          "antworten": [
              {"option": "A. An initramfs is a compressed file system archive, which can be unpacked to examine its contents.", "istRichtig": true},
              {"option": "B. An initramfs file contains the MBR, the bootloader and the Linux kernel.", "istRichtig": false},
              {"option": "C. After a successful boot, the initramfs contents are available in /run/initramfs/.", "istRichtig": false},
              {"option": "D. The kernel uses the initramfs temporarily before accessing the real root file system.", "istRichtig": true},
              {"option": "E. An initramfs does not depend on a specific kernel version and is not changed after the initial installation.", "istRichtig": false}
          ]
      },
      {
        "id": "107",
          "frage": "Which of the following commands loads a kernel module along with any required dependency modules?",
          "antworten": [
              {"option": "A. depmod", "istRichtig": false},
              {"option": "B. modprobe", "istRichtig": true},
              {"option": "C. module_install", "istRichtig": false},
              {"option": "D. insmod", "istRichtig": false},
              {"option": "E. loadmod", "istRichtig": false}
          ]
      },
      {
        "id": "108",
          "frage": "What information can the lspci command display about the system hardware? (Choose three.)",
          "antworten": [
              {"option": "A. System battery type", "istRichtig": false},
              {"option": "B. Device IRQ settings", "istRichtig": true},
              {"option": "C. PCI bus speed", "istRichtig": true},
              {"option": "D. Ethernet MAC address", "istRichtig": false},
              {"option": "E. Device vendor identification", "istRichtig": true}
          ]
      },
      {
        "id": "109",
          "frage": "Given the following two symbolic links in a System V init configuration: /etc/rc1.d/K01apache2 /etc/rc2.d/S02apache2 When are the scripts executed that are referenced by these links? (Choose two.)",
          "antworten": [
              {"option": "A. S02apache2 is run when runlevel 2 is entered.", "istRichtig": true},
              {"option": "B. S02apache2 is run when runlevel 2 is left.", "istRichtig": false},
              {"option": "C. K01apache2 is never run because K indicates a deactivated service.", "istRichtig": false},
              {"option": "D. Both S02apache2 and K01apache2 are run during a system shutdown.", "istRichtig": false},
              {"option": "E. K01apache2 is run when runlevel 1 is entered.", "istRichtig": true}
          ]
      },



          {
            "id": "110",
              "frage": "Which program updates the database that is used by the locate command? (Specify ONLY the command without any path or parameters).",
              "fillin": "updatedb"
          },
          {
            "id": "111",
              "frage": "Which command displays the current disk space usage for all mounted file systems? (Specify ONLY the command without any path or parameters.)",
              "fillin": "df"
          },
          {
            "id": "112",
              "frage": "Which file in the /proc filesystem lists parameters passed from the bootloader to the kernel? (Specify the file name only without any path.)",
              "fillin": "cmdline"
          },
          {
            "id": "113",
              "frage": "Which program runs a command in specific intervals and refreshes the display of the program’s output? (Specify ONLY the command without any path or parameters.)",
              "fillin": "watch"
          },
          {
            "id": "114",
              "frage": "Which command is used to start another command with a given nice level? (Specify ONLY the command without any path or parameters.)",
              "fillin": "nice"
          },
          {
            "id": "115",
              "frage": "What directory contains configuration files for additional yum repositories? (Specify the full path to the directory.)",
              "fillin": "/etc/yum.repos.d"
          },
          {
            "id": "116",
              "frage": "Which file from the /proc/ filesystem contains a list of all currently mounted devices? (Specify the full name of the file, including path.)",
              "fillin": "/proc/mounts"
          },
          {
            "id": "117",
              "frage": "Following the Filesystem Hierarchy Standard (FHS), where should binaries that have been compiled by the system administrator be placed in order to be made available to all users on the system? (Specify the full path to the directory.)",
              "fillin": "/usr/local/bin"
          },
          {
            "id": "118",
              "frage": "Which command displays a list of all background tasks running in the current shell? (Specify ONLY the command without any path or parameters.)",
              "fillin": "jobs"
          },
          {
            "id": "119",
              "frage": "Which command is used to change the priority of an already running process? (Specify ONLY the command without any path or parameters.)",
              "fillin": "renice"
          },
          {
              "id": "120",
              "frage": "Which System V init configuration file is commonly used to set the default run level? (Specify the full name of the file, including path.)",
              "fillin": "/etc/inittab"
          }






  ]
  return {questions};
}
//genID(questions:Question[]):number {  return questions.length > 0 ? Math.max(...questions.map(q => q.id)) + 1 : 4; //:4 ist der startpunkt
//}
  //constructor() { }
}
