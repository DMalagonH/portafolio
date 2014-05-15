Portfolio.Views.UserView = Backbone.View.extend({
    
    renderProfile: function(){
        var $img = $(".img-user");
        var $user_name = $(".name-user");
        var $career = $(".career-user");
        var $second_career = $(".second-career-user");
        var $biography = $(".user-biography");
        var $twitter = $(".twitter-user");
        var $github = $(".github-user");
        var $linkedin = $(".linkedin-user");
        
        $img.attr("src", this.model.get("avatar"));
        $user_name.text(this.model.get("name"));
        $career.text(this.model.get("career"));
        $second_career.text(this.model.get("second_career"));
        $biography.html(this.model.get("biography"));
        $twitter.attr("href", this.model.get("twitter"));
        $linkedin.attr("href", this.model.get("linkedin"));
        $github.attr("href", this.model.get("github"));
    }
});