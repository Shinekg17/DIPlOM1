// This file contains all initial data for the application

// Температурын өгөгдлүүдийн анхны утга
export const temperatureData = [
    { id: 't288', value: 288, position: { top: 67, left: 280 }, label: 'T' },
    { id: 't381', value: 381, position: { top: 87, left: 280 }, label: 'T' },
    { id: 't366', value: 366, position: { top: 107, left: 280 }, label: 'T' },
    { id: 't292', value: 292, position: { top: 67, left: 322 }, label: 'T' },
    { id: 't275', value: 275, position: { top: 87, left: 322 }, label: 'T' },
    { id: 't54', value: 54, position: { top: 400, left: 270 }, label: 'T' },
    { id: 't56', value: 56, position: { top: 485, left: 425 }, label: 'T' },
    { id: 't56_2', value: 56, position: { top: 485, left: 425 }, label: 'T' },
  ];
  
  // Даралтын өгөгдлийн анхны утга
  export const pressureData = [
    { id: 'p41_9', value: 41.9, position: { top: 75, left: 421 }, label: 'P' },
    { id: 'f33513', value: 33513, position: { top: 250, left: 361 }, label: 'F' }
  ];
  // Хувь хэмжээний өгөгдлийн анхны утга (зурагт харагдсан 100% утга)
  export const percentageData = [
    { id: 'percent14', value: 14, position: { top: 465, left: 265 }, label: '%' },
    { id: 'percent-1', value: -1, position: { top: 550, left: 120 }, label: '%' },
    { id: 'percent98', value: 98, position: { top: 590, left: 190  }, label: '%' },
    { id: 'percent37', value: 37, position: { top: 590, left: 240 }, label: '%' },
    { id: 'percent1', value: 1, position: { top: 558, left: 420 }, label: '%' },
    { id: 'percent94', value: 94, position: { top: 314, left: 375 }, label: '%' },
    { id: 'percent0', value: 0, position: { top: 200, left: 530 }, label: '%' },
    { id: 'percent0_2', value: 0, position: { top: 62, left: 706 }, label: '%' },
    { id: 'percent100', value: 100, position: { top: 63, left: 810 }, label: '%' },
    { id: 'percent58', value: 58, position: { top: 308, left: 865 }, label: '%' },
    { id: 'percent100_2', value: 100, position: { top: 308, left: 930 }, label: '%' },
    { id: 'percent93', value: 93, position: { top: 348, left: 880 }, label: '%' },
    { id: 'percent55', value: 55, position: { top: 415, left: 910 }, label: '%' }
  ];

  
  // Шинээр нэмсэн хүснэгт панелийн өгөгдөл - Эхний хуучин загвар
  export const panelData = [
    {
      id: 'panel5a',
      title: 'ПСУ 5A',
      readings: [
        { label: 'Hz', value: 9 },
        { label: 'A', value: 5.2 }
      ],
      position: { top: 400, left: 105 }
    },
    {
      id: 'panel5b',
      title: 'ПСУ 5Б',
      readings: [
        { label: 'Hz', value: 0 },
        { label: 'A', value: -0.0 }
      ],
      position: { top: 400, left: 165 }
    }
  ];
  
  // Шинэ загварын хүснэгт панел - Зурагт харагдсан шинэ загвар
  export const newPanelData = [
    {
      id: 'newpanel1',
      title: '',
      rows: [
        { 
          cells: [
            { label: 'C', value: '27', color: 'red',},
            { label: 'ШБ M', value: '', color: 'white' }, 
            { label: 'C', value: '29', color: 'red' }
          ]
        },
        { 
          cells: [
            { label: 'A', value: '41', color: 'white' },
            { label: 'A', value: '42', color: 'white' },
            { label: 'V', value: '6286', color: 'white' }
          ]
        }
      ],
      position: { top: 460, left: 105 }
    }
  ];
  
  // Шинээр нэмсэн дижитал дэлгэцийн өгөгдөл (зурагт харагдсанаар)
  export const digitalPanelData = [
    {
      id: 'digitalpanel1',
      rows: [
        {
          cells: [
            { label: 'C', value: 40, labelColor: '#d00' },
            { label: 'C', value: 56, labelColor: '#d00' }
          ]
        },
        {
          cells: [
            { label: 'A', value: 130, labelColor: '#00a' },
            { label: 'V', value: 399, labelColor: '#060' }
          ]
        }
      ],
      position: { top: 520, left: 445 }
    }
  ];
  
  // Шинээр нэмсэн хяналтын панел (зураг дахь хүснэгттэй ижил)
  export const controlPanelData = {
    id: 'controlPanel',
    rows: [
      {
        cells: [
          { label: 'C', value: '49', color: 'red' },
          { label: 'ДС', color: 'white' },
          { label: 'C', value: '44', color: 'red' }
        ]
      },
      {
        cells: [
          { label: 'A', value: '-2', color: 'lightblue' },
          { label: 'A', value: '23', color: 'lightblue' },
          { label: 'V', value: '6261', color: 'lightblue' }
        ]
      },
      {
        cells: [
          { label: 'ММ/С', value: '1.2', color: 'red' },
          { label: 'ММ/С', value: '0.8', color: 'red' }
        ]
      }
    ],
    position: { top: 470, left: 950 }
  };
  
  export const temperatureVoltageData = {
    id: 'tempVoltPanel',
    rows: [
      {
        cells: [
          { label: 'C', value: 32, labelColor: '#d00' },
          { label: 'C', value: 34, labelColor: '#d00' }
        ]
      },
      {
        cells: [
          { label: 'A', value: 61, labelColor: '#8ad' },
          { label: 'V', value: 399, labelColor: '#8ad' }
        ]
      }
    ],
    position: { top: 375, left: 975 }
  };
  
  export const processMonitorData = {
    id: 'processPanel',
    rows: [
      {
        cells: [
          { label: 'F', value: 64, labelColor: '#d00' }
        ]
      },
      {
        cells: [
          { label: 'P', value: 56, labelColor: '#d00' }
        ]
      },
      {
        cells: [
          { label: 'T', value: 148, labelColor: '#d00' }
        ]
      },
      {
        cells: [
          { label: 'F', value: 14, labelColor: '#d00' }
        ]
      }
    ],
    position: { top: 300, left: 1020 }
  };

  // T КОД 22 төрлийн өгөгдлийн блок
export const codeBlockPanelData = [
  {
    id: 'codeBlock1',
    leftText: 'T кон',
    rightText: '22',
    position: { top: 610, left: 60}
  },
  {
    id: 'codeBlock2',
    leftText: 'Lнү',
    rightText: '22',
    position: { top: 330, left: 425 }
  }
];

export const boilerGaugePanel = {
  id: 'boilerGaugePanel',
  title: 'ABTOMAT',
  bars: [
    { label: 'L1', value: -17, level: 0.7 },
    { label: 'L2', value: -9, level: 0.8 },
    { label: 'L3', value: -32, level: 0.6 }
  ],
  position: { top: 50, left: 460 } 
};

 export const boilerInfoPanelData = {
  id: 'boilerInfoPanel',
  rows: [
    { label: 'T-1', value: 438.1 },
    { label: 'T-2', value: 438.4 },
    { label: 'P\u0445/уур', value: 38.0 },
    { label: 'F\u0445/уур', value: 65.2 }
  ],
  position: { top: 20, left: 900 } 
};

export const heaterTemperatureData = [
  { id: 'heater_temp1', value: 656, position: { top: 140, left: 688 }, label: 'T' },
  { id: 'heater_temp2', value: 507, position: { top: 140, left: 770 }, label: 'T' }
];

export const heaterAirParams = [
  { id: 'tha', value: 336, label: 'Tха', position: { top: 232, left: 600 } },
  { id: 'pha', value: 108, label: 'Pха', position: { top: 232, left: 660 } }
];

export const waterHeaterParams = [
  { id: 'wh_pressure', value: -0.12, label: 'P', position: { top: 215, left: 730 } },
  { id: 'wh_temp', value: 403, label: 'T', position: { top: 215, left: 785 } }
];

export const suctionPressureData = [
  { id: 'suction_pressure', value: -32, label: 'Pси', position: { top: 255, left: 630 } }
];

export const flowForceData = [
  { id: 'f650', value: -650, label: 'F', position: { top: 290, left: 665 } }
];

export const waterHeaterTempData = [
  { id: 'wh_temp2', value: 397, label: 'T', position: { top: 280, left: 765 } }
];

export const airHeaterParams = [
  { id: 'ah_pressure', value: -0.52, label: 'P', position: { top: 324, left: 740} },
  { id: 'ah_temp', value: 262, label: 'T', position: { top: 324, left: 790 } }
];

export const o2SensorData = [
  { id: 'o2_level', value: 19.0, label: 'O₂', position: { top: 340, left: 760 } }
];

export const blowerStaticPressureData = [
  { id: 'blower_pressure', value: 130, label: 'Pср', position: { top: 357, left: 830 } }
];

export const airHeaterVacuumData = [
  { id: 'ah_vacuum', value: -0.3, label: 'P', position: { top: 400, left: 750 } }
];

export const suctionAirTempData = [
  { id: 'suction_temp', value: 34, label: 'T', position: { top: 383, left: 873 } }
];

export const exhaustBlowerTempData = [
  { id: 'exh_temp', value: 167, label: 'T', position: { top: 420, left: 872 } }
];

export const lowerZoneTempData = [
  { id: 'lower_temp', value: 141, label: 'T', position: { top: 445, left: 872 } }
];

export const steamFuelPressureData = [
  { id: 'steam_pressure', value: 8, label: 'Руур', position: { top: 500, left: 620 } },
  { id: 'fuel_pressure', value: 8, label: 'Рмаз', position: { top: 500, left: 620 } }
];
