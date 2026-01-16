---
"@fltsci/covector-command": patch
---

Fix flaky test by using all() to await stream handlers before returning from sh()
