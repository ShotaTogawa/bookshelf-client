import React, { Component } from "react";
import { Modal, Button, Icon } from "semantic-ui-react";
import { api } from "../../../../../api";
import { connect } from "react-redux";
import setAuthToken from "../../../../../utils/setAuthToken";
import history from "../../../../../history";

class ImageModal extends Component {
  state = {
    file: null,
    authorized: ["image/jpeg", "image/png"],
    modal: false,
    imageUrl: ""
  };

  onFileChange = event => {
    this.setState({ file: event.target.files[0] });
  };

  updateS3Bucket = async uploadConfig => {
    delete api.defaults.headers.common["Authorization"];
    await api.put(uploadConfig.data.url, this.state.file, {
      headers: {
        "Content-Type": this.state.file.type
      }
    });
  };

  uploadFile = async event => {
    event.preventDefault();
    const { userId, bookId } = this.props;

    if (bookId) {
      const uploadConfig = await api.get(`/api/upload/${userId}/${bookId}`);
      await this.updateS3Bucket(uploadConfig);
      try {
        const user = JSON.parse(localStorage.user);
        await setAuthToken(user.token);
        await api.put(`/api/upload/${userId}/${bookId}`, {
          imageUrl: uploadConfig.data.key
        });
        history.push("/books");
      } catch (e) {
        console.log(e);
      }
    } else {
      const uploadConfig = await api.get(`/api/upload/${userId}`);
      await this.updateS3Bucket(uploadConfig);
      try {
        const user = JSON.parse(localStorage.user);
        await setAuthToken(user.token);
        await api.put(`/api/upload/${userId}`, {
          avatar: uploadConfig.data.key
        });
        history.push("/user");
      } catch (e) {
        console.log(e);
      }
    }
  };

  clearFile = () => this.setState({ file: null });

  render() {
    const { modal, closeModal } = this.props;
    return (
      <Modal basic open={modal} onClose={closeModal}>
        <Modal.Header>Select an Image File</Modal.Header>
        <Modal.Content>
          <input type="file" accept="image/*" onChange={this.onFileChange} />
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.uploadFile} color="green" inverted>
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
