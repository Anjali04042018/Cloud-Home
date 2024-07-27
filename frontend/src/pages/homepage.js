import { useEffect,useRef, useState } from "react";
import Navbar from "../components/navbar";
import useCreateFolder from "../hooks/useCreateFolder";
import useGetFileFolders from "../hooks/useGetFileFolders";
import useUploadFile from "../hooks/useUploadFile";

const HomePage = () => {
    const [newFolder, setNewFolder] = useState("");
    const inputRef = useRef(null);
    const [showCreateFolder, setShowCreateFolder] = useState(false);
    const {createFolder} = useCreateFolder();
    const [folderStructure, setFolderStructure] = useState([{_id:null, name:"Cloud Home"}]);
    const {getFileFolders, fileFolders} = useGetFileFolders();

    const parentFolder = folderStructure[folderStructure.length -1];

    const handleDoubleClick = (elem) =>{
        if(elem.type == "folder"){
      setFolderStructure([...folderStructure,elem]);
      
        }else{
            window.open(elem.link);
        }
    }

    const handleAllowCreateFolder = () =>{
        setShowCreateFolder(true);
    }

    const handleCreateFolder = async () =>{
        if(newFolder.length > 0){

           await createFolder({
            name : newFolder, 
            parentId:parentFolder._id
        });
           getFileFolders(parentFolder._id);
           setShowCreateFolder(false);
        }
    };

    useEffect(() =>{
        getFileFolders(parentFolder._id);
    },[folderStructure]);

    const handleBackClick = (clickIdx) =>{
        const newFolderStructure = folderStructure.filter((elem,idx) => idx <= clickIdx);
        setFolderStructure(newFolderStructure);
    }
    const {isUploadAllowed,uploadFile} = useUploadFile();
    const handleFileUpload = async (e) =>{
        if (isUploadAllowed) {	
            const file = e.target.files;
           await uploadFile({
                file:file[0], 
                parentId:parentFolder._id,
        });
        getFileFolders(parentFolder._id)
        } else {
            alert("Uploading is already in progress. Please wait...");
        }
 
    }
    return( 
        <div>
            <Navbar/>
            <div className="homepage-main-container">
                <div className="homepage-wrapper">
                <h1>Welcome to cloud Home</h1>
                <button onClick={handleAllowCreateFolder}>Create Folder</button>
                {/* <button>Upload File</button> */}
                <input  ref={inputRef} type="file" onChange={handleFileUpload} />
                <ul style={{display:"flex", padding:"24px",gap:"24px"}}>
                    {/* <li>Cloud Home</li> */}
                    {folderStructure.flatMap((elem,idx) =>{
                        if(elem.name) return <li onClick={()=>handleBackClick(idx)}>{elem.name}</li>;
                        else return null;
                    })}
            
                </ul>
                <div>
                    {showCreateFolder && (
                        <div className="create-folder">
                            <input className="folder-name" placeholder="Please enter folder name" value={newFolder} onChange={(e) =>setNewFolder(e.target.value)}  />
                            <button className="action-btn" onClick={handleCreateFolder}>Create</button>
                            <button className="action-btn" onClick={()=>setShowCreateFolder(false)}>Cancel</button>
                         </div>   
                    )}
                </div>
                <div  className="folder-container">
                    {fileFolders.map((elem) =>{
                        return <div style={{
                            backgroundColor: "Yellow",
                            border:"1px solid gray",
                            borderRadius:"8px",
                            width:"80%",
                            padding:"8px 16px",
                            margin:"8px 16px",
                            
                        }}
                        onDoubleClick ={() => {handleDoubleClick(elem)}}>

                           <p> {elem.name}</p>
                            </div>
                    })}
                </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
