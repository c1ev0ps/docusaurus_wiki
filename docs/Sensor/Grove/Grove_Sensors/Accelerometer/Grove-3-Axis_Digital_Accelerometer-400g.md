---
description: Grove - 3-Axis Digital Accelerometer(±400g)
title: Grove - 3-Axis Digital Accelerometer(±400g)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
last_update:
  date: 1/5/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Grove_3Axis_Accelerometer400g.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Grove_3Axis_Accelerometer400g.jpg" alt="pir" width={600} height="auto" /></p>


The H3LIS331DL is a low power high performance 3-axis linear accelerometer belonging to the “nano” family, with digital I2C serial interface standard output. The device features ultra low power operational modes that allow advanced power saving and smart sleep to wake-up functions. The H3LIS331DL has dynamically user selectable full scales of ±100g/±200 g/±400 g and it is capable of measuring accelerations with output data rates from 0.5 Hz to 1 kHz.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer(%C2%B1400g)-p-1897.html)

Features
--------

-   Wide power range DC3.3V to 5V
-   Grove outline
-   3 axis sensing
-   Small, low-profile package: 3×3×1mm TFLGA
-   Low power 300µA at 3.3V (typical)
-   ±100g /±200 g /±400 g dynamically selectable full scale
-   I2C digital output interface
-   10000 g high shock survivability
-   ECOPACK®RoHS and “Green” compliant

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::
Application Ideas
-----------------

-   Shock detector
-   Impact recognition and logging
-   Concussion detection

Platforms Supported
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

Usage
-----

Here below we show you how to read the raw data from this accelerometer.

1. Plug it onto the I2C port of your [Grove - Base Shield](https://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132_134).
<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Grove-3-Axis_Digital_Accelerometer_connect_BaseBoard.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Grove-3-Axis_Digital_Accelerometer_connect_BaseBoard.jpg" alt="pir" width={600} height="auto" /></p>


2. Download the [Digital Accelerometer(±400g) Library](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Accelerometer_H3LIS331DL) and unpack it into arduino-1.0\\libraries in your Arduino installation folder.

3. Open the demo code directly by the path:File -> Example ->Grove_3Axis_Digital_Accelerometer_H3LIS331DL->H3LIS331DL_AdjVal. It is a sketch to adjust the raw data of H3LIS331DL to make it more precise.

4. Upload the code and open the serial monitor.

5. Open the serial monitor to get the adjust value of reference as the steps described in serial output.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Adjust_value_of_Accelerometer.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Adjust_value_of_Accelerometer.jpg" alt="pir" width={600} height="auto" /></p>


6. Open the demo code directly by the path:File -> Example ->Grove_3Axis_Digital_Accelerometer_H3LIS331DL->H3LIS331DL_Demo. Then modify the VAL_X_AXIS/VAL_Y_AXIS/VAL_Z_AXIS according to what you get from H3LIS331DL_AdjVal Sketch.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Redefine_the_VAL_of_Accelerometer.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Redefine_the_VAL_of_Accelerometer.jpg" alt="pir" width={600} height="auto" /></p>


7. Upload the code and open the serial monitor and open the serial monitor to check the result.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Raw_data_of_H3LIS331DL.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Raw_data_of_H3LIS331DL.jpg" alt="pir" width={600} height="auto" /></p>


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/res/Grove-3-Axis_Digital_Accelerometer-400g-v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


Resources
---------

-   [Grove - 3-Axis Digital Accelerometer(±400g) Eagle File](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/res/Grove-3-Axis_Digital_Accelerometer-400g-v1.0.zip)
-   [github repository for 3-Axis Digital Accelerometer(±400g)](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Accelerometer_H3LIS331DL)
-   [H3LIS331DL Datasheet PDF](http://www.st.com/web/en/resource/technical/document/datasheet/DM00053090.pdf)
 

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_3-Axis_Digital_Accelerometer(±400g) -->

## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
