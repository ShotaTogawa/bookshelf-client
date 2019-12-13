import React, { Component } from "react";
// import mime from "mime-types";
import { Modal, Input, Button, Icon } from "semantic-ui-react";
// import uuidv4 from "uuidv4";
// import { uploadFile } from "../../../../../actions";
import { connect } from "react-redux";

class ImageModal extends Component {
  state = {
    file: null,
    authorized: ["image/jpeg", "image/png"],
    modal: false,
    imageUrl: ""
  };

  // addFile = event => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     this.setState({ file });
  //   }
  // };

  // sendFile = async () => {
  //   const { file } = this.state;
  //   const { closeModal } = this.props;
  //   if (file !== null) {
  //     if (this.isAuthorized(file.name)) {
  //       const metadata = { contentType: mime.lookup(file.name) };
  //       await this.uploadFile(file, metadata);
  //       await closeModal();
  //       await this.clearFile();
  //     }
  //   }
  // };

  onFileChange = event => {
    this.setState({ file: event.target.files[0] });
  };

  clearFile = () => this.setState({ file: null });

  render() {
    const { modal, closeModal } = this.props;
    console.log(this.state.file);
    return (
      <Modal basic open={modal} onClose={closeModal}>
        <Modal.Header>Select an Image File</Modal.Header>
        <Modal.Content>
          <input type="file" accept="image/*" onChange={this.onFileChange} />
          {/* <Input
            onChange={this.addFile}
            fluid
            label="File types: jpg, png"
            name="file"
            type="file"
          /> */}
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.sendFile} color="green" inverted>
            <Icon name="checkmark" /> Send
          </Button>
          <Button color="red" inverted onClick={closeModal}>
            <Icon name="remove" /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default connect(null, {})(ImageModal);
