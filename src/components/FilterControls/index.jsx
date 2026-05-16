import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'

/**
 * FilterControls component - Centralized filter management
 * @param {string} filterMode - Current filter mode ('OR' or 'AND')
 * @param {function} onModeChange - Callback when mode changes
 * @param {number} activeCount - Number of active filters
 * @param {function} onClearAll - Callback to clear all filters
 * @param {function} onSelectAll - Callback to select all tags
 * @param {function} onDeselectAll - Callback to deselect all tags
 * @param {boolean} hasSelection - Whether any tags are selected
 */
const FilterControls = ({
  filterMode,
  onModeChange,
  activeCount,
  onClearAll,
  onSelectAll,
  onDeselectAll,
  hasSelection,
}) => {
  return (
    <div className="filter-controls">
      <button
        className={`filter-mode-toggle ${filterMode === 'OR' ? 'active' : ''}`}
        onClick={() => onModeChange('OR')}
        title="Mostrar alabanzas con CUALQUIER etiqueta seleccionada"
        aria-label="Modo OR - cualquier etiqueta"
      >
        <i className="bi bi-union me-1"></i>
        OR
      </button>

      <button
        className={`filter-mode-toggle ${filterMode === 'AND' ? 'active' : ''}`}
        onClick={() => onModeChange('AND')}
        title="Mostrar alabanzas con TODAS las etiquetas seleccionadas"
        aria-label="Modo AND - todas las etiquetas"
      >
        <i className="bi bi-intersect me-1"></i>
        AND
      </button>

      <div className="filter-divider"></div>

      <button
        className="btn-filter-action"
        onClick={onSelectAll}
        title="Select all tags"
      >
        <i className="bi bi-check-all me-1"></i>
        Select All
      </button>

      <button
        className="btn-filter-action"
        onClick={onDeselectAll}
        disabled={!hasSelection}
        title="Deselect all tags"
      >
        <i className="bi bi-x me-1"></i>
        Deselect All
      </button>

      {activeCount > 0 && (
        <button
          className="d-flex gap-2 border-0 align-items-center btn btn-danger"
          onClick={onClearAll}
          title="Clear search and filters"
        >
          <i className="bi bi-trash me-1"></i>
          Clear All
          <span className="filter-badge">{activeCount}</span>
        </button>
      )}
    </div>
  )
}

export default FilterControls
