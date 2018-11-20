const remoteURL = "http://localhost:5002"

export default {

    searchAll() {
        fetch(`${remoteURL}`).then(res => res.json())
            .then(data => {
                this.setState({
                    data: data.items,
                    loading: false
                })
            })
    }
}
