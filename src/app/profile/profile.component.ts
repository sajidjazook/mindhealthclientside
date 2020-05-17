import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/services/users.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    public name: string;
    public rewards: Array<any>;
    public rewardCount: number;
    public isvisible: number = 3;

    emailhard = [
        {
            code: '',

        },
    ];
    
    constructor(private usersService: UsersService, private router: Router) { }

    ngOnInit() {
        if (localStorage.getItem("user") != null) {
            const user = JSON.parse(localStorage.getItem("user"))
            console.log(user);
            this.name = user.displayName
            this.usersService.getUser(user.uid).subscribe(data => {
                console.log(data)
                if (data.rewards && data.rewards.length > 0) {
                    this.rewards = data.rewards
                    this.rewardCount = data.rewards.length
                }
            })
        }


    }

    rewardButton(){

        if(this.rewardCount == 10)
        {
            this.isvisible = 1;
        }
        else{
            this.isvisible = 3;
        }
    }
    claimReward() {
        this.router.navigateByUrl("/Congratulations");
      }

    // verifyPassword(code) {
    //     debugger;
    //     console.log(code)
    //     if (code == '10') {
    //         this.isvisible = 1

    //     } else {
    //         this.isvisible = 3;
    //     }
    // }

    getReward(){

    }
    


    

}
