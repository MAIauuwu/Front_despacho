const API_CONFIG = {
  VENTAS_API: '',
  DESPACHOS_API: '',
};

export const ENDPOINTS = {
  GET_VENTAS: `/api/v1/ventas`,
  UPDATE_VENTA: `/api/v1/ventas`,
  
  GET_DESPACHOS: `/api/v1/despachos`,
  CREATE_DESPACHO: `/api/v1/despachos`,
  UPDATE_DESPACHO: `/api/v1/despachos`,
};

export const API_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

export default API_CONFIG;