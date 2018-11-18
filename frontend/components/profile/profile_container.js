import { edit } from '../../util/user_api_util';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  edit: user => dispatch(edit(user))
});
