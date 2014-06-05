Portfolio.Views.UserView = Backbone.View.extend({
    
    renderProfile: function(){
        var $img = $(".user-img");
        var $user_name = $(".user-name");
        var $career = $(".user-career");
        var $second_career = $(".user-second-career");
        var $biography = $(".user-biography");
        var $location = $(".user-location");
        var $mobile = $(".user-mobile");
        var $email = $(".user-email");
        var $twitter = $(".user-twitter");
        var $github = $(".user-github");
        var $linkedin = $(".user-linkedin");
        
        // document title
        document.title = this.model.get("name");
        
        $img.attr("src", this.model.get("avatar"));
        $user_name.text(this.model.get("name"));
        $career.text(this.model.get("career"));
        $second_career.text(this.model.get("second_career"));
        $biography.html(this.model.get("biography"));
        $location.text(this.model.get("location"));
        $mobile.text(this.model.get("mobile"));
        $email.text(this.model.get("email"));
        $twitter.attr("href", this.model.get("twitter"));
        $linkedin.attr("href", this.model.get("linkedin"));
        $github.attr("href", this.model.get("github"));
    },
    
    renderContact: function(){
        var $img = $(".user-img");
        var $user_name = $(".user-name");
        var $location = $(".user-location");
        var $mobile = $(".user-mobile");
        var $email = $(".user-email");
        
        $img.attr("src", this.model.get("avatar"));
        $user_name.text(this.model.get("name"));
        $location.text(this.model.get("location"));
        $mobile.text(this.model.get("mobile"));
        $email.text(this.model.get("email"));
    }
});