---
title: Codecraft connecting Azure IoT with Wio Terminal
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Azure_IoT_CC/
last_update:
  date: 01/11/2022
  author: gunengyu
---
# Codecraft connecting Azure IoT with Wio Terminal

## Introduction

Here we gonna show you how to connect Codecraft with Azure IoT based on Wio Terminal and apply sensors to IoT projects. [Codecraft](https://ide.tinkergen.com/) is a graphical programmable application that can be used online and offline produced by Seeed. [Azure IoT](https://apps.azureiotcentral.com/) is a hosted IoT app platform that’s secure, scales with you as your business grows, and integrates with your existing business apps produced by Microsoft.

<div align="center"><img src="https://files.seeedstudio.com/wiki/CCandAzure/jihe.png" /></div>


## Getting started

### Hardware

**Hardware Required**

In this demo you will need the devices listed as below:

- [WioTerminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) x1
- Tpye-C Cable x1
- Computer x1

**Hardware Connect**

It is connected to a computer through the Type-C cable.

### Software

**Software Required**

- [Codecraft](https://ide.tinkergen.com/)
- [Azure IoT](https://apps.azureiotcentral.com/)

### Tutorial

Here we gonna show you how to apply Wio Terminal in Codecraft and then connect Codecraft with Azure IoT to train a Machine Learning model and use it. The project is based on the Arduino platform which means Arduino IDE and various Arduino libraries are required. If this is your first time using the Wio terminal, we recommend a guide to quickly [Get Started with Wio Terminal](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/).

- **Step 1** Connect the Wio Terminal with PC.
- **Step 2** Open the [Codecraft website](https://ide.tinkergen.com/) and connect with the Wio Terminal

Select "Wio Terminal"

![](https://files.seeedstudio.com/wiki/CCandAzure/cc1.png)

Chose "Connect" , it might need to install CodecraftAssistant if it is the first time to use Codecraft for you.

![](https://files.seeedstudio.com/wiki/CCandAzure/cc2.png)

![](https://files.seeedstudio.com/wiki/CCandAzure/cc3.png)

- **Step 3** Drag the blocks on the left to build a finished program like below:

![](https://files.seeedstudio.com/wiki/CCandAzure/cc5.png)

As you may see, Wi-Fi and **Azure IoT Central scope id** here we need to set up. The Wi-Fi must be in the same environment of yours and next step we will fill the the Azure IoT information.

![](https://files.seeedstudio.com/wiki/CCandAzure/cc6.png)

- **Step 4** Open the [Azure website](https://ide.tinkergen.com/) and **creat a new app**

Click the **"Build"** on the left side, the information here is customized and not very important.

![](https://files.seeedstudio.com/wiki/CCandAzure/az.png)

- **Step 5** Click **“Administration”-->"Device connection"-->"SAS-IoT-Device"** to add the Wio Terminal

![](https://files.seeedstudio.com/wiki/CCandAzure/az3.png)

- **Step 6** Copy the information of what we need in Codecraft and paste them to the program we build

Here are the essential information **"ID Scope", "Primary key", "Device ID"** to the Codecraft

![](https://files.seeedstudio.com/wiki/CCandAzure/az5.png)

![](https://files.seeedstudio.com/wiki/CCandAzure/az6.png)

- **Step 7** Upload the program and see the results

Click the "upload" and upload the program

![](https://files.seeedstudio.com/wiki/CCandAzure/ccaz4.png)

Sometimes it takes pretty long time to upload, please be patient.

Move to the Azure IoT page and click "Device" --> "SAS-IoT-Device"

The results should be like:

![](https://files.seeedstudio.com/wiki/CCandAzure/ccaz5.png)

## Tech Support
 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/). 
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>