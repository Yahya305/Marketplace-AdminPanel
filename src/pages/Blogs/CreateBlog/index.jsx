import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function index() {
  const [modalShow, setModalShow] = useState(false);
  const [postType, setPostType] = useState("");
  const editorRef = useRef(null);
  const navigate=useNavigate();

  const articlesBtn =useRef();
  const changelogBtn =useRef();

  const handleRadio=(e)=>{
    if (e.target.classList.contains("btn-primary")) {
      return
    }
    if (articlesBtn.current.classList.contains("btn-primary")) {
      articlesBtn.current.classList.remove("btn-primary")
      articlesBtn.current.classList.add("btn-outline-primary")
      setPostType("changelog")
    }
    else{
      changelogBtn.current.classList.remove("btn-primary")
      changelogBtn.current.classList.add("btn-outline-primary")
      setPostType("articles")
    }
    e.target.classList.add("btn-primary")
    e.target.classList.remove("btn-outline-primary")
  }

  const handleEditorChange = (content) => {
    // console.log("Content: ",content)
    // console.log("Fired!",content, isButtonDisabled)
    // console.log(`<h1 style="text-align: center;">Blog Title</h1><p>Whats on your mind?&nbsp;</p>`==='<h1 style="text-align: center;">Blog Title</h1><p>Whats on your mind?&nbsp;</p>')
  //   setIsButtonDisabled(
  //     content ===
  //       `<h1 style="text-align: center;">Blog Title</h1>
  // <p>Whats on your mind?&nbsp;</p>`
  //   );
  };
  const handlePost=()=>{
    console.log(editorRef.current.getContent())
    setModalShow(true)
  }
  const handleConfirmType =()=>{
    setModalShow(false)
  }

  return (
    <div>
      <Editor
        apiKey={import.meta.env.VITE_REACT_BLOG_API_KEY}
        onEditorChange={handleEditorChange}
        onInit={(evt, editor) => (editorRef.current = editor)}
        // initialValue={
        //   "Initial Val"
        // }
        // `<h1 style='text-align: center;'>Blog Title</h1><p>Whats on your mind?&nbsp;</p>`
        init={{
          height: 500,
          menubar: false,
          placeholder: `Type your content here...`,
          // init_instance_callback: function (editor) {
          //   document.getElementById("loading-gif").style.display = "none";
          // },
          plugins: [
            "advlist",
            "autolink",
            "emoticons",
            "image",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "codesample",
            "wordcount",
          ],
          codesample_languages: [
            { text: "HTML/XML", value: "markup" },
            { text: "JavaScript", value: "javascript" },
            { text: "CSS", value: "css" },
            { text: "PHP", value: "php" },
            { text: "Ruby", value: "ruby" },
            { text: "Python", value: "python" },
            { text: "Java", value: "java" },
            { text: "C", value: "c" },
            { text: "C#", value: "csharp" },
            { text: "C++", value: "cpp" },
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "emoticons | image | codesample",
          toolbar_mode: "floating",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <div className="d-flex justify-content-end p-3 gap-2">
        <button className="btn btn-secondary" onClick={()=>navigate(-1)}>Discard</button>
        <button className="btn" onClick={handlePost} style={{backgroundColor:"rgb(255 165 30)",color:"white"}}>Post</button>
      </div>
      <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Confirm Post Type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Where do you want to post this blog?</h5>
        <div className="d-flex gap-3 justify-content-center">
          <button ref={articlesBtn} className="btn btn-outline-primary" onClick={(e)=>handleRadio(e)}>Articles</button>
          <button ref={changelogBtn} className="btn btn-outline-primary" onClick={(e)=>handleRadio(e)}>Changelog</button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleConfirmType} >Confirm</Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
}
