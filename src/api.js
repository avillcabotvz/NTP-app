// Ovo idealno strpas u neki config file al nisam ti htio komplicirat
const apiRoot = 'http://localhost:2000';

function getFullPath(path) {
  // Remove "/" from beggining if present.
  // Otherwise we can end up with multiple "/" at beginning
  const cleanPath = path.replace(/^\/+/, '');

  return `${apiRoot}/${cleanPath}`;
}

async function maybeDecodeJSON(response) {
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    // If server says the content type is JSON, then decode it like JSON
    return await response.json();
  } else {
    // Otherwise don't!
    console.warn(`Got non-JSON response from API: `, response.text());
    return response.text();
  }
}

// GET, DELETE, POST, PATCH, PUT are literally the same logic, just different method.
// They just call this and pass a different method parameter and the body is optional
async function doRequest(method, path, postData = null) {
  const body = postData ? JSON.stringify(postData) : null;
  const headers = postData ? { 'Content-Type': 'application/json' } : {};

  const response = await fetch(
    getFullPath(path),
    { method, body, headers }
  );

  return maybeDecodeJSON(response);
}

// These are all async, although no async keyword
// It's because they return the Promise from doRequest
export const apiGet = (path) => doRequest('GET', path);
export const apiDelete = (path) => doRequest('DELETE', path);
export const apiPost = (path, body) => doRequest('POST', path, body);
export const apiPatch = (path, body) => doRequest('PATCH', path, body);
export const apiPut = (path, body) => doRequest('PUT', path, body);
