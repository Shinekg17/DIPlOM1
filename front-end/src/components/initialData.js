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

  