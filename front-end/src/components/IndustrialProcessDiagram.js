// Main component file
import React, { useState, useEffect} from 'react';
import { temperatureData, pressureData, percentageData, panelData, 
         newPanelData, digitalPanelData, controlPanelData,
         temperatureVoltageData, processMonitorData, codeBlockPanelData, 
         boilerGaugePanel , boilerInfoPanelData, heaterTemperatureData, 
         heaterAirParams, waterHeaterParams, suctionPressureData, flowForceData, 
         waterHeaterTempData, airHeaterParams,  o2SensorData, blowerStaticPressureData,
         airHeaterVacuumData, suctionAirTempData, exhaustBlowerTempData, lowerZoneTempData,
         steamFuelPressureData     } from './initialData';
import { renderDataItem, renderPanel, renderNewPanel, 
         renderDigitalPanel, renderControlPanel, 
         renderMonitoringPanel, renderProcessPanel, renderCodeBlockPanel,
         renderGaugeWithBars , renderBoilerInfoPanel,
         renderHeaterAirParam, renderWaterHeaterParam, renderSuctionPressure, 
         renderFlowForce, renderWaterHeaterTemp, renderAirHeaterParam,
         renderO2Sensor, renderBlowerStaticPressure, renderAirHeaterVacuum,
         renderSuctionAirTemp, renderExhaustBlowerTemp, renderLowerZoneTemp,
         renderSteamFuelPressure} from './renderers';


const IndustrialProcessDiagram = () => {
  // График дээр харуулах параметр сонгох
  
  // Өгөгдлүүдийг state-д хадгалах
  const [temperature, setTemperature] = useState(temperatureData);
  const [pressure, setPressure] = useState(pressureData);
  const [percentage, setPercentage] = useState(percentageData);
  const [panels, setPanels] = useState(panelData);
  const [newPanels, setNewPanels] = useState(newPanelData);
  const [digitalPanels, setDigitalPanels] = useState(digitalPanelData);
  const [controlPanel, setControlPanel] = useState(controlPanelData);
  const [monitoringPanel] = useState(temperatureVoltageData);
  const [processPanel] = useState(processMonitorData);
  const [codeBlocks, setCodeBlocks] = useState(codeBlockPanelData);
  const [gaugePanel, setGaugePanel] = useState(boilerGaugePanel);
  const [boilerPanel, setBoilerPanel] = useState(boilerInfoPanelData);
  const [heaterTemps, setHeaterTemps] = useState(heaterTemperatureData);
  const [airParams, setAirParams] = useState(heaterAirParams);
  const [waterHeater, setWaterHeater] = useState(waterHeaterParams);
  const [suctionPressure, setSuctionPressure] = useState(suctionPressureData);
  const [flowForce, setFlowForce] = useState(flowForceData);
  const [waterHeaterTemp, setWaterHeaterTemp] = useState(waterHeaterTempData);
  const [airHeater, setAirHeater] = useState(airHeaterParams);
  const [o2Sensor, setO2Sensor] = useState(o2SensorData);
  const [blowerPressure, setBlowerPressure] = useState(blowerStaticPressureData);
  const [airHeaterVacuum, setAirHeaterVacuum] = useState(airHeaterVacuumData);
  const [suctionAirTemp, setSuctionAirTemp] = useState(suctionAirTempData);
  const [exhaustTemp, setExhaustTemp] = useState(exhaustBlowerTempData);
  const [lowerTemp, setLowerTemp] = useState(lowerZoneTempData);
  const [steamFuelPressure, setSteamFuelPressure] = useState(steamFuelPressureData);
  const [isOverflow, setIsOverflow] = useState(false);
  const [isReliefOpen, setIsReliefOpen] = useState(false);
  const [actionLogs, setActionLogs] = useState([]);
  const [showLogs, setShowLogs] = useState(false);
  // Засварлах горимд байгаа эсэх
  const [editMode, setEditMode] = useState(false);
  
  // Засварлаж байгаа утгыг хадгалах
  const [editValues, setEditValues] = useState({});



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
      codeBlocks.forEach(block => {
      currentValues[`${block.id}_right`] = block.rightText;
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
      const updatedCodeBlocks = codeBlocks.map(block => ({
      ...block,
      rightText: editValues[`${block.id}_right`] !== undefined ? editValues[`${block.id}_right`] : block.rightText
  }));  
  setCodeBlocks(updatedCodeBlocks);

      setEditValues(currentValues);
    }
    setEditMode(!editMode);
  };

  useEffect(() => {
  const interval = setInterval(() => {
    setBoilerPanel(prev => ({
      ...prev,
      rows: prev.rows.map(row => ({
        ...row,
        value: parseFloat((row.value + (Math.random() * 2 - 1)).toFixed(0))
      }))
    }));
  }, 5000);
  

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  const interval = setInterval(() => {
    setHeaterTemps(prev =>
      prev.map(item => ({
        ...item,
        value: parseFloat((item.value + (Math.random() * 2 - 1)).toFixed(0))
      }))
    );
  }, 5000);


  return () => clearInterval(interval);
}, []); // зөв

useEffect(() => {
  const interval = setInterval(() => {
    setAirParams(prev =>
      prev.map(item => ({
        ...item,
        value: parseFloat((item.value + (Math.random() * 2 - 1)).toFixed(0)) // ±1 хэм өөрчлөлт
      }))
    );
  }, 4000);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  const interval = setInterval(() => {
    setWaterHeater(prev =>
      prev.map(item => ({
        ...item,
        value: parseFloat((item.value + (Math.random() * 2 - 1)).toFixed(0))
      }))
    );
  }, 5000);
  return () => clearInterval(interval);
}, []);

useEffect(() => {
  const interval = setInterval(() => {
    setSuctionPressure(prev =>
      prev.map(item => ({
        ...item,
        value: parseFloat((item.value + (Math.random() * 0.5 - 0.25)).toFixed(0))
      }))
    );
  }, 5000);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  const interval = setInterval(() => {
    setFlowForce(prev =>
      prev.map(item => ({
        ...item,
        value: parseFloat((item.value + (Math.random() * 20 - 10)).toFixed(0))
      }))
    );
  }, 5000);
  return () => clearInterval(interval);
}, []);

useEffect(() => {
  const interval = setInterval(() => {
    setWaterHeaterTemp(prev =>
      prev.map(item => ({
        ...item,
        value: parseFloat((item.value + (Math.random() * 2 - 1)).toFixed(0))
      }))
    );
  }, 5000);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  const interval = setInterval(() => {
    setAirHeater(prev =>
      prev.map(item => ({
        ...item,
        value: parseFloat((item.value + (Math.random() * 1.5 - 0.75)).toFixed(0))
      }))
    );
  }, 5000);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  const interval = setInterval(() => {
    setO2Sensor(prev =>
      prev.map(item => ({
        ...item,
        value: parseFloat((Math.random() * 20).toFixed(0)) // 0.0 – 5.0% хооронд хэлбэлзэнэ
      }))
    );
  }, 5000);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  const interval = setInterval(() => {
    setBlowerPressure(prev =>
      prev.map(item => ({
        ...item,
        value: Math.round(item.value + (Math.random() * 10 - 5)) // +/–5 хэлбэлзэл
      }))
    );
  }, 5000);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  const interval = setInterval(() => {
    setAirHeaterVacuum(prev =>
      prev.map(item => ({
        ...item,
        value: parseFloat((item.value + (Math.random() * 0.3 - 0.15)).toFixed(1))
      }))
    );
  }, 5000);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  const interval = setInterval(() => {
    setSuctionAirTemp(prev =>
      prev.map(item => ({
        ...item,
        value: Math.round(item.value + (Math.random() * 3 - 1.5))
      }))
    );
  }, 5000);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  const interval = setInterval(() => {
    setExhaustTemp(prev =>
      prev.map(item => ({
        ...item,
        value: Math.round(item.value + (Math.random() * 4 - 2))
      }))
    );
  }, 5000);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  const interval = setInterval(() => {
    setLowerTemp(prev =>
      prev.map(item => ({
        ...item,
        value: Math.round(item.value + (Math.random() * 4 - 2))
      }))
    );
  }, 5000);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  const interval = setInterval(() => {
    setSteamFuelPressure(prev =>
      prev.map(item => ({
        ...item,
        value: Math.round(item.value + (Math.random() * 2 - 1)) // +/–1 хэлбэлзэл
      }))
    );
  }, 5000);

  return () => clearInterval(interval);
}, []);

 

  // --- Аваарын хамгаалалт ---
 useEffect(() => {
  const l1 = gaugePanel.bars.find(bar => bar.label === 'L1')?.value ?? 0;
  const l2 = gaugePanel.bars.find(bar => bar.label === 'L2')?.value ?? 0;
  const l3 = gaugePanel.bars.find(bar => bar.label === 'L3')?.value ?? 0;

  if (l1 >= 100 || l2 >= 100 || l3 >= 100) {
    setIsOverflow(true);
    setIsReliefOpen(true);
  } else if (l1 <= 50 && l2 <= 50 && l3 <= 50) {
    setIsOverflow(false);
    setIsReliefOpen(false);
  }
}, [gaugePanel]);

useEffect(() => {
  if (!isReliefOpen) return;

  const interval = setInterval(() => {
    setGaugePanel(prev => {
      const newBars = prev.bars.map(bar => {
        const decreasedValue = bar.value - 2; // 2-р бууруулна
        const clampedValue = Math.max(decreasedValue, 0); // 0-ээс доош орохгүй
        const newLevel = Math.max(0, Math.min(1, (clampedValue + 50) / 100));
        return { ...bar, value: clampedValue, level: newLevel };
      });
      return { ...prev, bars: newBars };
    });
  }, 500); // 1 сек тутам бууруулах

  return () => clearInterval(interval);
}, [isReliefOpen]);

useEffect(() => {
  const l1 = gaugePanel.bars.find(bar => bar.label === 'L1')?.value ?? 0;
  const l2 = gaugePanel.bars.find(bar => bar.label === 'L2')?.value ?? 0;
  const l3 = gaugePanel.bars.find(bar => bar.label === 'L3')?.value ?? 0;

  const avgLevel = (l1 + l2 + l3) / 3;

  if (avgLevel <= -150) {
    setIsOverflow(true);
    stopBoiler(); // зуух зогсоох
    setActionLogs("SAFETY", "Тогооны түвшин -150 хүрсэн тул ЗУУХ ЗОГСООВ");
  } else if (avgLevel <= -100) {
    setIsOverflow(true);
    setActionLogs("WARNING", "Тогооны түвшин -100 хүрсэн, гэрлэн дохио өгсөн");
  } else {
    setIsOverflow(false); // сэргээнэ
  }
}, [gaugePanel]);
 const toggleRelief = () => {
  const newState = !isReliefOpen;
  setIsReliefOpen(newState);


  // Зөвхөн 1 удаа log бүртгэнэ
  setActionLogs(logs => [
    ...logs,
    `Аваарын юүлүүр ${newState ? 'нээгдсэн' : 'хаагдсан'} (${new Date().toLocaleTimeString()})`
  ]);

  // Хэрвээ юүлүүр нээгдэж байвал хэмжигчийн утгыг бууруулна
  if (newState) {
    setGaugePanel(prev => {
      const newBars = prev.bars.map(bar => {
        if (['L1', 'L2', 'L3'].includes(bar.label)) {
          const newValue = Math.max(bar.value - 60, 0);
          const newLevel = Math.max(0, Math.min(1, (newValue + 50) / 100));
          return { ...bar, value: newValue, level: newLevel };
        }
        return bar;
      });
      return { ...prev, bars: newBars };
    });
  }
};

const stopBoiler = () => {
  console.warn("🚨 Зуух автоматаар зогсов.");
  // Та хүсвэл нэмэлт log, toggle, үнэлгээ өөрчлөлт оруулж болно
};
  

const increaseBoilerLevel = () => {
  setGaugePanel(prev => {
    const newBars = prev.bars.map(bar => {
      const increasedValue = Math.min(bar.value + 15, 150);
      const newLevel = Math.max(0, Math.min(1, increasedValue / 100));
      return { ...bar, value: increasedValue, level: newLevel };
    });

    // ✅ Үйлдлийг бүртгэх
   
    return { ...prev, bars: newBars };

    
  });
   setActionLogs(logs => [
      ...logs,
      `Тогооны түвшин нэмэгдсэн (${new Date().toLocaleTimeString()})`
    ]);

};

  const decreaseBoilerLevel = () => {
  setGaugePanel(prev => {
    const newBars = prev.bars.map(bar => {
      const decreasedValue = Math.max(bar.value - 20, -160); // -200-аас доош оруулахгүй
      const newLevel = Math.max(0, Math.min(1, (decreasedValue + 50) / 100));
      return { ...bar, value: decreasedValue, level: newLevel };
    });


    return { ...prev, bars: newBars };
    });

    setActionLogs(logs => [
      ...logs,
      `Тогооны түвшин буурсан (${new Date().toLocaleTimeString()})`
    ]);
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
      {temperature.map(item => renderDataItem(item, false, editValues, handleValueChange))}
      
      {/* Даралтын өгөгдлүүдийг харуулах */}
      {pressure.map(item => renderDataItem(item, false, editValues, handleValueChange))}
      
      {/* Хувь хэмжээний өгөгдлүүдийг харуулах */}
      {percentage.map(item => renderDataItem(item, editMode, editValues, handleValueChange))}
      
      {/* Шинээр нэмсэн панелийг харуулах */}
      {panels.map(panel => renderPanel(panel, false, editValues, handleValueChange))}
      
      {/* Шинэ загварын панелийг харуулах */}
      {newPanels.map(panel => renderNewPanel(panel, false, editValues, handleValueChange))}
      
      {/* Дижитал дэлгэцийн панелийг харуулах */}
      {digitalPanels.map(panel => renderDigitalPanel(panel, false, editValues, handleValueChange))}
      
      {/* T КОД блок рендер */}
      {codeBlocks.map(panel => renderCodeBlockPanel(panel, false, editValues, handleValueChange))}
      
      {heaterTemps.map(item => renderDataItem(item, false, editValues, handleValueChange))}

      {airParams.map(item => renderHeaterAirParam(item))}

      {waterHeater.map(item => renderWaterHeaterParam(item))}

      {suctionPressure.map(item => renderSuctionPressure(item))}

      {flowForce.map(item => renderFlowForce(item))}

      {waterHeaterTemp.map(item => renderWaterHeaterTemp(item))}

      {airHeater.map(item => renderAirHeaterParam(item))}

      {o2Sensor.map(item => renderO2Sensor(item))}

      {blowerPressure.map(item => renderBlowerStaticPressure(item))}

      {airHeaterVacuum.map(item => renderAirHeaterVacuum(item))}

      {suctionAirTemp.map(item => renderSuctionAirTemp(item))}

      {exhaustTemp.map(item => renderExhaustBlowerTemp(item))}

      {lowerTemp.map(item => renderLowerZoneTemp(item))}

      {renderSteamFuelPressure(steamFuelPressure)}


      {/* Шинээр нэмсэн хяналтын панелийг харуулах */}
      {renderControlPanel(controlPanel, false, editValues, handleValueChange)}
      
      {renderMonitoringPanel(monitoringPanel, false, editValues, handleValueChange)}

      {renderProcessPanel(processPanel, false, editValues, handleValueChange)}
    
      {renderBoilerInfoPanel(boilerInfoPanelData, false, editValues, handleValueChange)}

      {renderBoilerInfoPanel(boilerPanel, false, editValues, handleValueChange)}

      {renderGaugeWithBars(gaugePanel, false, editValues, handleValueChange)}

      {isOverflow && (
        <div style={{ position: 'absolute', top: '50px', left: '20px', zIndex: 1000, backgroundColor: 'red', color: 'white', padding: '10px', fontWeight: 'bold', animation: 'blinker 0.1s linear infinite', fontSize: '10px'}}>
          ⚠️ТҮВШИН ИХ БАЙНА!🔔
        </div>
      )}

      {isOverflow && (
        <div style={{ position: 'absolute', top: '10px', left: '20px', zIndex: 1000, backgroundColor: 'red', color: 'white', padding: '10px', fontWeight: 'bold', animation: 'blinker 1s linear infinite', fontSize: '12px' }}>
          ⚠️ АВААР: Тогооны түвшин багассан!
        </div>
      )}
      <div style={{ position: 'absolute', top: '195px', left: '500px', zIndex: 1000 }}>
        <button onClick={toggleRelief} style={{ padding: '', backgroundColor: isReliefOpen ? 'orange' : 'green', color: 'white', fontWeight: 'bold', fontSize: '12px' }}>
          {isReliefOpen ? '✅' : '🧯'}
        </button>
      </div>
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

      <div style={{ position: 'absolute', top: '100px', left: '20px', zIndex: 1000 }}>
  <button 
    onClick={increaseBoilerLevel}
    style={{ backgroundColor: 'green', color: 'white', fontWeight: 'bold' }}
  >
    🔼 Тогооны түвшин нэмэх
  </button>

  <div style={{ position: 'absolute', top: '50px', left: '20px', zIndex: 1000 }}>
  <button 
    onClick={decreaseBoilerLevel}
    style={{ backgroundColor: 'crimson', color: 'white', fontWeight: 'bold' }}
  >
    🔽 Тогооны түвшин бууруулах
  </button>
</div>

</div>

<div style={{ position: 'absolute', top: '120px', left: '1200px', zIndex: 1000 }}>
  <button 
    onClick={() => setShowLogs(prev => !prev)}
    style={{
      backgroundColor: '#007bff',
      color: 'white',
      fontWeight: 'bold',
      padding: '6px 10px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }}
  >
    {showLogs ? '✖️ Хаах' : '📋 Үйлдлийг харах'}
  </button>
</div>

{showLogs && (
  <div id="action-log-table" style={{
    position: 'absolute',
    top: '160px',
    left: '1150px',
    zIndex: 1000,
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    maxHeight: '300px',
    overflowY: 'auto',
    width: '350px'
  }}>
    <h4 style={{ marginTop: 0, fontSize: '16px', fontWeight: 'bold' }}>📋 Машинистийн үйлдлийн бүртгэл</h4>
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
      <thead>
        <tr style={{ backgroundColor: '#f2f2f2' }}>
          <th style={{ border: '1px solid #ccc', padding: '6px' }}>#</th>
          <th style={{ border: '1px solid #ccc', padding: '6px' }}>Үйлдэл</th>
          <th style={{ border: '1px solid #ccc', padding: '6px' }}>Цаг</th>
        </tr>
      </thead>
      <tbody>
       {Array.isArray(actionLogs) && actionLogs.slice().reverse().map((log, index) => {
  const [text, time] = log.split('(');
  return (
    <tr key={index}>
      <td style={{ border: '1px solid #ccc', padding: '6px', textAlign: 'center' }}>{index + 1}</td>
      <td style={{ border: '1px solid #ccc', padding: '6px' }}>{text.trim()}</td>
      <td style={{ border: '1px solid #ccc', padding: '6px' }}>{time?.replace(')', '')}</td>
    </tr>
  );
})}
      </tbody>
    </table>
  </div>
  
)}


    </div>
  );
};


export default IndustrialProcessDiagram;