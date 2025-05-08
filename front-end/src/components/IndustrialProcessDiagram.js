// Main component file
import React, { useState } from 'react';
import { temperatureData, pressureData, percentageData, panelData, 
         newPanelData, digitalPanelData, controlPanelData,
         temperatureVoltageData, processMonitorData } from './initialData';
import { renderDataItem, renderPanel, renderNewPanel, 
         renderDigitalPanel, renderControlPanel, 
         renderMonitoringPanel, renderProcessPanel } from './renderers';

const IndustrialProcessDiagram = () => {
  // График дээр харуулах параметр сонгох
  const [selectedParams, setSelectedParams] = useState(['t1', 'p1', 'percentage']);
  
  // Өгөгдлүүдийг state-д хадгалах
  const [temperature, setTemperature] = useState(temperatureData);
  const [pressure, setPressure] = useState(pressureData);
  const [percentage, setPercentage] = useState(percentageData);
  const [panels, setPanels] = useState(panelData);
  const [newPanels, setNewPanels] = useState(newPanelData);
  const [digitalPanels, setDigitalPanels] = useState(digitalPanelData);
  const [controlPanel, setControlPanel] = useState(controlPanelData);
  const [monitoringPanel, setMonitoringPanel] = useState(temperatureVoltageData);
  const [processPanel, setProcessPanel] = useState(processMonitorData);
  
  // Засварлах горимд байгаа эсэх
  const [editMode, setEditMode] = useState(false);
  
  // Засварлаж байгаа утгыг хадгалах
  const [editValues, setEditValues] = useState({});

  // Параметр сонголт өөрчлөх
  const handleParamSelection = (param) => {
    setSelectedParams(prev => {
      if (prev.includes(param)) {
        return prev.filter(p => p !== param);
      } else {
        if (prev.length < 4) { // Хамгийн ихдээ 4 параметр сонгох
          return [...prev, param];
        }
        return prev;
      }
    });
  };

  // Засварлах горим руу шилжүүлэх
  const toggleEditMode = () => {
    if (editMode) {
      // Засварлах горимоос гарахдаа өөрчлөлтүүдийг хадгалах
      const updatedTempData = temperature.map(item => ({
        ...item,
        value: editValues[item.id] !== undefined ? Number(editValues[item.id]) : item.value
      }));
      
      const updatedPressData = pressure.map(item => ({
        ...item,
        value: editValues[item.id] !== undefined ? Number(editValues[item.id]) : item.value
      }));
      
      const updatedPercentData = percentage.map(item => ({
        ...item,
        value: editValues[item.id] !== undefined ? Number(editValues[item.id]) : item.value
      }));
      
      // Шинээр нэмсэн панел өгөгдлийг шинэчлэх
      const updatedPanelData = panels.map(panel => {
        return {
          ...panel,
          readings: panel.readings.map(reading => {
            const editKey = `${panel.id}_${reading.label}`;
            return {
              ...reading,
              value: editValues[editKey] !== undefined ? Number(editValues[editKey]) : reading.value
            };
          })
        };
      });
      
      // Шинэ загварын панел өгөгдлийг шинэчлэх
      const updatedNewPanelData = newPanels.map(panel => {
        return {
          ...panel,
          rows: panel.rows.map((row, rowIndex) => {
            return {
              ...row,
              cells: row.cells.map((cell, cellIndex) => {
                const editKey = `${panel.id}_row${rowIndex}_cell${cellIndex}`;
                return {
                  ...cell,
                  value: editValues[editKey] !== undefined ? editValues[editKey] : cell.value
                };
              })
            };
          })
        };
      });
      
      // Дижитал дэлгэцийн панел өгөгдлийг шинэчлэх
      const updatedDigitalPanelData = digitalPanels.map(panel => {
        return {
          ...panel,
          rows: panel.rows.map((row, rowIndex) => {
            return {
              ...row,
              cells: row.cells.map((cell, cellIndex) => {
                const editKey = `${panel.id}_row${rowIndex}_cell${cellIndex}`;
                return {
                  ...cell,
                  value: editValues[editKey] !== undefined ? Number(editValues[editKey]) : cell.value
                };
              })
            };
          })
        };
      });
      
      // Шинээр нэмсэн хяналтын панел өгөгдлийг шинэчлэх
      const updatedControlPanelData = {
        ...controlPanel,
        rows: controlPanel.rows.map((row, rowIndex) => {
          return {
            ...row,
            cells: row.cells.map((cell, cellIndex) => {
              const editKey = `${controlPanel.id}_row${rowIndex}_cell${cellIndex}`;
              return {
                ...cell,
                value: editValues[editKey] !== undefined ? editValues[editKey] : cell.value
              };
            })
          };
        })
      };
      
      setTemperature(updatedTempData);
      setPressure(updatedPressData);
      setPercentage(updatedPercentData);
      setPanels(updatedPanelData);
      setNewPanels(updatedNewPanelData);
      setDigitalPanels(updatedDigitalPanelData);
      setControlPanel(updatedControlPanelData);
    } else {
      // Засварлах горим руу орохдоо одоогийн утгуудыг edit values руу хуулах
      const currentValues = {};
      temperature.forEach(item => {
        currentValues[item.id] = item.value;
      });
      pressure.forEach(item => {
        currentValues[item.id] = item.value;
      });
      percentage.forEach(item => {
        currentValues[item.id] = item.value;
      });
      
      // Шинээр нэмсэн панел өгөгдлийг edit values руу нэмэх
      panels.forEach(panel => {
        panel.readings.forEach(reading => {
          const editKey = `${panel.id}_${reading.label}`;
          currentValues[editKey] = reading.value;
        });
      });
      
      // Шинэ загварын панел өгөгдлийг edit values руу нэмэх
      newPanels.forEach(panel => {
        panel.rows.forEach((row, rowIndex) => {
          row.cells.forEach((cell, cellIndex) => {
            const editKey = `${panel.id}_row${rowIndex}_cell${cellIndex}`;
            currentValues[editKey] = cell.value;
          });
        });
      });
      
      // Дижитал дэлгэцийн панел өгөгдлийг edit values руу нэмэх
      digitalPanels.forEach(panel => {
        panel.rows.forEach((row, rowIndex) => {
          row.cells.forEach((cell, cellIndex) => {
            const editKey = `${panel.id}_row${rowIndex}_cell${cellIndex}`;
            currentValues[editKey] = cell.value;
          });
        });
      });
      
      // Шинээр нэмсэн хяналтын панел өгөгдлийг edit values руу нэмэх
      controlPanel.rows.forEach((row, rowIndex) => {
        row.cells.forEach((cell, cellIndex) => {
          const editKey = `${controlPanel.id}_row${rowIndex}_cell${cellIndex}`;
          currentValues[editKey] = cell.value;
        });
      });
      
      setEditValues(currentValues);
    }
    setEditMode(!editMode);
  };

  // Засварлаж байгаа утгыг өөрчлөх
  const handleValueChange = (id, newValue) => {
    setEditValues(prev => ({
      ...prev,
      [id]: newValue
    }));
  };

  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      maxWidth: '1700px',
      height: '700px', 
      backgroundColor: 'white', 
      overflow: 'auto',
      margin: '0 auto' // Center the container
    }}>
      {/* Фон зураг */}
      <img 
        src="/boilersystem.png" 
        alt="Industrial Process Diagram" 
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1, objectFit: 'contain' }}
      />
      
      {/* Температурын өгөгдлүүдийг харуулах */}
      {temperature.map(item => renderDataItem(item, editMode, editValues, handleValueChange))}
      
      {/* Даралтын өгөгдлүүдийг харуулах */}
      {pressure.map(item => renderDataItem(item, editMode, editValues, handleValueChange))}
      
      {/* Хувь хэмжээний өгөгдлүүдийг харуулах */}
      {percentage.map(item => renderDataItem(item, editMode, editValues, handleValueChange))}
      
      {/* Шинээр нэмсэн панелийг харуулах */}
      {panels.map(panel => renderPanel(panel, editMode, editValues, handleValueChange))}
      
      {/* Шинэ загварын панелийг харуулах */}
      {newPanels.map(panel => renderNewPanel(panel, editMode, editValues, handleValueChange))}
      
      {/* Дижитал дэлгэцийн панелийг харуулах */}
      {digitalPanels.map(panel => renderDigitalPanel(panel, editMode, editValues, handleValueChange))}
      
      {/* Шинээр нэмсэн хяналтын панелийг харуулах */}
      {renderControlPanel(controlPanel, editMode, editValues, handleValueChange)}
      
      {renderMonitoringPanel(monitoringPanel, editMode, editValues, handleValueChange)}

      {renderProcessPanel(processPanel, editMode, editValues, handleValueChange)}
      
      {/* Засварлах товчлуур */}
      <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 10 }}>
        <button 
          onClick={toggleEditMode}
          style={{
            backgroundColor: editMode ? '#ff5555' : '#55aa55',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '8px 12px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          {editMode ? 'Хадгалах' : 'Утга Засах'}
        </button>
      </div>
    </div>
  );
};

export default IndustrialProcessDiagram;