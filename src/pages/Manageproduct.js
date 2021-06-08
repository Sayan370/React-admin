import React, { useCallback, useEffect, useState} from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios';
const Manageproduct = () => {

    const initialValue ={title: "",description: "",category: "",image: "" };
    const data = [{ id: null, title: null, description: null, image: null}];

    const [modalOpen, SetModal]=useState(false);
    const [addModalOpen, SetAddModal]=useState(false);
    const [deleteModalOpen, SetDeleteModal]=useState(false);
    const [dataSet, SetData]=useState(initialValue);
    const [dataEditSet, SetEditData]=useState(initialValue);
    const [dataDeleteSet, SetDeleteData]=useState(initialValue);
    const [dataTableSet, SetTableData]=useState(data);
    const [dataTableLoading, SetLoadingTableData]=useState(true);
  
    


    useEffect(() => {
    

      fetch();
    }, []);


    const fetch=async() => {
      const result = await axios("https://wybsite.online/exp_react/viewproduct.php");
      console.log(result);
      SetTableData(result.data);
      SetLoadingTableData(false);
    };

    const editRecord = (row)=>{
    
      SetEditData(row);
    
      
  
       SetModal(true);
  
       
       
       
    } ;

    
  
    const openaddmodal = ()=>{
 
      
  
      SetAddModal(true);
  
       
       
       
    } ;
  
  
   
  
    const deleteRecord =(row)=>{
  
     
       console.log(row);

       SetDeleteData(row);
  
       SetDeleteModal(true);
       
       
    } ;
  
      const handleChange = useCallback((state)=>{ console.log(state);},[]);
  
      const handleChangeAdd = e => {
        SetData({
          ...dataSet,
          [e.target.name]: e.target.value
        });
      };
    
      const handleChangeEdit = e => {
        SetEditData({
          ...dataEditSet,
         
          [e.target.name]: e.target.value
        });
      };
    

  const columns =[
    {
      name: 'Title',
      selector: 'title',
      sortable: true,
    },
    {
      name: 'Description',
      selector: 'description',
      sortable: true,
      right: true,
    },
    {
      name: 'Category',
      selector: 'category',
      sortable: true,
      right: true,
    },{
      cell: row  => { 
      
        return(<><button className="btn btn-primary"  onClick={() => editRecord(row)}><i className="fa fa-edit"></i></button>
    
      <button 
      className="btn btn-danger btn-sm" 
      onClick={() => deleteRecord(row)}>
      <i className="fa fa-trash"></i>
  </button></>)
  },
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const ExpandableComponent =({ data })=>{ 
  
    return (<img src={`data:image/jpeg;base64,${data.image}`} style={{width:"100px"}} alt="" />); 
  
  
  }
  
  const closeModal=()=>{
  
    SetModal(false);
  }
  const closeModal1=()=>{
  
    SetAddModal(false);
  }
  const closeModal2=()=>{
  
    SetDeleteModal(false);
  }

 const handleFormSubmit= async( event )=>{
    event.preventDefault();
    
    
    let formData = new FormData();

    formData.append('title', dataSet.title);
    formData.append('description', dataSet.description);
    formData.append('category', dataSet.category);
formData.append('userpic', dataSet.image);
  
console.log(formData);
    await axios({
      method: 'post',
      url: 'https://wybsite.online/exp_react/addproduct.php',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(response => {
        
      //console.log(response.data);
      fetch();
     
      SetAddModal(false);

      }).catch(err => {
        console.log(err.message);
       
      });
  }

 
 const handledeleteFormSubmit= async( event )=>{
    event.preventDefault();
    
    
    let formData = new FormData();
    console.log(dataDeleteSet.id);

    formData.append('id', dataDeleteSet.id);
    formData.append('title', dataDeleteSet.title);
    formData.append('description', dataDeleteSet.description);
    formData.append('category', dataDeleteSet.category);
formData.append('userpic', dataDeleteSet.image);
  
console.log(formData);
    await axios({
      method: 'post',
      url: 'https://wybsite.online/exp_react/deleteproduct.php',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(response => {
        
      //console.log(response.data);
      fetch();
     
      SetDeleteModal(false);

      }).catch(err => {
        console.log(err.message);
       
      });
  }

 

 const handleEditFormSubmit= async( event )=>{
    event.preventDefault();
    
    console.log(dataEditSet);
    
    let formData = new FormData();

    formData.append('id', dataEditSet.id);
    formData.append('title', dataEditSet.title);
    formData.append('description', dataEditSet.description);
    formData.append('category', dataEditSet.category);
formData.append('userpic', dataEditSet.image);
  
console.log(formData);
    await axios({
      method: 'post',
      url: 'https://wybsite.online/exp_react/editproduct.php',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(response => {
        
      //console.log(response.data);
      fetch();
     
      SetModal(false);

      }).catch(err => {
        console.log(err.message);
       
      });
  }

 

    return (
        <>


<Modal show={modalOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit {dataEditSet.title}</Modal.Title>
        </Modal.Header>
        <form onSubmit={e =>handleEditFormSubmit(e)}>
        <Modal.Body>

      
            <input name="title" value={dataEditSet.title} onChange={handleChangeEdit} className="form-control"  />
            <input name="description" value={dataEditSet.description} onChange={handleChangeEdit} className="form-control"  />
            <input name="category" value={dataEditSet.category} onChange={handleChangeEdit} className="form-control"  />
            <input type="file" name="image" onChange={image=>SetEditData({...dataEditSet,image: image.target.files[0]})} className="form-control"  />
           
           
        
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-secondary" variant="secondary" onClick={closeModal}>
            Close
          </button>
          <button type="submit" className="btn btn-success" variant="primary">
            Save Changes
          </button>
        </Modal.Footer>
        </form>
      </Modal>


<Modal show={addModalOpen} onHide={closeModal1}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <form onSubmit={e =>handleFormSubmit(e)}>
        <Modal.Body>

     
            <input type="text" name="title" onChange={handleChangeAdd} className="form-control"  />
            <textarea name="description"  onChange={handleChangeAdd} className="form-control"></textarea>
            <input type="text" name="category" onChange={handleChangeAdd} className="form-control"  />
            <input type="file" name="image" onChange={image=>SetData({...dataSet,image: image.target.files[0]})} className="form-control"  />
           
            
         
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" variant="secondary" onClick={closeModal1}>
            Close
          </button>
          <button className="btn btn-success" variant="primary" type="submit">
            Save Changes
          </button>
         
        </Modal.Footer>
        </form>
      </Modal>



      <Modal show={deleteModalOpen} className="bs-example-modal-sm" onHide={closeModal2}>
        <Modal.Header closeButton>
          <Modal.Title> Are You Sure Want To Delete This Product {dataDeleteSet.title}</Modal.Title>
        </Modal.Header>
        <form onSubmit={e =>handledeleteFormSubmit(e)}>
      
        <Modal.Footer>
          <button className="btn btn-danger" variant="secondary" onClick={closeModal2}>
            Close
          </button>
          <button className="btn btn-success" variant="primary" type="submit">
            Delete
          </button>
         
        </Modal.Footer>
        </form>
      </Modal>


<div className="content-page">
                <div className="content">
                    
                  
                    <div className="container-fluid">
                        
                       
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box">
                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><Link to="/">Adminox</Link></li>
                                           
                                            <li className="breadcrumb-item active">Manageproduct</li>
                                        </ol>
                                    </div>
                                    <h4 className="page-title">Dashboard</h4>
                                </div>
                            </div>
                        </div>     
                        

                   

                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card-box">
                                    <h4 className="header-title mb-4">Manage Product  <button style={{float:'right'}} className="btn btn-info" onClick={openaddmodal}>Add Product</button></h4>

                                    <div className="text-center">
                                       
                                    <DataTable
          title="Arnold Movies"
          columns={columns}
          data={dataTableSet}
          selectableRows // add for checkbox selection
          onSelectedRowsChange={handleChange}
          responsive
          expandableRows
          expandableRowDisabled={row => row.disabled}
          expandableRowsComponent={<ExpandableComponent />}
         
          theme
          pagination
        subHeader
        highlightOnHover
        persistTableHead
        progressPending={dataTableLoading}
        progressComponent={<div><i className="fa fa-spinner fa-spin fa-2x"></i></div>}
        />
                                       
                                    </div>

                                </div>
                            </div>

                        
                        </div>
                      


                       
                        
                    </div> 

                </div> 

                

               
               <Footer />
               

            </div>
            
        </>
    )
}

export default Manageproduct
