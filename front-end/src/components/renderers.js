// This file contains all the rendering functions for different data types
import React from 'react';
import {
  dataBoxStyle,
  labelStyle,
  valueStyle,
  percentageDisplayStyle,
  inputStyle,
  percentageInputStyle,
  panelContainerStyle,
  panelTitleStyle,
  panelRowStyle,
  panelLabelStyle,
  panelValueStyle,
  panelInputStyle,
  newPanelContainerStyle,
  newPanelRowStyle,
  newPanelCellStyle,
  newPanelLabelStyle,
  newPanelValueStyle,
  newPanelInputStyle,
  digitalPanelContainerStyle,
  digitalPanelRowStyle,
  digitalPanelCellContainerStyle,
  digitalPanelLabelStyle,
  digitalPanelValueStyle,
  digitalPanelInputStyle,
  controlPanelContainerStyle,
  controlPanelRowStyle,
  controlPanelLabelStyle,
  controlPanelValueStyle,
  controlPanelCellContainerStyle,
  controlPanelInputStyle,
  tvCodeBlockStyle,
  tvLeftStyle,
  tvRightStyle,
  heaterTempContainerStyle,
  heaterTempLabelStyle,
  heaterTempValueStyle,
  airParamContainerStyle,
  airParamLabelStyle,
  airParamValueStyle,
  waterHeaterContainerStyle,
  waterHeaterLabelStyle,
  waterHeaterValueStyle,
  suctionPressureContainerStyle,
  suctionPressureLabelStyle,
  suctionPressureValueStyle,
  flowForceContainerStyle,
  flowForceLabelStyle,
  flowForceValueStyle,
  waterHeaterTempContainerStyle,
  waterHeaterTempLabelStyle,
  waterHeaterTempValueStyle,
   airHeaterContainerStyle,
  airHeaterLabelStyle,
  airHeaterValueStyle,
  o2SensorContainerStyle,
  o2SensorLabelStyle,
  o2SensorValueStyle,
  blowerPressureContainerStyle,
  blowerPressureLabelStyle,
  blowerPressureValueStyle,
  airHeaterVacuumContainerStyle,
  airHeaterVacuumLabelStyle,
  airHeaterVacuumValueStyle,
  suctionAirTempContainerStyle,
  suctionAirTempLabelStyle,
  suctionAirTempValueStyle,
  exhaustBlowerTempContainerStyle,
  exhaustBlowerTempLabelStyle,
  exhaustBlowerTempValueStyle,
  lowerZoneTempContainerStyle,
  lowerZoneTempLabelStyle,
  lowerZoneTempValueStyle,
   dualPressureContainerStyle,
  dualPressureRowStyle,
  dualPressureLabelStyle,
  dualPressureValueStyle
} from './styles';

// Өгөгдлийн элемент үүсгэх функц
export const renderDataItem = (item, editMode, editValues, handleValueChange) => (
  <div 
    key={item.id}
    style={{
      ...dataBoxStyle,
      top: `${item.position.top}px`,
      left: `${item.position.left}px`
    }}
  >
    <div style={labelStyle}>{item.label}</div>
    {editMode ? (
      <input
        type="number"
        value={editValues[item.id] || ""}
        onChange={(e) => handleValueChange(item.id, e.target.value)}
        style={item.label === '%' ? percentageInputStyle : inputStyle}
        step="0.1"
      />
    ) : (
      <div style={item.label === '' ? percentageDisplayStyle : valueStyle}>
        {item.value}{item.label === '' ? '' : ''}
      </div>
    )}
  </div>
);

// Шинээр нэмсэн панел элемент үүсгэх функц
export const renderPanel = (panel, editMode, editValues, handleValueChange) => (
  <div
    key={panel.id}
    style={{
      ...panelContainerStyle,
      top: `${panel.position.top}px`,
      left: `${panel.position.left}px`
    }}
  >
    <div style={panelTitleStyle}>{panel.title}</div>
    {panel.readings.map((reading, index) => (
      <div key={index} style={panelRowStyle}>
        <div style={panelLabelStyle}>{reading.label}</div>
        {editMode ? (
          <input
            type="number"
            value={editValues[`${panel.id}_${reading.label}`] || ""}
            onChange={(e) => handleValueChange(`${panel.id}_${reading.label}`, e.target.value)}
            style={panelInputStyle}
            step="0.1"
          />
        ) : (
          <div style={panelValueStyle}>
            {reading.value}
          </div>
        )}
      </div>
    ))}
  </div>
);

// Шинэ загварын панел элемент үүсгэх функц
export const renderNewPanel = (panel, editMode, editValues, handleValueChange) => (
  <div
    key={panel.id}
    style={{
      ...newPanelContainerStyle,
      top: `${panel.position.top}px`,
      left: `${panel.position.left}px`
    }}
  >
    {panel.rows.map((row, rowIndex) => (
      <div key={rowIndex} style={newPanelRowStyle}>
        {row.cells.map((cell, cellIndex) => (
          <div key={cellIndex} style={newPanelCellStyle}>
            <div style={{
              ...newPanelLabelStyle,
              backgroundColor: cell.color || 'red'
            }}>
              {cell.label}
            </div>
            {editMode ? (
              <input
                type="text"
                value={editValues[`${panel.id}_row${rowIndex}_cell${cellIndex}`] || ""}
                onChange={(e) => handleValueChange(`${panel.id}_row${rowIndex}_cell${cellIndex}`, e.target.value)}
                style={newPanelInputStyle}
              />
            ) : (
              <div style={newPanelValueStyle}>
                {cell.value}
              </div>
            )}
          </div>
        ))}
      </div>
    ))}
  </div>
);

// Дижитал дэлгэцийн панел элемент үүсгэх функц
export const renderDigitalPanel = (panel, editMode, editValues, handleValueChange) => (
  <div
    key={panel.id}
    style={{
      ...digitalPanelContainerStyle,
      top: `${panel.position.top}px`,
      left: `${panel.position.left}px`
    }}
  >
    {panel.rows.map((row, rowIndex) => (
      <div key={rowIndex} style={digitalPanelRowStyle}>
        {row.cells.map((cell, cellIndex) => (
          <div key={cellIndex} style={digitalPanelCellContainerStyle}>
            <div style={{
              ...digitalPanelLabelStyle,
              backgroundColor: cell.labelColor || '#d00'
            }}>
              {cell.label}
            </div>
            {editMode ? (
              <input
                type="number"
                value={editValues[`${panel.id}_row${rowIndex}_cell${cellIndex}`] || ""}
                onChange={(e) => handleValueChange(`${panel.id}_row${rowIndex}_cell${cellIndex}`, e.target.value)}
                style={digitalPanelInputStyle}
              />
            ) : (
              <div style={digitalPanelValueStyle}>
                {cell.value}
              </div>
            )}
          </div>
        ))}
      </div>
    ))}
  </div>
);

// Helper to get background color based on cell color
const getCellBackgroundColor = (color) => {
  if (color === 'red') return '#d00';
  if (color === 'lightblue') return '#8ad';
  if (color === 'white') return 'white';
  return color || '#d00';
};

// Шинээр нэмсэн хяналтын панел элемент үүсгэх функц
export const renderControlPanel = (panel, editMode, editValues, handleValueChange) => (
  <div
    key={panel.id}
    style={{
      ...controlPanelContainerStyle,
      top: `${panel.position.top}px`,
      left: `${panel.position.left}px`
    }}
  >
    {panel.rows.map((row, rowIndex) => (
      <div key={rowIndex} style={controlPanelRowStyle}>
        {row.cells.map((cell, cellIndex) => (
          <div key={cellIndex} style={controlPanelCellContainerStyle}>
            <div style={{
              ...controlPanelLabelStyle,
              backgroundColor: getCellBackgroundColor(cell.color),
              color: cell.color === 'white' ? 'black' : 'white',
            }}>
              {cell.label}
            </div>
            {editMode ? (
              <input
                type="text"
                value={editValues[`${panel.id}_row${rowIndex}_cell${cellIndex}`] || ""}
                onChange={(e) => handleValueChange(`${panel.id}_row${rowIndex}_cell${cellIndex}`, e.target.value)}
                style={controlPanelInputStyle}
              />
            ) : (
              <div style={controlPanelValueStyle}>
                {cell.value}
              </div>
            )}
          </div>
        ))}
      </div>
    ))}
  </div>
);

export const renderMonitoringPanel = (panel, editMode, editValues, handleValueChange) => (
  <div
    key={panel.id}
    style={{
      ...digitalPanelContainerStyle,
      top: `${panel.position.top}px`,
      left: `${panel.position.left}px`
    }}
  >
    {panel.rows.map((row, rowIndex) => (
      <div key={rowIndex} style={digitalPanelRowStyle}>
        {row.cells.map((cell, cellIndex) => (
          <div key={cellIndex} style={digitalPanelCellContainerStyle}>
            <div style={{
              ...digitalPanelLabelStyle,
              backgroundColor: cell.labelColor || '#d00'
            }}>
              {cell.label}
            </div>
            {editMode ? (
              <input
                type="number"
                value={editValues[`${panel.id}_row${rowIndex}_cell${cellIndex}`] || ""}
                onChange={(e) => handleValueChange(`${panel.id}_row${rowIndex}_cell${cellIndex}`, e.target.value)}
                style={digitalPanelInputStyle}
              />
            ) : (
              <div style={digitalPanelValueStyle}>
                {cell.value}
              </div>
            )}
          </div>
        ))}
      </div>
    ))}
  </div>
);

export const renderProcessPanel = (panel, editMode, editValues, handleValueChange) => (
  <div
    key={panel.id}
    style={{
      ...digitalPanelContainerStyle,
      top: `${panel.position.top}px`,
      left: `${panel.position.left}px`
    }}
  >
    {panel.rows.map((row, rowIndex) => (
      <div key={rowIndex} style={digitalPanelRowStyle}>
        {row.cells.map((cell, cellIndex) => (
          <div key={cellIndex} style={digitalPanelCellContainerStyle}>
            <div style={{
              ...digitalPanelLabelStyle,
              backgroundColor: cell.labelColor || '#d00'
            }}>
              {cell.label}
            </div>
            {editMode ? (
              <input
                type="number"
                value={editValues[`${panel.id}_row${rowIndex}_cell${cellIndex}`] || ""}
                onChange={(e) => handleValueChange(`${panel.id}_row${rowIndex}_cell${cellIndex}`, e.target.value)}
                style={digitalPanelInputStyle}
              />
            ) : (
              <div style={digitalPanelValueStyle}>
                {cell.value}
              </div>
            )}
          </div>
        ))}
      </div>
    ))}
  </div>
);

export const renderCodeBlockPanel = (panel, editMode, editValues, handleValueChange) => (
  <div
    key={panel.id}
    style={{
      ...tvCodeBlockStyle,
      top: `${panel.position.top}px`,
      left: `${panel.position.left}px`
    }}
  >
    {editMode ? (
      <>
        <input
          type="text"
          value={editValues[`${panel.id}_left`] || panel.leftText}
          onChange={(e) => handleValueChange(`${panel.id}_left`, e.target.value)}
          style={{ ...tvLeftStyle, fontSize: '14px', width: '80px' }}
        />
        <input
          type="text"
          value={editValues[`${panel.id}_right`] || panel.rightText}
          onChange={(e) => handleValueChange(`${panel.id}_right`, e.target.value)}
          style={{ ...tvRightStyle, fontSize: '14px', width: '40px' }}
        />
      </>
    ) : (
      <>
        <div style={tvLeftStyle}>{panel.leftText}</div>
        <div style={tvRightStyle}>{panel.rightText}</div>
      </>
    )}
  </div>
);


export const renderBoilerInfoPanel = (panel, editMode, editValues, handleValueChange) => (
  <div
    key={panel.id}
    style={{
      position: 'absolute',
      top: `${panel.position.top}px`,
      left: `${panel.position.left}px`,
      backgroundColor: 'black',
      zIndex: 10
    }}
  >
    {panel.rows.map((row, index) => (
      <div key={index} style={{ display: 'flex', margin: '2px 0' }}>
        <div style={{
          width: '40px',
          backgroundColor: 'red',
          color: 'white',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '10px',
          border: '1px solid white'
        }}>
          {row.label}
        </div>
        <div style={{
          width: '40px',
          backgroundColor: 'black',
          color: 'yellow',
          textAlign: 'center',
          fontSize: '10px',
          border: '1px solid white'
        }}>
          {editMode ? (
            <input
              type="number"
              value={editValues[`${panel.id}_${row.label}`] || row.value}
              onChange={(e) => handleValueChange(`${panel.id}_${row.label}`, e.target.value)}
              style={{
                width: '100%',
                textAlign: 'center',
                backgroundColor: 'black',
                color: 'yellow',
                border: 'none',
                fontSize: '10px'
              }}
            />
          ) : (
            row.value
          )}
        </div>
      </div>
    ))}
  </div>
);

export const renderHeaterTemperature = (item) => (
  <div
    key={item.id}
    style={{
      ...heaterTempContainerStyle,
      top: `${item.position.top}px`,
      left: `${item.position.left}px`
    }}
  >
    <div style={heaterTempLabelStyle}>{item.label}</div>
    <div style={heaterTempValueStyle}>{item.value}</div>
  </div>
);

export const renderHeaterAirParam = (item) => (
  <div
    key={item.id}
    style={{
      ...airParamContainerStyle,
      top: `${item.position.top}px`,
      left: `${item.position.left}px`
    }}
  >
    <div style={airParamLabelStyle}>{item.label}</div>
    <div style={airParamValueStyle}>{item.value}</div>
  </div>
);

export const renderWaterHeaterParam = (item) => (
  <div
    key={item.id}
    style={{
      ...waterHeaterContainerStyle,
      top: `${item.position.top}px`,
      left: `${item.position.left}px`
    }}
  >
    <div style={waterHeaterLabelStyle}>{item.label}</div>
    <div style={waterHeaterValueStyle}>{item.value}</div>
  </div>
);

export const renderSuctionPressure = (item) => (
  <div
    key={item.id}
    style={{
      ...suctionPressureContainerStyle,
      top: `${item.position.top}px`,
      left: `${item.position.left}px`
    }}
  >
    <div style={suctionPressureLabelStyle}>{item.label}</div>
    <div style={suctionPressureValueStyle}>{item.value}</div>
  </div>
);

export const renderFlowForce = (item) => (
  <div
    key={item.id}
    style={{
      ...flowForceContainerStyle,
      top: `${item.position.top}px`,
      left: `${item.position.left}px`
    }}
  >
    <div style={flowForceLabelStyle}>{item.label}</div>
    <div style={flowForceValueStyle}>{item.value}</div>
  </div>
);

export const renderWaterHeaterTemp = (item) => (
  <div
    key={item.id}
    style={{
      ...waterHeaterTempContainerStyle,
      top: `${item.position.top}px`,
      left: `${item.position.left}px`
    }}
  >
    <div style={waterHeaterTempLabelStyle}>{item.label}</div>
    <div style={waterHeaterTempValueStyle}>{item.value}</div>
  </div>
);

export const renderAirHeaterParam = (item) => (
  <div
    key={item.id}
    style={{
      ...airHeaterContainerStyle,
      top: `${item.position.top}px`,
      left: `${item.position.left}px`
    }}
  >
    <div style={airHeaterLabelStyle}>{item.label}</div>
    <div style={airHeaterValueStyle}>{item.value}</div>
  </div>
);

export const renderO2Sensor = (item) => (
  <div
    key={item.id}
    style={{
      ...o2SensorContainerStyle,
      top: `${item.position.top}px`,
      left: `${item.position.left}px`
    }}
  >
    <div style={o2SensorLabelStyle}>{item.label}</div>
    <div style={o2SensorValueStyle}>{item.value.toFixed(1)}</div>
  </div>
);

export const renderBlowerStaticPressure = (item) => (
  <div
    key={item.id}
    style={{
      ...blowerPressureContainerStyle,
      top: `${item.position.top}px`,
      left: `${item.position.left}px`
    }}
  >
    <div style={blowerPressureLabelStyle}>{item.label}</div>
    <div style={blowerPressureValueStyle}>{item.value}</div>
  </div>
);

export const renderAirHeaterVacuum = (item) => (
  <div
    key={item.id}
    style={{
      ...airHeaterVacuumContainerStyle,
      top: `${item.position.top}px`,
      left: `${item.position.left}px`
    }}
  >
    <div style={airHeaterVacuumLabelStyle}>{item.label}</div>
    <div style={airHeaterVacuumValueStyle}>{item.value}</div>
  </div>
);

export const renderSuctionAirTemp = (item) => (
  <div
    key={item.id}
    style={{
      ...suctionAirTempContainerStyle,
      top: `${item.position.top}px`,
      left: `${item.position.left}px`
    }}
  >
    <div style={suctionAirTempLabelStyle}>{item.label}</div>
    <div style={suctionAirTempValueStyle}>{item.value}</div>
  </div>
);


export const renderExhaustBlowerTemp = (item) => (
  <div
    key={item.id}
    style={{
      ...exhaustBlowerTempContainerStyle,
      top: `${item.position.top}px`,
      left: `${item.position.left}px`
    }}
  >
    <div style={exhaustBlowerTempLabelStyle}>{item.label}</div>
    <div style={exhaustBlowerTempValueStyle}>{item.value}</div>
  </div>
);

export const renderLowerZoneTemp = (item) => (
  <div
    key={item.id}
    style={{
      ...lowerZoneTempContainerStyle,
      top: `${item.position.top}px`,
      left: `${item.position.left}px`
    }}
  >
    <div style={lowerZoneTempLabelStyle}>{item.label}</div>
    <div style={lowerZoneTempValueStyle}>{item.value}</div>
  </div>
);

export const renderSteamFuelPressure = (items) => (
  <div style={{
    ...dualPressureContainerStyle,
    top: `${items[0].position.top}px`,
    left: `${items[0].position.left}px`,
    position: 'absolute'
  }}>
    {items.map((item, index) => (
      <div key={item.id} style={dualPressureRowStyle}>
        <div style={dualPressureLabelStyle}>{item.label}</div>
        <div style={dualPressureValueStyle}>{item.value}</div>
      </div>
    ))}
  </div>
);

export const renderGaugeWithBars = (panel, editMode, editValues, handleValueChange) => (
  <div
    key={panel.id}
    style={{
      position: 'absolute',
      top: `${panel.position.top}px`,
      left: `${panel.position.left}px`,
      width: '130px',
      height: '120px',
      padding: '10px',
      backgroundColor: '#ddd',
      border: '2px solid #888',
      borderRadius: '50%',
      textAlign: 'center',
      zIndex: 10
    }}
  >
    <div style={{ color: 'red', fontWeight: 'bold', marginBottom: '5px' }}>
      {panel.title}
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* Зүүн талын тоон утга */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
        {panel.bars.map((bar, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            <div style={{
              width: '15px', backgroundColor: 'red', color: 'white',
              fontSize: '10px', fontWeight: 'bold', textAlign: 'center'
            }}>{bar.label}</div>
            <div style={{
              width: '30px', backgroundColor: 'black', color: 'lime',
              fontSize: '10px', textAlign: 'center'
            }}>
              {editMode ? (
                <input
                  type="number"
                  value={editValues[`${panel.id}_value_${bar.label}`] || bar.value}
                  onChange={(e) => handleValueChange(`${panel.id}_value_${bar.label}`, e.target.value)}
                  style={{ width: '100%', color: 'lime', backgroundColor: 'black', border: 'none' }}
                />
              ) : (
                bar.value
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Баруун талын багана */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '3px' }}>
        {panel.bars.map((bar, index) => {
          const level = editMode
            ? parseFloat(editValues[`${panel.id}_level_${bar.label}`]) || bar.level
            : bar.level;

          return (
            <div key={index} style={{
              width: '10px', height: '60px',
              backgroundColor: 'white', border: '1px solid #333',
              display: 'flex', alignItems: 'flex-end'
            }}>
              <div style={{
                backgroundColor: 'limegreen',
                height: `${level * 100}%`,
                width: '100%'
              }} />
            </div>
          );
        })}
      </div>
    </div>
  </div>
);