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
  controlPanelInputStyle
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