/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [
  //   {type: 'autogenerated', dirName: '.'},
  // ],

  // But you can create a sidebar manually

  ProductSidebar: [

    'Getting_Started',
    'weekly_wiki',

    // {

    //   type: 'doc',
    //   label: '--Sensor--',
    //   id: 'Sensor_Network',

    // },

    {
      type: 'html',
      value: `
    <style>
      .sub_item {
        width: 275px;
        display:inline-block;
        text-align:center;
        font-size:20px;
        margin-top: 10px;
      }
    </style>
    <div style="width:100px;text-align:center"> 
      <div class="sub_item"><strong> Sensor </strong></div>
    </div>
    `,
    },

    {

      type: 'category',
      label: 'Grove',
      items: [
        {
          type: 'category',
          label: 'Grove Sensor',
          items: [

            {
              type: 'category',
              label: 'All in one',
              items: [
                'Sensor/Grove/Grove_Sensors/All_in_one/Grove-Temperature_Humidity_Pressure_Gas_Sensor_BME680',

              ],
            },

            {
              type: 'category',
              label: 'Temp & Humi',
              items: [
                'Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor',
                'Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-CO2&Temperature&HumiditySensor-SCD41',
                'Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-CO2_Temperature_Humidity_Sensor-SCD30',
                'Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-TempAndHumi_Sensor-SHT31',
                'Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-I2C_High_Accuracy_Temp&Humi_Sensor-SHT35',
                'Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-Temperature_and_Humidity_Sensor_Pro',
                'Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-TemperatureAndHumidity_Sensor',
                'Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-Temperature-Humidity-Sensor-DH20',
                'Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-TemperatureAndHumidity_Sensor-HDC1000',
                'Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0',
                'Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-SHT4x',
              ]
            },

            {
              type: 'category',
              label: 'Temperature',
              items: [
                'Sensor/Grove/Grove_Sensors/Temperature/Grove-1-Wire_Thermocouple_Amplifier-MAX31850K',
                'Sensor/Grove/Grove_Sensors/Temperature/Grove-I2C_Thermocouple_Amplifier-MCP9600',
                'Sensor/Grove/Grove_Sensors/Temperature/One-Wire-Temperature-Sensor-DS18B20',
                'Sensor/Grove/Grove_Sensors/Temperature/Grove-High_Temperature_Sensor',
                'Sensor/Grove/Grove_Sensors/Temperature/Grove-Thermal-Imaging-Camera-IR-Array',
                'Sensor/Grove/Grove_Sensors/Temperature/Grove-Digital_Infrared_Temperature_Sensor',
                'Sensor/Grove/Grove_Sensors/Temperature/Grove-Infrared_Temperature_Sensor',
                'Sensor/Grove/Grove_Sensors/Temperature/Grove-Infrared_Temperature_Sensor_Array-AMG8833',
                // 'Sensor/Grove/Grove_Sensors/Temperature/Grove-Temperature_Sensor',
                'Sensor/Grove/Grove_Sensors/Temperature/Grove-Temperature_Sensor_V1.2',
                'Sensor/Grove/Grove_Sensors/Temperature/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808',

                // 'Sensor/Grove/Grove_Sensors/Temperature/Sensor_temperature',
              ]
            },

            {
              type: 'category',
              label: 'Soli Humidity',
              items: [
                'Sensor/Grove/Grove_Sensors/Soli_Humidity/Grove-Capacitive_Moisture_Sensor-Corrosion-Resistant',
                'Sensor/Grove/Grove_Sensors/Soli_Humidity/Grove-Moisture_Sensor',
              ]
            },
            {
              type: 'category',
              label: 'Proximity',
              items: [
                'Sensor/Grove/Grove_Sensors/Proximity/Sensor_distance',
                'Sensor/Grove/Grove_Sensors/Proximity/Grove-TF_Mini_LiDAR',
                'Sensor/Grove/Grove_Sensors/Proximity/Grove-Ultrasonic_Ranger',
                'Sensor/Grove/Grove_Sensors/Proximity/Grove-IR_Distance_Interrupter_v1.2',
                'Sensor/Grove/Grove_Sensors/Proximity/Grove-Doppler-Radar',
                'Sensor/Grove/Grove_Sensors/Proximity/Grove-Time_of_Flight_Distance_Sensor-VL53L0X',
                'Sensor/Grove/Grove_Sensors/Proximity/Grove-80cm_Infrared_Proximity_Sensor',
                'Sensor/Grove/Grove_Sensors/Proximity/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F',
                'Sensor/Grove/Grove_Sensors/Proximity/Grove-Adjustable_PIR_Motion_Sensor',
                'Sensor/Grove/Grove_Sensors/Proximity/Grove-Gesture_v1.0',
              ]
            },
            {
              type: 'category',
              label: 'Light',
              items: [
                'Sensor/Grove/Grove_Sensors/Light/Sensor_light',
                'Sensor/Grove/Grove_Sensors/Light/Grove-Digital_Light_Sensor',
                'Sensor/Grove/Grove_Sensors/Light/Grove-Heelight_Sensor',
                'Sensor/Grove/Grove_Sensors/Light/Grove-Light_Sensor',
                'Sensor/Grove/Grove_Sensors/Light/Grove-Sunlight_Sensor',
                'Sensor/Grove/Grove_Sensors/Light/Grove-UV_Sensor',
                'Sensor/Grove/Grove_Sensors/Light/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931',
                'Sensor/Grove/Grove_Sensors/Light/Grove-I2C_UV_Sensor-VEML6070',
                'Sensor/Grove/Grove_Sensors/Light/Grove-Luminance_Sensor',
                'Sensor/Grove/Grove_Sensors/Light/Grove-Infrared_Receiver',
                'Sensor/Grove/Grove_Sensors/Light/Grove-Line_Finder',
                'Sensor/Grove/Grove_Sensors/Light/Grove-Flame_Sensor',
                //'Sensor/Grove/Grove_Sensors/Light/Grove-Infrared_Reflective_Sensor',
                //'Sensor/Grove/Grove_Sensors/Light/Grove-I2C_Color_Sensor',

              ],
            },
            {
              type: 'category',
              label: 'Sound',
              items: [
                'Sensor/Grove/Grove_Sensors/Sound/Sensor_sound',
                'Sensor/Grove/Grove_Sensors/Sound/Grove-Sound_Sensor',
                'Sensor/Grove/Grove_Sensors/Sound/Grove-Loudness_Sensor',
                'Sensor/Grove/Grove_Sensors/Sound/Grove-Speech_Recognizer',
                'Sensor/Grove/Grove_Sensors/Sound/Grove-Sound_Recorder',
                'Sensor/Grove/Grove_Sensors/Sound/Grove-Analog-Microphone',
              ]
            },
            {
              type: 'category',
              label: 'Biometric',
              items: [
                'Sensor/Grove/Grove_Sensors/Biometric/Sensor_biomedicine',
                'Sensor/Grove/Grove_Sensors/Biometric/Grove-Finger-clip_Heart_Rate_Sensor',
                'Sensor/Grove/Grove_Sensors/Biometric/Grove-Finger-clip_Heart_Rate_Sensor_with_shell',
                // 'Sensor/Grove/Grove_Sensors/Biometric/Grove-EMG_Detector',
                'Sensor/Grove/Grove_Sensors/Biometric/Grove-Ear-clip_Heart_Rate_Sensor',
                'Sensor/Grove/Grove_Sensors/Biometric/Grove-Chest_Strap_Heart_Rate_Sensor',
                'Sensor/Grove/Grove_Sensors/Biometric/Grove-Capacitive-Fingerprint-Sensor',
                'Sensor/Grove/Grove_Sensors/Biometric/Grove-Fingerprint_Sensor',
                'Sensor/Grove/Grove_Sensors/Biometric/Grove-GSR_Sensor',
              ],
            },

          ]
        },

        {
          type: 'category',
          label: 'Grove Sensor Network',
          items: [
            'Sensor/Grove/Grove_Sensors_Network/Communication/Sensor_communication',
            'Sensor/Grove/Grove_Sensors_Network/Communication/GPS-Modules-Selection-Guide',
            'Sensor/Grove/Grove_Sensors_Network/Communication/Grove-125KHz_RFID_Reader',
            // 'Sensor/Grove/Grove_Sensors_Network/Communication/Grove-315MHz_RF_Kit',
            // 'Sensor/Grove/Grove_Sensors_Network/Communication/Grove-433MHz_Simple_RF_Link_Kit',
            // 'Sensor/Grove/Grove_Sensors_Network/Communication/Grove-BLE-dual_model-v1.0',
            // 'Sensor/Grove/Grove_Sensors_Network/Communication/Grove-Bee_Socket',
            // 'Sensor/Grove/Grove_Sensors_Network/Communication/Grove-DMX512',
            'Sensor/Grove/Grove_Sensors_Network/Communication/Grove-GPS',
            'Sensor/Grove/Grove_Sensors_Network/Communication/Grove-GPS-Air530',
            'Sensor/Grove/Grove_Sensors_Network/Communication/Grove_High_Precision_RTC',
            // 'Sensor/Grove/Grove_Sensors_Network/Communication/Grove-I2C_ADC', 
            'Sensor/Grove/Grove_Sensors_Network/Communication/Grove-I2C_FM_Receiver',
            'Sensor/Grove/Grove_Sensors_Network/Communication/Grove-I2C_FM_Receiver_v1.1',
            'Sensor/Grove/Grove_Sensors_Network/Communication/Grove_LoRa_Radio',
            'Sensor/Grove/Grove_Sensors_Network/Communication/Grove_NFC',
            'Sensor/Grove/Grove_Sensors_Network/Communication/Grove_NFC_Tag',
            'Sensor/Grove/Grove_Sensors_Network/Communication/Grove-Protoshield',
            'Sensor/Grove/Grove_Sensors_Network/Communication/Grove-RJ45_Adapter',
            'Sensor/Grove/Grove_Sensors_Network/Communication/Grove-Screw_Terminal',
            // 'Sensor/Grove/Grove_Sensors_Network/Communication/Grove-Serial_Bluetooth_v3.0',
            'Sensor/Grove/Grove_Sensors_Network/Communication/Grove-Serial_RF_Pro',
            'Sensor/Grove/Grove_Sensors_Network/Communication/Grove-UART_Wifi',
            'Sensor/Grove/Grove_Sensors_Network/Communication/Grove-UART_Wifi_V2',
            'Sensor/Grove/Grove_Sensors_Network/Communication/Grove-BLE_v1',
            // 'Sensor/Grove/Grove_Sensors_Network/Communication/Grove_LoRa_E5_New_Version',




          ]
        },

        {
          type: 'category',
          label: 'Grove Accessories',
          items: [

            {
              type: 'category',
              label: 'Input Output',
              items: [
                // 'Sensor/Grove/Grove_Accessories/Input_Output/Grove-Differential_Amplifier_v1.2',
                'Sensor/Grove/Grove_Accessories/Input_Output/Grove-I2C_Hub',
                'Sensor/Grove/Grove_Accessories/Input_Output/Grove-I2C-Hub-6Port',
                'Sensor/Grove/Grove_Accessories/Input_Output/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A',
                // 'Sensor/Grove/Grove_Accessories/Input_Output/Grove-AND',
                // 'Sensor/Grove/Grove_Accessories/Input_Output/Grove-OR',
                // 'Sensor/Grove/Grove_Accessories/Input_Output/Grove-DC_Jack_Power',  
                'Sensor/Grove/Grove_Accessories/Input_Output/Grove-Qwiic-Hub',
                // 'Sensor/Grove/Grove_Accessories/Input_Output/Grove-NunChuck',
                'Sensor/Grove/Grove_Accessories/Input_Output/Grove-PS_2_Adapter',
                'Sensor/Grove/Grove_Accessories/Input_Output/Grove-Mini_Camera',
                // 'Sensor/Grove/Grove_Accessories/Input_Output/Grove-Serial_Camera',
              ]
            },

            {
              type: 'category',
              label: 'Actuator',
              items: [
                // 'Sensor/Grove/Grove_Accessories/Actuator/Grove-2-Coil_Latching_Relay',
                // 'Sensor/Grove/Grove_Accessories/Actuator/Grove-Buzzer',
                'Sensor/Grove/Grove_Accessories/Actuator/Grove-Passive-Buzzer',
                // 'Sensor/Grove/Grove_Accessories/Actuator/Grove-Chainable_RGB_LED',
                // 'Sensor/Grove/Grove_Accessories/Actuator/Grove-Dry-Reed_Relay',
                'Sensor/Grove/Grove_Accessories/Actuator/Grove-EL_Driver',
                'Sensor/Grove/Grove_Accessories/Actuator/Grove-Haptic_Motor',
                // 'Sensor/Grove/Grove_Accessories/Actuator/Grove-I2C_Motor_Driver',
                // 'Sensor/Grove/Grove_Accessories/Actuator/Grove-I2C_Motor_Driver_V1.2',
                'Sensor/Grove/Grove_Accessories/Actuator/Grove-I2C_Motor_Driver_V1.3',
                'Sensor/Grove/Grove_Accessories/Actuator/Grove-I2C-Motor-Driver-L298P',
                'Sensor/Grove/Grove_Accessories/Actuator/Grove-Infrared_Emitter',
                'Sensor/Grove/Grove_Accessories/Actuator/Grove-LED_Matrix_Driver_v1.0',
                'Sensor/Grove/Grove_Accessories/Actuator/Grove-MP3_v2.0',
                'Sensor/Grove/Grove_Accessories/Actuator/Grove-MP3-v3',
                // 'Sensor/Grove/Grove_Accessories/Actuator/Grove-Mini_Fan',
                // 'Sensor/Grove/Grove_Accessories/Actuator/Grove-Mini_I2C_Motor_Driver_v1.0',
                // 'Sensor/Grove/Grove_Accessories/Actuator/Grove_Recorder',
                'Sensor/Grove/Grove_Accessories/Actuator/Grove-Recorder_v3.0',
                // 'Sensor/Grove/Grove_Accessories/Actuator/Grove-Relay', 
                'Sensor/Grove/Grove_Accessories/Actuator/Grove-4-Channel_SPDT_Relay',
                'Sensor/Grove/Grove_Accessories/Actuator/Grove-2-Channel_SPDT_Relay',
                'Sensor/Grove/Grove_Accessories/Actuator/Grove-Solid_State_Relay',
                'Sensor/Grove/Grove_Accessories/Actuator/Grove-Solid_State_Relay_V2',
                'Sensor/Grove/Grove_Accessories/Actuator/Grove-2-Channel_Solid_State_Relay',
                'Sensor/Grove/Grove_Accessories/Actuator/Grove-4-Channel_Solid_State_Relay',
                'Sensor/Grove/Grove_Accessories/Actuator/Grove-8-Channel_Solid_State_Relay',
                'Sensor/Grove/Grove_Accessories/Actuator/Grove-Optocoupler_Relay-M281',
                'Sensor/Grove/Grove_Accessories/Actuator/Grove-Serial_MP3_Player',
                'Sensor/Grove/Grove_Accessories/Actuator/Grove-Servo',
                'Sensor/Grove/Grove_Accessories/Actuator/Grove-Speaker',
                'Sensor/Grove/Grove_Accessories/Actuator/Grove-Speaker-Plus',
                // 'Sensor/Grove/Grove_Accessories/Actuator/Grove-Variable_Color_LED',
                'Sensor/Grove/Grove_Accessories/Actuator/Grove-Vibration_Motor',
                // 'Sensor/Grove/Grove_Accessories/Actuator/Grove-Water_Atomization',
                'Sensor/Grove/Grove_Accessories/Actuator/Grove-16-Channel_PWM_Driver-PCA9685',
                'Sensor/Grove/Grove_Accessories/Actuator/Grove-I2C_Motor_Driver-TB6612FNG',

              ]
            },

            {
              type: 'category',
              label: 'Time',
              items: [
                'Sensor/Grove/Grove_Accessories/Time/Grove-RTC',
              ],
            },

            {
              type: 'category',
              label: 'Current',
              items: [
                'Sensor/Grove/Grove_Accessories/Current/Grove-10A_DC_Current_Sensor-ACS725',
                'Sensor/Grove/Grove_Accessories/Current/Grove-5A_DC_AC_Current_Sensor-ACS70331',
                'Sensor/Grove/Grove_Accessories/Current/Grove-2.5A-DC-Current-Sensor-ACS70331',
                'Sensor/Grove/Grove_Accessories/Current/Grove-Electricity_Sensor',
                'Sensor/Grove/Grove_Accessories/Current/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941',
                'Sensor/Grove/Grove_Accessories/Current/Grove-MOSFET',
                'Sensor/Grove/Grove_Accessories/Current/Grove-SPDT_Relay_30A',
              ],
            },
            {
              type: 'category',
              label: 'Switch&Button',
              items: [
                'Sensor/Grove/Grove_Accessories/Switch&Button/Grove-6-Position_DIP_Switch',
                'Sensor/Grove/Grove_Accessories/Switch&Button/Grove-Button',
              ],
            },

          ]
        },

      ],
    },

    {

      type: 'category',
      label: 'mmWave radar sensor',
      items: [
        'Sensor/mmWave_radar_sensor/Radar_MR24HPC1',
        'Sensor/mmWave_radar_sensor/Radar_MR24FDB1',
        'Sensor/mmWave_radar_sensor/Radar_MR24HPB1',
        'Sensor/mmWave_radar_sensor/Radar_MR24BSD1',
        'Sensor/mmWave_radar_sensor/Radar_MR60BHA1',
        'Sensor/mmWave_radar_sensor/Radar_MR60FDA1',
        'Sensor/mmWave_radar_sensor/Microwave-Sensor-24GHz-Doppler-Radar-Motion-Sensor-MW2401TR11',
      ],

    },

    {

      type: 'category',
      label: 'SeeedStudio XIAO',
      items: [
        {
          type: 'category',
          label: 'SeeedStudio XIAO nRF52840(Sense)',
          items: [
            {
              type: 'category',
              label: 'Application',
              items: [
                'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840/XIAOEI'
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'SeeedStudio XIAO ESP32C3',
          items: [
            'Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/XIAO_ESP32C3_Getting_Started'
          ],
        },
      ],
    },

    {

      type: 'category',
      label: 'Wio Terminal',
      items: [
        'Sensor/Wio_Terminal/wiki'
      ],

    },

    {

      type: 'category',
      label: 'Wio Series',
      items: [
        // 'Sensor/Wio_Series/wiki',
        {
          type: 'category',
          label: 'Wio_Tracker',
          items: [
            'Sensor/Wio_Series/Wio_Tracker/Wio_Tracker',
            'Sensor/Wio_Series/Wio_Tracker/Wio_LTE_Cat.1',
            'Sensor/Wio_Series/Wio_Tracker/LTE_Cat_1_Pi_HAT',
            'Sensor/Wio_Series/Wio_Tracker/wio_gps_board',
            'Sensor/Wio_Series/Wio_Tracker/Wio_LTE_Cat_M1_NB-IoT_Tracker',
            'Sensor/Wio_Series/Wio_Tracker/Wio-Extension-RTC',


          ],
        },
        {
          type: 'category',
          label: 'Wio',
          items: [
            'Sensor/Wio_Series/Wio/Wio_RP2040_Module_Build-in_Wireless_2.4G',
            'Sensor/Wio_Series/Wio/Wio_RP2040_mini_Dev_Board-Onboard_Wifi',
            'Sensor/Wio_Series/Wio/LAN_Communications',
            'Sensor/Wio_Series/Wio/Use_MQTT_to_remotely_light_up_LED_lights',
            'Sensor/Wio_Series/Wio/Use_Socket_to_connect_to_the_forum',
            'Sensor/Wio_Series/Wio/Wio-RP2040-with-Arduino-WIFI',
            'Sensor/Wio_Series/Wio/Wireless-Fall-Detection-Device',
            'Sensor/Wio_Series/Wio/Wireless-desktop-atmosphere-lamp',
            'Sensor/Wio_Series/Wio/Wio',
            'Sensor/Wio_Series/Wio/Wio_Link',
            // 'Sensor/Wio_Series/Wio/Wio_Link_Bootcamp_Kit',
            // 'Sensor/Wio_Series/Wio/Wio_Link_Deluxe_Kit',
            // 'Sensor/Wio_Series/Wio/Wio_Link_Deluxe_Plus_Kit',
            // 'Sensor/Wio_Series/Wio/Wio_Link_Environment_Kit',
            // 'Sensor/Wio_Series/Wio/Wio_Link_Event_Kit',
            // 'Sensor/Wio_Series/Wio/Wio_Link_Starter_Kit',
            'Sensor/Wio_Series/Wio/Wio_Node',
            // 'Sensor/Wio_Series/Wio/Grove_Starter_Kit_for_Wio_LTE', 
            'Sensor/Wio_Series/Wio/Grove-Shield-for-Wio-Lite',
            'Sensor/Wio_Series/Wio/Wio-Lite-W600',
            'Sensor/Wio_Series/Wio/Wio-Lite-MG126',
            'Sensor/Wio_Series/Wio/Wio_Lite_RISC_V_GD32VF103_with_ESP8266',



          ],
        },
      ],

    },



    {

      type: 'category',
      label: 'Seeeduino Series',
      items: [
        'Sensor/Seeeduino_Series/Seeeduino_v4.2',
      ],

    },

    {

      type: 'category',
      label: 'Arch',
      items: [
        'Sensor/Arch/Arch_Mix',
      ],

    },

    {

      type: 'category',
      label: 'Azure Sphere MT3620 Development Kit',
      items: [
        'Sensor/Azure_Sphere_MT3620_Development_Kit/Azure_Sphere_MT3620_Development_Kit',
        'Sensor/Azure_Sphere_MT3620_Development_Kit/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit',
        'Sensor/Azure_Sphere_MT3620_Development_Kit/MT3620_Ethernet_Shield_v1.0',
        'Sensor/Azure_Sphere_MT3620_Development_Kit/MT3620_Mini_Dev_Board',
        'Sensor/Azure_Sphere_MT3620_Development_Kit/MT3620_Grove_Breakout',
      ],

    },

    {

      type: 'category',
      label: 'IOT BUTTON FOR AWS',
      items: [
        // 'Sensor/IOT_Button_For_AWS/wiki',
        'Sensor/IOT_Button_For_AWS/SEEED-IOT-BUTTON-FOR-AWS',
      ],

    },
    {

      type: 'category',
      label: 'SenseCAP the Sensor Prototype Kit',
      items: [
    'Sensor/SenseCAP_The_Sensor_Prototype_Kit/K1100_Getting_Started',
    'Sensor/SenseCAP_The_Sensor_Prototype_Kit/K1100-quickstart',
    {
    
      type: 'category',
      label: 'LoRaWAN',
      items: [
        {
    
          type: 'category',
          label: 'SenseCAP',
          items: [
        'Sensor/SenseCAP_The_Sensor_Prototype_Kit/LoRaWAN/SenseCAP/K1100_sensecap_node-red',
        'Sensor/SenseCAP_The_Sensor_Prototype_Kit/LoRaWAN/SenseCAP/K1100_SenseCAP_to_Azure_IoT_Central',
        'Sensor/SenseCAP_The_Sensor_Prototype_Kit/LoRaWAN/SenseCAP/K1100_SenseCAP_to_PowerBI',
        'Sensor/SenseCAP_The_Sensor_Prototype_Kit/LoRaWAN/SenseCAP/K1100_SenseCAP_to_influxdb',
        'Sensor/SenseCAP_The_Sensor_Prototype_Kit/LoRaWAN/SenseCAP/K1100_SenseCAP_to_twilio',
        'Sensor/SenseCAP_The_Sensor_Prototype_Kit/LoRaWAN/SenseCAP/K1100_SenseCAP_to_datacake',
        'Sensor/SenseCAP_The_Sensor_Prototype_Kit/LoRaWAN/SenseCAP/K1100_SenseCAP_to_grafana',
    
            ],
        
        },
        {
    
          type: 'category',
          label: 'Programme with Arduino',
          items: [
        'Sensor/SenseCAP_The_Sensor_Prototype_Kit/LoRaWAN/Programme with Arduino/K1100-Light-Sensor-Grove-LoRa-E5',
        'Sensor/SenseCAP_The_Sensor_Prototype_Kit/LoRaWAN/Programme with Arduino/K1100-IMU-Sensor-Grove-LoRa-E5',
        'Sensor/SenseCAP_The_Sensor_Prototype_Kit/LoRaWAN/Programme with Arduino/K1100-Soil-Moisture-Sensor-Grove-LoRa-E5',
        'Sensor/SenseCAP_The_Sensor_Prototype_Kit/LoRaWAN/Programme with Arduino/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5',
        'Sensor/SenseCAP_The_Sensor_Prototype_Kit/LoRaWAN/Programme with Arduino/K1100-Temp-Humi-Sensor-Grove-LoRa-E5',
        'Sensor/SenseCAP_The_Sensor_Prototype_Kit/LoRaWAN/Programme with Arduino/K1100-Vision-AI-Module-Grove-LoRa-E5',
            ],
        
        },
        {
    
          type: 'category',
          label: 'Helium',
          items: [
        'Sensor/SenseCAP_The_Sensor_Prototype_Kit/LoRaWAN/Helium/Helium-Introduction',
        'Sensor/SenseCAP_The_Sensor_Prototype_Kit/LoRaWAN/Helium/Connecting-to-Helium',
        {
    
          type: 'category',
          label: 'Azure',
          items: [
        'Sensor/SenseCAP_The_Sensor_Prototype_Kit/LoRaWAN/Helium/Azure/Integrate-into-Azure-IoT-Hub',
        'Sensor/SenseCAP_The_Sensor_Prototype_Kit/LoRaWAN/Helium/Azure/Configuring-Web-APP-Visualization',
            ],
        },
        'Sensor/SenseCAP_The_Sensor_Prototype_Kit/LoRaWAN/Helium/Integrate_into_Google_Sheets_via_Helium',
        'Sensor/SenseCAP_The_Sensor_Prototype_Kit/LoRaWAN/Helium/Connect_AWS_via_helium',
            ],
        
        },
        {
    
          type: 'category',
          label: 'TTN',
          items: [
            'Sensor/SenseCAP_The_Sensor_Prototype_Kit/LoRaWAN/TTN/TTN-Introduction',
            'Sensor/SenseCAP_The_Sensor_Prototype_Kit/LoRaWAN/TTN/Connecting-to-TTN',
            ],
        
        },
        ],
    
    },
    {
    
      type: 'category',
      label: 'WiFi Uplink',
      items: [
        {
    
          type: 'category',
          label: 'Azure',
          items: [
            'Sensor/SenseCAP_The_Sensor_Prototype_Kit/WiFi Uplink/Azure/Connect-Wio-Terminal-to-Azure-IoT-Central',
            'Sensor/SenseCAP_The_Sensor_Prototype_Kit/WiFi Uplink/Azure/Develop-in-Microsoft-Azure-IoT-Central',
            'Sensor/SenseCAP_The_Sensor_Prototype_Kit/WiFi Uplink/Azure/K1100_Azure_to_PowerBI',
            ],
        
        },
        'Sensor/SenseCAP_The_Sensor_Prototype_Kit/WiFi Uplink/Getting_started_with_Ubidots',
        'Sensor/SenseCAP_The_Sensor_Prototype_Kit/WiFi Uplink/Quick-Start-to-using-Blynk',
        'Sensor/SenseCAP_The_Sensor_Prototype_Kit/WiFi Uplink/Wio-Terminal-Advanced-WiFi',
        'Sensor/SenseCAP_The_Sensor_Prototype_Kit/WiFi Uplink/Connect-Wio-Terminal-to-Google-Cloud',
        ],
    
    },
    {
    
      type: 'category',
      label: 'TinyML',
      items: [
        'Sensor/SenseCAP_The_Sensor_Prototype_Kit/TinyML/K1111-Edge-Impulse',
        'Sensor/SenseCAP_The_Sensor_Prototype_Kit/TinyML/Train-Deploy-AI-Model-Grove-Vision-AI',
        ],
    
    },
    {
    
      type: 'category',
      label: 'Project',
      items: [
        'Sensor/SenseCAP_The_Sensor_Prototype_Kit/Project/IoT-into-the-wild-contest',
        'Sensor/SenseCAP_The_Sensor_Prototype_Kit/Project/K1111-Quick-Start-Guide',
        ],
    
    },
        ],
    
    },
    {

      type: 'category',
      label: 'Pi Pico',
      items: [
        // 'Sensor/Pi_Pico/wiki',
        'Sensor/Pi_Pico/Grove-Starter-Kit-for-Raspberry-Pi-Pico',
      ],

    },

    // {

    //   type: 'doc',
    //   label: '--Network--',
    //   id: 'Sensor_Network',

    // },

    {
      type: 'html',
      value: `
    <style>
      .sub_item {
        width: 275px;
        display:inline-block;
        text-align:center;
        font-size:20px;
        margin-top: 10px;
      }
    </style>
    <div style="width:100px;text-align:center"> 
      <div class="sub_item"><strong> Network </strong></div>
    </div>
    `,
    },

    {

      type: 'category',
      label: 'SenseCAP',
      items: [
        'Network/SenseCAP/wiki',
      ],

    },

    // {
    // 有问题
    //   type: 'category',
    //   label: 'LinkStar',
    //   items: [
    //     'Network/LinkStar/Linkstar_Datasheet',
    //     'Network/LinkStar/linkstar-install-system',
    //     ],

    // },

    {

      type: 'category',
      label: 'reRouter',
      items: [
        'Network/reRouter/Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4',
        'Network/reRouter/Raspberry-OpenWrt-Getting-Started',
      ],

    },

    // {

    //   type: 'doc',
    //   label: '--Edge--',
    //   id: 'Edge_Computing',

    // },

    {
      type: 'html',
      value: `
    <style>
      .sub_item {
        width: 275px;
        display:inline-block;
        text-align:center;
        font-size:20px;
        margin-top: 10px;
      }
    </style>
    <div style="width:100px;text-align:center"> 
      <div class="sub_item"><strong> Edge </strong></div>
    </div>
    `,
    },

    {

      type: 'category',
      label: 'reTerminal',
      items: [
        'Edge/reTerminal/reTerminal',
      ],
      //这里有东西没搬
    },

    {

      type: 'category',
      label: 'reServer',
      items: [
        'Edge/reServer/reServer_Getting_Started',
      ],

    },

    {

      type: 'category',
      label: 'reComputer',
      items: [
        'Edge/reComputer/wiki',
      ],

    },

    {

      type: 'category',
      label: 'Edge Series',
      items: [
        'Edge/Edge_Series/wiki',
      ],

    },

    {
      type: 'category',
      label: 'BeagleBone®',
      items: [
        'Edge/Beagle_Bone/BeagleBone',
        'Edge/Beagle_Bone/BeagleBone_Solutions',
        'Edge/Beagle_Bone/BeagleBone_Blue',
        'Edge/Beagle_Bone/Beaglebone_Case',
        'Edge/Beagle_Bone/BeagleBone_Green',
        'Edge/Beagle_Bone/BeagleBone_Green_HDMI_Cape',
        'Edge/Beagle_Bone/BeagleBone_Green_Wireless',
        'Edge/Beagle_Bone/BeagleBone-Green-Gateway',
        // 'Edge/Beagle_Bone/Grove_Base_Cape_for_BeagleBone_v2',
        'Edge/Beagle_Bone/Grove_Cape_for_BeagleBone_Series',
        // 'Edge/Beagle_Bone/Grove_Starter_Kit_for_BeagleBone_Green',
        'Edge/Beagle_Bone/Motor_Bridge_Cape_v1.0',
        'Edge/Beagle_Bone/Skeleton_box_for_Beaglebone',
        'Edge/Beagle_Bone/Seeed-Studio-BeagleBone-Green-LCD-Cape-with-Resistive-Touch',
      ],
    },

    {
      type: 'category',
      label: 'ODYSSEY',
      items: [
        'Edge/ODYSSEY/ODYSSEY_Getting_Started',

        {
          type: 'category',
          label: 'ODYSSEY_X86J4105',
          items: [
            'Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105',
            'Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-GPIO',
            'Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Installing-OS',
            'Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Updating-Firmware',
            'Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Accessories',

            {
              type: 'category',
              label: 'Home Assistant',
              items: [
                'Edge/ODYSSEY/ODYSSEY_X86J4105/Home-Assistant/ODYSSEY-X86-Home-Assistant',
                'Edge/ODYSSEY/ODYSSEY_X86J4105/Home-Assistant/Home-Assistant-Customize',
                'Edge/ODYSSEY/ODYSSEY_X86J4105/Home-Assistant/Connect-Grove-to-Home-Assistant-ESPHome',
              ]
            },

            'Edge/ODYSSEY/ODYSSEY_X86J4105/Jellyfin-on-Docker-Ubuntu-X86',
            'Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Installing-openwrt',
            'Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86-OPNsense',
            'Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-pfSense',
            'Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86-TrueNAS',
            'Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Installing-Android',
            'Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-AzureIOT',
            'Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Installing-FreeNAS',
            'Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-Intel-OpenVINO',
            'Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-NCS2',
            'Edge/ODYSSEY/ODYSSEY_X86J4105/Coral-Mini-PCIe-Accelerator-on-ODYSSEY-X86J4105',
            'Edge/ODYSSEY/ODYSSEY_X86J4105/ODYSSEY-X86J4105-LTE-Module',

            {
              type: 'category',
              label: 'Projects',
              items: [
                'Edge/ODYSSEY/ODYSSEY_X86J4105/Projects/ODYSSEY-X86J4105-Frigate',
              ]
            },
          ]
        },

        {
          type: 'category',
          label: 'ODYSSEY_STM32MP157C',
          items: [
            'Edge/ODYSSEY/ODYSSEY_STM32MP157C/SEEED-SOM-STM32MP157C',
            'Edge/ODYSSEY/ODYSSEY_STM32MP157C/ODYSSEY-STM32MP157C',
          ],
        },
      ],

    },

    {

      type: 'category',
      label: 'Quantum Development Board',
      items: [
        'Edge/Quantum_Development_Board/wiki',
      ],

    },

    // {

    //   type: 'doc',
    //   label: '--Cloud and Chain--',
    //   id: 'CloudnChain',

    // },

    {
      type: 'html',
      value: `
    <style>
      .sub_item {
        width: 275px;
        display:inline-block;
        text-align:center;
        font-size:20px;
        margin-top: 10px;
      }
    </style>
    <div style="width:100px;text-align:center"> 
      <div class="sub_item"><strong> Cloud and Chain </strong></div>
    </div>
    `,
    },

    {

      type: 'category',
      label: 'SenseCAP Cloud',
      items: [
        'Cloud_Chain/SenseCAP_M4/wiki',
      ],

    },

    {
      type: 'html',
      value: `
    <style>
      .sub_item {
        width: 275px;
        display:inline-block;
        text-align:center;
        font-size:20px;
        margin-top: 10px;
      }
    </style>
    <div style="width:100px;text-align:center"> 
      <div class="sub_item"><strong> Top Brand </strong></div>
    </div>
    `,
    },

    {

      type: 'category',
      label: 'Arduino',
      items: [
        'Top_Brand/Arduino/shield/shield_Getting_Started',
      ],

    },

    {

      type: 'category',
      label: 'Raspberry Pi',
      items: [
        'Top_Brand/Raspberry_Pi/Raspberry_Pi',
        {
          type: 'category',
          label: 'Device',
          items: [
            'Top_Brand/Raspberry_Pi/Device/Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4',
            'Top_Brand/Raspberry_Pi/Device/Raspberry-OpenWrt-Getting-Started',
          ]
        },
        {
          type: 'category',
          label: 'Pi HAT',
          items: [
            'Top_Brand/Raspberry_Pi/Pi_HAT/Grove_Base_Hat_for_Raspberry_Pi',
            'Top_Brand/Raspberry_Pi/Pi_HAT/Grove_Base_Hat_for_Raspberry_Pi_Zero',
            'Top_Brand/Raspberry_Pi/Pi_HAT/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130',
            'Top_Brand/Raspberry_Pi/Pi_HAT/Grove_Base_HAT',
            'Top_Brand/Raspberry_Pi/Pi_HAT/GrovePi_Plus',
            'Top_Brand/Raspberry_Pi/Pi_HAT/Raspberry_Pi_Breakout_Board_v1.0',
            'Top_Brand/Raspberry_Pi/Pi_HAT/Raspberry_Pi_Motor_Driver_Board_v1.0',
            'Top_Brand/Raspberry_Pi/Pi_HAT/Pi_RTC-DS1307',
            'Top_Brand/Raspberry_Pi/Pi_HAT/High_Accuracy_Pi_RTC-DS3231',
            'Top_Brand/Raspberry_Pi/Pi_HAT/Raspberry_Pi_R232_Board_v1.0',
            'Top_Brand/Raspberry_Pi/Pi_HAT/Raspberry_Pi_Relay_Board_v1.0',
            'Top_Brand/Raspberry_Pi/Pi_HAT/four-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115',
            'Top_Brand/Raspberry_Pi/Pi_HAT/eight-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030',
            'Top_Brand/Raspberry_Pi/Pi_HAT/RS-485_Shield_for_Raspberry_Pi',
            'Top_Brand/Raspberry_Pi/Pi_HAT/Grove_AI_HAT_for_Edge_Computing',
            'Top_Brand/Raspberry_Pi/Pi_HAT/two-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi',
          ]
        },

        {
          type: 'category',
          label: 'Accessories',
          items: [
            'Top_Brand/Raspberry_Pi/Accessories/Skeleton_Box_for_Raspberry_Pi_Compute_Module_Development_Kit',
            'Top_Brand/Raspberry_Pi/Accessories/Skeleton_box_for_Rasberry_Pi',
          ]
        },
        {
          type: 'category',
          label: 'Kit',
          items: [
            'Top_Brand/Raspberry_Pi/Kit/Grove_Base_Kit_for_Raspberry_Pi',
          ]
        },


      ],

    },


    {

      type: 'category',
      label: 'NVIDIA',
      items: [
        // 'Top_Brand/NVIDIA/NVIDIA_Getting_Started',
        'Top_Brand/NVIDIA/reComputer_Jetson_Series_Introduction',
        'Top_Brand/NVIDIA/reComputer_Jetson_Series_Hardware_Layout',
        'Top_Brand/NVIDIA/reComputer_Jetson_Series_GPIO_Grove',

        {
          type: 'category',
          label: 'Getting Start & Projects',
          items: [
            'Top_Brand/NVIDIA/Getting_Start_Projects/reComputer_Jetson_Series_Initiation',
            'Top_Brand/NVIDIA/Getting_Start_Projects/reComputer_Jetson_Series_Tutorials_Exercise',
            'Top_Brand/NVIDIA/Getting_Start_Projects/jetson-docker-getting-started',
            'Top_Brand/NVIDIA/Getting_Start_Projects/reComputer_Jetson_Series_Resource',
            'Top_Brand/NVIDIA/Getting_Start_Projects/Jetson-AI-developer-tools',
            'Top_Brand/NVIDIA/Getting_Start_Projects/Jetson-Nano-MaskCam',
            'Top_Brand/NVIDIA/Getting_Start_Projects/Security_Scan',
            'Top_Brand/NVIDIA/Getting_Start_Projects/HardHat',
            'Top_Brand/NVIDIA/Getting_Start_Projects/DeciAI-Getting-Started',
            'Top_Brand/NVIDIA/Getting_Start_Projects/No-code-Edge-AI-Tool',
            'Top_Brand/NVIDIA/Getting_Start_Projects/DashCamNet-with-Jetson-Xavier-NX-Multicamera',
            'Top_Brand/NVIDIA/Getting_Start_Projects/Traffic-Management-DeepStream-SDK',
            'Top_Brand/NVIDIA/Getting_Start_Projects/YOLOv5-Object-Detection-Jetson',
            'Top_Brand/NVIDIA/Getting_Start_Projects/reComputer_Jetson_Series_Projects',
          ],
        },
        {
          type: 'category',
          label: 'Flash NVIDIA JetPack™ OS',
          items: [
            'Top_Brand/NVIDIA/Flash_NVIDIA_JetPack_OS/reComputer_J1010_J101_Flash_Jetpack',
            'Top_Brand/NVIDIA/Flash_NVIDIA_JetPack_OS/reComputer_J2021_J202_Flash_Jetpack',
            'Top_Brand/NVIDIA/Flash_NVIDIA_JetPack_OS/reComputer_J1020_A206_Flash_JetPack',
            'Top_Brand/NVIDIA/Flash_NVIDIA_JetPack_OS/reComputer_A203_Flash_System',
            'Top_Brand/NVIDIA/Flash_NVIDIA_JetPack_OS/reComputer_A203E_Flash_System',
            'Top_Brand/NVIDIA/Flash_NVIDIA_JetPack_OS/reComputer_A205_Flash_System',
            'Top_Brand/NVIDIA/Flash_NVIDIA_JetPack_OS/reComputer_A205E_Flash_System',
            'Top_Brand/NVIDIA/Flash_NVIDIA_JetPack_OS/Jetson-Mate',
            'Top_Brand/NVIDIA/Flash_NVIDIA_JetPack_OS/Jetson_Xavier_AGX_H01_Driver_Installation',
          ],

        },

        {

          type: 'category',
          label: 'NVIDIA Orin series',
          items: [
            'Top_Brand/NVIDIA/NVIDIA_Orin_series/Mini_AI_Computer_T906',
          ],

        },

        {

          type: 'category',
          label: 'Usefull_Tools',
          items: [
            'Top_Brand/NVIDIA/Usefull_Tools/reComputer_Jetson_Memory_Expansion',
            'Top_Brand/NVIDIA/Usefull_Tools/J1010_Boot_From_SD_Card',
          ],

        },

        {

          type: 'category',
          label: 'Drivers',
          items: [
            'Top_Brand/NVIDIA/Drivers/J101_Enable_SD_Card',
          ],

        },

      ],

    },

    {

      type: 'category',
      label: 'Micro:bit',
      items: [
        'Top_Brand/Micro_bit/Grove_Inventor_Kit_for_microbit',
        'Top_Brand/Micro_bit/microbit_wiki_page',
      ],

    },

    'About',
    'License',

  ],

};


module.exports = sidebars;
