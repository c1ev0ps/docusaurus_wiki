---
description: Lua for RePhone
title: Lua for RePhone
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/Xadow_GSMPlusBLE_pingguo.JPG)

RePhone can be a learning tool for you to start interesting projects. Currently, RePhone supports various development environment and development languages, you can either built applications with C/C++ based on Eclipse IDE, Arduino IDE, or with Lua and JavaScript.

This wiki is a User Guide to help you start your RePhone project with Lua.

Install Driver and Update Firmware
----------------------------------

<!-- -   To **Install the Driver**, please refer to the **section 2 of [Arduino_IDE_for_RePhone_Kit](/Arduino_IDE_for_RePhone_Kit "Arduino IDE for RePhone Kit")** -->

<!-- 
-   To **Update Firmware**, please refer to **section 3 of [Arduino_IDE_for_RePhone_Kit](/Arduino_IDE_for_RePhone_Kit "Arduino IDE for RePhone Kit")** -->

Download Lua for RePhone Application
------------------------------------

**Step 1.** Click the following icon to our github for downloading the 'Lua for RePhone application'

[![](https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/Download_Lua_for_RePhone.png)](https://github.com/Seeed-Studio/Lua_for_RePhone/releases)

**Step 2.** Click ***lua_for_rephone_xxx.zip*** to download

![](https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/Lua_for_rephone_download.png)

**Step 3.** Set your RePhone into storage mode by **plugging in the battery** and connect it to PC with a Micro USB cable.

![](https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/Connect_Xadow_GSMPlusBLE_to_PC.png)

**Step 4.** Unzip the ***lua_for_rephone_xxx.zip*** file into the 5MB disk of RePhone, you can also put some music files (mp3 format) into the disk. Here I've put the 'music1.mp3' and 'music2.mp3' in it.

![](https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/Lua_1.png)

Use Lua Shell
-------------

**Step 1.** Now press and hold the power key of your RePhone (Xadow GSM+BLE, see the diagram above in step 3 of section 2) for ***2 seconds*** to turn it on, then identify the COM number for the serial port, which will be ***MTK USB Modem Port*** showing in the ***Device Manager***, also please be noted that *the COM number might be different on different PC*.

Open **Device Manager** by clicking the **Start** button, clicking **Control Panel**, clicking **System and Security**, and then, under **System**, clicking **Device Manager**. If you're prompted for an administrator password or confirmation, type the password or provide confirmation. See the following image:

![](https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/Check_ports.png)

**Step 2.** We use a serial terminal tool such as [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html) to access the Lua shell running on the RePhone.

If you use PuTTY, please remember to enable ***"implicit CR in every LF"*** option. Otherwise, line breaks will be weird. As Lua shell of RePhone use LF ('\n') as EOL, while PuTTY uses CR LF ("\r\n") as default EOL.

![](https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/Putty_EOL.png)

**Step 3.**Open the MTK USB Modem Port (its baudrate doesn't matter as it is a USB virtual serial port) and type "print('hello, world')", you will get your first Lua code running on the RePhone.

![](https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/RePhone_Lua_Shell.png)

If you have some music files in the RePhone, type "audio.play('music.mp3')" to play it. If you have a SIM card inserted, type "gsm.call('phone_number')" to call someone or "gsm.text('phone_number', 'message from rephone')" to send a text message.

Examples
--------

1.Play a music repeatedly.

```
function play_music()
    audio.play('music.mp3')
end
t = timer.create(10000, play_music)
```

2.Auto-reply message.

```
function reply(from, content)
    print('got a message:', content)
    print('from:', from)
    gsm.text(from, 'Thanks for your message')
end
gsm.on_new_message(reply)
```

RePhone Community
-----------------

[![](https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

We have been looking for a better place where our backers (RePhone Users) can sit together, warmly and comfortably, have conversations about RePhone, discuss technical problems, share ideas/projects, and give feedback on the modules’ development in the future. And then here we go, the RePhone Community.

Now join us in the [RePhone Community](https://community.seeedstudio.com/discover.html?t=RePhone)!

Together we seek answers, make interesting stuff, care about each other, and share our experiences.

Resources
---------

- [Source Code of Lua for RePhone](https://github.com/Seeed-Studio/Lua_for_RePhone)


<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Lua_for_RePhone -->

## Tech Support
<div>
  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
