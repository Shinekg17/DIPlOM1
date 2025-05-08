// This file contains all the style objects used in the application

// Өгөгдлийн стиль 
export const dataBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  zIndex: 10
};

export const labelStyle = {
  backgroundColor: 'red',
  color: 'white',
  padding: '2px 3px',
  fontWeight: 'bold',
  fontSize: '8px'
};

export const valueStyle = {
  backgroundColor: 'black',
  color: 'yellow',
  padding: '2px 5px',
  fontWeight: 'bold',
  fontSize: '8px',
  marginLeft: '1px',
  minWidth: '20px',
  textAlign: 'center'
};

// Хувь хэмжээний дэлгэцийн стиль (зурагт харагдсанаар ногоон дэвсгэр дээр)
export const percentageDisplayStyle = {
  backgroundColor: 'green',
  color: 'white',
  padding: '1px 1px',
  fontWeight: 'bold',
  fontSize: '10px',
  marginLeft: '1px',
  minWidth: '20px',
  textAlign: 'center',
  border: '1px solid black'
};

export const inputStyle = {
  backgroundColor: 'black',
  color: 'yellow',
  border: '1px solid yellow',
  padding: '1px 3px',
  fontWeight: 'bold',
  fontSize: '10px',
  marginLeft: '1px',
  width: '40px',
  textAlign: 'center'
};

// Хувь хэмжээний оролтын стиль
export const percentageInputStyle = {
  ...inputStyle,
  backgroundColor: 'green',
  color: 'white',
  border: '1px solid white'
};

// Шинээр нэмсэн панелийн стиль
export const panelContainerStyle = {
  border: '2px solid #009a00',
  backgroundColor: '#007a00',
  width: '55px',
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  zIndex: 10
};

export const panelTitleStyle = {
  backgroundColor: '#006a00',
  color: 'white',
  padding: '2px 4px',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '10px'
};

export const panelRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  borderTop: '1px solid #008a00'
};

export const panelLabelStyle = {
  backgroundColor: 'red',
  color: 'white',
  padding: '1px',
  width: '20px',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '10px'
};

export const panelValueStyle = {
  backgroundColor: 'black',
  color: 'yellow',
  padding: '1px',
  width: '30px',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '10px'
};

export const panelInputStyle = {
  backgroundColor: 'black',
  color: 'yellow',
  border: '1px solid yellow',
  padding: '1px',
  width: '28px',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '10px'
};

// Шинэ загварын панелийн стиль
export const newPanelContainerStyle = {
  border: '1px solid #035e03',
  backgroundColor: 'green',
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  zIndex: 10,
  padding: '1px'
};

export const newPanelRowStyle = {
  display: 'flex',
  width: '100%'
};

// Changed from function to object with fixed styles
export const newPanelCellStyle = {
  display: 'flex',
  flexDirection: 'column',
  margin: '1px'
};

// Changed from function to object with fixed styles
export const newPanelLabelStyle = {
  backgroundColor: 'red',
  color: 'black',
  padding: '1px 1px',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '10px',
  minWidth: '15px'
};

export const newPanelValueStyle = {
  backgroundColor: 'black',
  color: 'yellow',
  padding: '1px',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '10px',
  minWidth: '30px'
};

export const newPanelInputStyle = {
  backgroundColor: 'black',
  color: 'yellow',
  border: '1px solid yellow',
  padding: '1px',
  width: '35px',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '10px'
};

// Дижитал дэлгэцийн панел стиль
export const digitalPanelContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid black',
  overflow: 'hidden',
  backgroundColor: 'green',
  padding: '2px',
  position: 'absolute',
  zIndex: 10
};

export const digitalPanelRowStyle = {
  display: 'flex',
  width: '100%'
};

export const digitalPanelCellContainerStyle = {
  display: 'flex',
  margin: '1px',
  alignItems: 'center'
};

export const digitalPanelLabelStyle = {
  backgroundColor: '#d00',
  color: 'white',
  padding: '2px 4px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  width: '16px',
  height: '14px'
};

export const digitalPanelValueStyle = {
  backgroundColor: 'black',
  color: 'yellow',
  padding: '2px 10px',
  minWidth: '20px',
  height: '14px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  fontSize: '10px',
  marginLeft: '2px'
};

export const digitalPanelInputStyle = {
  backgroundColor: 'black',
  color: '#0f0',
  border: '1px solid #0f0',
  padding: '2px 1px',
  width: '20px',
  height: '20px',
  fontWeight: 'bold',
  marginLeft: '2px',
};

// Шинээр нэмсэн хяналтын панелийн стиль
export const controlPanelContainerStyle = {
  border: '2px solid black',
  backgroundColor: 'green',
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  zIndex: 10,
  width: '180px'
};

export const controlPanelRowStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%',
  borderBottom: '1px solid black'
};

export const getLabelColorStyle = (color) => {
  if (color === 'red') {
    return { backgroundColor: '#d00' };
  } else if (color === 'lightblue') {
    return { backgroundColor: '#8ad' };
  } else if (color === 'white') {
    return { 
      backgroundColor: 'white',
      color: 'black'
    };
  }
  return { backgroundColor: color };
};

export const controlPanelLabelStyle = {
  backgroundColor: '#d00',
  color: 'white',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '25px',
  fontSize: '10px',
  margin: '1px'
};

export const controlPanelValueStyle = {
  backgroundColor: 'black',
  color: 'yellow',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '25px',
  fontSize: '10px',
  margin: '2px'
};

export const controlPanelCellContainerStyle = {
  display: 'flex',
  margin: '1px',
  flexGrow: 1
};

export const controlPanelInputStyle = {
  backgroundColor: 'black',
  color: 'yellow',
  border: '1px solid yellow',
  width: '50px',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '10px',
  margin: '1px'
};