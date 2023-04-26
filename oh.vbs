

Option Explicit

Dim WSHShell
Set WSHShell=Wscript.CreateObject("Wscript.Shell")

Dim x
For x = 1 to 10
  WSHShell.Run "https://pineappleanicode.github.io/why/"
Next


MsgBox "Did you actually do it? Or are you being gaslighted? The blood drips down your face, but who's  is it?",vbSystemModal

