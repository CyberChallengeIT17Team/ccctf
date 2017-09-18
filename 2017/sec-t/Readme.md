# [SEC-T CTF 2017](http://sect.ctf.rocks)
## Pwn
### Date
We have to write on a global variable at address 0x6012A8 where is stored the address to the shell command that must be executed by system().
The default value is "date" and it is checked with strstr() before the system() call.
But strstr() return true also if there are bytes after "date", so we can set the string to "date;/bin/sh".
Using the scanf buffer overflow we write "date;/bin/sh\0" in the data section and we rewrite the global variable with the address of our buffer.

The exploit is Date/date_exploit.py
## The gibson
TODO

