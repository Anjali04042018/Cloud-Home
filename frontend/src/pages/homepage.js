import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import useCreateFolder from "../hooks/useCreateFolder";
import useGetFileFolders from "../hooks/useGetFileFolders";

const HomePage = () => {
    const [newFolder, setNewFolder] = useState("");
    const [showCreateFolder, setShowCreateFolder] = useState(false);
    const {createFolder} = useCreateFolder();
    const [folderStructure, setFolderStructure] = useState([{_id:null}]);
    const {getFileFolders, fileFolders} = useGetFileFolders();

    const parentFolder = folderStructure[folderStructure.length -1];

    const handleDoubleClick = (elem) =>{
        setFolderStructure([...folderStructure,elem]);
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
    
    return( 
        <div>
            <Navbar/>
            <div className="homepage-main-container">
                <h3>Welcome to cloud Home</h3>
                <button onClick={handleAllowCreateFolder}>Create Folder</button>
                <button>Upload File</button>
                <h4>Cloud Home</h4>
                <div>
                    {showCreateFolder && (
                        <div>
                            <input value={newFolder} onChange={(e) =>setNewFolder(e.target.value)}/>
                            <button onClick={handleCreateFolder}>Create</button>
                            <button onClick={()=>setShowCreateFolder(false)}>Cancel</button>
                         </div>   
                    )}
                </div>
                <div>
                    {fileFolders.map((elem) =>{
                        return <div style={{
                            backgroundColor: "Yellow",
                            border:"1px solid gray",
                            borderRadius:"8px",
                            width:"fit-content",
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
    );
};

export default HomePage;