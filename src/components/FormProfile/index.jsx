import React from 'react';

const FormProfile = () => {
  return (
    <form>
    <div class="form-group">
      <label>Pseudo</label>
      <input type="text" class="form-control" id="pseudo" placeholder="Enter Pseudo"/>    
    </div>
    <div class="form-group">
      <label>Description</label>
      <textarea class="form-control" id="profileDescription" rows="5" placeholder="Enter your description here"></textarea>
    </div>
    <input type="submit" value="Submit" />
    </form>
  )
}


export default FormProfile