<template>
    <q-page :style-fn="myTweak" > <q-scroll-area :style="{ height : minHeight }" > <div class="row" >
		<q-timeline class="col-xs-12 col-sm-8 q-pt-md q-pl-md q-pr-sm" :layout="layout" >
			<q-timeline-entry heading :body="lang.experience" />

			<q-timeline-entry
        title     = "laranj app"
				:body     = "lang.backEndWebDeveloper"
				:subtitle = "'15/5/2023 – ' + lang.curren"
			/>

			<q-timeline-entry
        title    = "quadratec soft"
				:body    = "lang.backEndWebDeveloper"
				subtitle = "9/1/2022 – 15/5/2023"
			/>

			<q-timeline-entry
        title    = "Vision Dimension"
				:body    = "lang.backEndWebDeveloper"
				subtitle = "1/8/2021 – 9/1/2022"
			/>

			<q-timeline-entry
        title    = "black squares solutions"
				:body    = "lang.fullStackWebDeveloper"
				subtitle = "1/7/2018 – 1/8/2021"
			/>

			<q-timeline-entry
        title     = "Freelancer"
        :body   = "lang.fullStackWebDeveloper"
				subtitle = "12/3/2016 – 1/7/2018"
			/>

			<q-timeline-entry heading :body="lang.openSourceProjects" />

			<q-timeline-entry
				color    = "orange"
				title    = "laravel Modules Graphql with base Auth"
				body     = "composer create-project harby/laramodulesgraphqlauth laramodulesgraphqlauth"
				subtitle = "[ php , laravel , Modules , Graphql ]"
			/>

			<q-timeline-entry
				color    = "orange"
				title    = "laravel Modules Graphql"
				body     = "composer create-project harby/laramodulesgraphql laramodulesgraphql"
				subtitle = "[ php , laravel , Modules , Graphql ]"
			/>

			<q-timeline-entry
				color    = "orange"
				title    = "laravel Modules"
				body     = "composer create-project harby/laramodules laramodules"
				subtitle = "[ php , laravel , Modules ]"
			/>

			<q-timeline-entry heading :body="lang.PROJECTS" />

			<q-timeline-entry
				:subtitle = "lang.backEndWebDeveloper"
				title     = "e-mawaeed / black squares solutions"
				:body     = "lang.UsedTechnologies + ' : php laravel GraphQL '"
			/>

			<q-timeline-entry
				:subtitle = "lang.backEndWebDeveloper"
				title     = "Quran Academy / black squares solutions"
				:body     = "lang.UsedTechnologies + ' : php laravel GraphQL transferwise '"
			/>

			<q-timeline-entry
				color     = "orange"
				:subtitle = "lang.fullStackWebDeveloper"
				title     = "spreago / black squares solutions"
			>
				{{ lang.UsedTechnologies }} : <br>
				{{ lang.backEnd          }} : [ php    , laravel , GraphQL  ] <br>
				{{ lang.packages         }} : [ ffmpeg , convert  “imagick” ]
			</q-timeline-entry>

			<q-timeline-entry :subtitle="lang.frontEndWebDeveloper" color="secondary">
				<template v-slot:title> <a href="​http://www.quodrah.com">quodrah</a> / black squares solutions  </template>
				{{ lang.UsedTechnologies }} : <br>
				{{ lang.frontEnd         }} : [ css , html , javascript ] <br>
				{{ lang.packages         }} : [ npm , gulp , sass       ]
			</q-timeline-entry>

			<q-timeline-entry :subtitle="lang.frontEndWebDeveloper" color="secondary">
				<template v-slot:title> <a href="http://black-squares.com/ ">black-squares</a> / black squares solutions  </template>
				{{ lang.UsedTechnologies }} : <br>
				{{ lang.frontEnd         }} : [ css , html , javascript ] <br>
				{{ lang.packages         }} : [ npm , gulp , sass       ]
			</q-timeline-entry>

			<q-timeline-entry
				color="orange"
				:subtitle="lang.fullStackWebDeveloper"
				title="movology / black squares solutions"
			>
				{{ lang.UsedTechnologies }} : laravel ( packages ) , vuejs , RESTful api <br>
				{{ lang.packages         }} : [ npm , gulp  , sass       ] <br>
				{{ lang.backEnd          }} : [ php , mysql , composer   ] <br>
				{{ lang.frontEnd         }} : [ css , html  , javascript ]
			</q-timeline-entry>

			<q-timeline-entry
				:subtitle="lang.backEndWebDeveloper"
				title="zari / black squares solutions"
			>
				{{ lang.UsedTechnologies }} : laravel, composer, GraphQL <br>
				{{ lang.backEnd          }} : [ php,  mysql, socket ] <br>
			</q-timeline-entry>

			<q-timeline-entry
				:subtitle="lang.fullStackWebDeveloper"
				:title="'gorila / ' + lang.freelance"
			>
				{{ lang.UsedTechnologies }} : laravel ( packages ) , vuejs , RESTful api <br>
				{{ lang.packages         }} : [ npm , gulp  , sass       ] <br>
				{{ lang.backEnd          }} : [ php , mysql , composer   ] <br>
				{{ lang.frontEnd         }} : [ css , html  , javascript ]
			</q-timeline-entry>

		</q-timeline>
		<div class="col-xs-12 col-sm-4 q-pt-md q-pl-sm q-pr-md">
			<q-card class="my-card q-mb-md">
				<q-item>
					<q-item-section avatar> <q-avatar> <q-img src="~assets/descriptions/shell.png"/> </q-avatar> </q-item-section>
					<q-item-section avatar> <q-avatar> <q-img src="~assets/descriptions/suckless.svg"/> </q-avatar> </q-item-section>
					<q-item-section> <q-item-label v-text="lang.LinuxOperatingSystem" /> </q-item-section>
				</q-item>
				<q-separator/>
				<q-card-actions>
					<a href="https://voidlinux.org"  target="_blank" > <q-chip dense size="xl"> <q-avatar> <q-img src="~assets/descriptions/void.svg"   /> </q-avatar> void   </q-chip> </a>
					<a href="https://archlinux.org"  target="_blank" > <q-chip dense size="xl"> <q-avatar> <q-img src="~assets/descriptions/arch.png"   /> </q-avatar> arch   </q-chip> </a>
					<a href="https://getfedora.org"  target="_blank" > <q-chip dense size="xl"> <q-avatar> <q-img src="~assets/descriptions/fedora.png" /> </q-avatar> Fedora </q-chip> </a>
					<a href="https://www.centos.org" target="_blank" > <q-chip dense size="xl"> <q-avatar> <q-img src="~assets/descriptions/centos.png" /> </q-avatar> Centos </q-chip> </a>
				</q-card-actions>
			</q-card>
			<q-card class="my-card q-mb-md">
				<q-item>
					<q-item-section avatar> <q-avatar> <q-img src="~assets/Packages/devops.png"/> </q-avatar> </q-item-section>
					<q-item-section> <q-item-label v-text="lang.DevOpsPackages" /> </q-item-section>
				</q-item>
				<q-separator/>
				<q-card-actions>
					<a href="https://www.docker.com"  target="_blank" > <q-chip dense size="xl"> <q-avatar> <q-img src="~assets/Packages/docker.png"  /> </q-avatar> Docker  </q-chip> </a>
					<a href="https://www.jenkins.io/" target="_blank" > <q-chip dense size="xl"> <q-avatar> <q-img src="~assets/Packages/Jenkins.svg" /> </q-avatar> jenkins </q-chip> </a>
				</q-card-actions>
			</q-card>
			<q-card class="my-card q-mb-md">
				<q-item>
					<q-item-section avatar> <q-avatar> <q-img src="~assets/languages/programming.png"/> </q-avatar> </q-item-section>
					<q-item-section> <q-item-label v-text="lang.nativeProgramingLanguage" /> </q-item-section>
				</q-item>
				<q-separator/>
				<q-card-actions>
					<a href="https://www.php.net/"          target="_blank" > <q-chip dense size="xl"> <q-avatar> <q-img src="~assets/languages/php.png"        /> </q-avatar> php        </q-chip> </a>
					<a href="https://www.javascript.com"    target="_blank" > <q-chip dense size="xl"> <q-avatar> <q-img src="~assets/languages/javascript.png" /> </q-avatar> javascript </q-chip> </a>
				</q-card-actions>
			</q-card>
			<q-card class="my-card q-mb-md">
				<q-item>
					<q-item-section avatar> <q-avatar> <q-img src="~assets/frameworks/frameworks.png"/> </q-avatar> </q-item-section>
					<q-item-section> <q-item-label v-text="lang.frameworks" /> </q-item-section>
				</q-item>
				<q-separator/>
				<q-card-actions>
					<a href="https://laravel.com/"                        target="_blank" > <q-chip dense size="xl"> <q-avatar> <q-img src="~assets/frameworks/Laravel.svg"  /> </q-avatar> Php    with Laravel </q-chip> </a>
					<a href="https://adonisjs.com/"                       target="_blank" > <q-chip dense size="xl"> <q-avatar> <q-img src="~assets/frameworks/adonisjs.png" /> </q-avatar> Nodejs with Adonis  </q-chip> </a>
				</q-card-actions>
			</q-card>
			<q-card class="my-card q-mb-md">
				<q-item>
					<q-item-section avatar> <q-avatar > <q-img style="width:20px" src="~assets/databases/databases.png"/> </q-avatar> </q-item-section>
					<q-item-section> <q-item-label v-text="lang.databases" /> </q-item-section>
				</q-item>
				<q-separator/>
				<q-card-actions>
					<a href="https://www.mysql.com/"       target="_blank" > <q-chip dense size="xl"> <q-avatar> <q-img src="~assets/databases/mysql.png"       /> </q-avatar> MySQL       </q-chip> </a>
					<a href="https://firebase.google.com/" target="_blank" > <q-chip dense size="xl"> <q-avatar> <q-img src="~assets/databases/firebase.svg"    /> </q-avatar> Firebase    </q-chip> </a>
					<a href="https://www.mongodb.com/"     target="_blank" > <q-chip dense size="xl"> <q-avatar> <q-img src="~assets/databases/mongodb.png"     /> </q-avatar> MongoDb     </q-chip> </a>
					<a href="https://www.postgresql.org/"  target="_blank" > <q-chip dense size="xl"> <q-avatar> <q-img src="~assets/databases/PostgresSQL.png" /> </q-avatar> PostgresSQL </q-chip> </a>
				</q-card-actions>
			</q-card>
			<q-card class="my-card q-mb-md">
				<q-item>
					<q-item-section avatar> <q-avatar > <q-img src="~assets/descriptions/shell.png"/> </q-avatar> </q-item-section>
					<q-item-section> <q-item-label v-text="lang.packages" /> </q-item-section>
				</q-item>
				<q-separator/>
				<q-card-actions>
					<a href="https://git-scm.com/"                     target="_blank" > <q-chip dense size="xl"> <q-avatar> <q-img src="~assets/Packages/git.png"        /> </q-avatar> Git      </q-chip> </a>
					<a href="https://getcomposer.org/"                 target="_blank" > <q-chip dense size="xl"> <q-avatar> <q-img src="~assets/Packages/composer.png"   /> </q-avatar> Composer </q-chip> </a>
					<a href="https://www.npmjs.com/"                   target="_blank" > <q-chip dense size="xl"> <q-avatar> <q-img src="~assets/Packages/Npm.svg"        /> </q-avatar> Npm      </q-chip> </a>
					<a href="https://yarnpkg.com/"                     target="_blank" > <q-chip dense size="xl"> <q-avatar> <q-img src="~assets/Packages/yarn.png"       /> </q-avatar> Yarn     </q-chip> </a>
					<a href="https://wiki.archlinux.org/title/pacman"  target="_blank" > <q-chip dense size="xl"> <q-avatar> <q-img src="~assets/descriptions/arch.png"   /> </q-avatar> Pacman   </q-chip> </a>
					<a href="https://access.redhat.com/components/yum" target="_blank" > <q-chip dense size="xl"> <q-avatar> <q-img src="~assets/descriptions/fedora.png" /> </q-avatar> Yum      </q-chip> </a>
					<a href="https://www.ffmpeg.org/"                  target="_blank" > <q-chip dense size="xl"> <q-avatar> <q-img src="~assets/Packages/FFmpeg.svg"     /> </q-avatar> Ffmpeg   </q-chip> </a>
				</q-card-actions>
			</q-card>
			<q-card class="my-card q-mb-md">
				<q-item>
					<q-item-section avatar> <q-avatar > <q-img src="~assets/Packages/unittest.png"/> </q-avatar> </q-item-section>
					<q-item-section> <q-item-label v-text="lang.UnitTesting" /> </q-item-section>
				</q-item>
				<q-separator/>
				<q-card-actions>
					<a href="https://phpunit.de/" target="_blank" > <q-chip dense size="xl"> <q-avatar> <q-img src="~assets/Packages/phpunit.png" /> </q-avatar> Phpunit </q-chip> </a>
					<a href="https://jestjs.io/"  target="_blank" > <q-chip dense size="xl"> <q-avatar> <q-img src="~assets/Packages/jest.png"    /> </q-avatar> Jest    </q-chip> </a>
				</q-card-actions>
			</q-card>
			<q-card class="my-card q-mb-md">
				<q-item>
					<q-item-section avatar> <q-avatar > <q-img src="~assets/APIs/api.png"/> </q-avatar> </q-item-section>
					<q-item-section> <q-item-label v-text="'third-party APIs'" /> </q-item-section>
				</q-item>
				<q-separator/>
				<q-card-actions>
					<a href="https://developers.google.com/oauthplayground/" target="_blank" > <q-chip dense size="xl"> <q-avatar> <q-img src="~assets/APIs/Google_Authenticator.png" /> </q-avatar> Google       </q-chip> </a>
					<a href="https://developers.facebook.com/"               target="_blank" > <q-chip dense size="xl"> <q-avatar> <q-img src="~assets/APIs/facebook-developer.png"   /> </q-avatar> Facebook     </q-chip> </a>
					<a href="https://developer.paypal.com/"                  target="_blank" > <q-chip dense size="xl"> <q-avatar> <q-img src="~assets/APIs/paypal.png"               /> </q-avatar> PayPal       </q-chip> </a>
					<a href="https://stripe.com/"                            target="_blank" > <q-chip dense size="xl"> <q-avatar> <q-img src="~assets/APIs/stripe.png"               /> </q-avatar> Stripe       </q-chip> </a>
					<a href="https://wise.com/"                              target="_blank" > <q-chip dense size="xl"> <q-avatar> <q-img src="~assets/APIs/TransferWise.svg"         /> </q-avatar> Transferwise </q-chip> </a>
				</q-card-actions>
			</q-card>
			<q-card class="my-card q-mb-md">
				<q-item>
					<q-item-section avatar> <q-avatar > <q-img src="~assets/APIs/www.png"/> </q-avatar> </q-item-section>
					<q-item-section> <q-item-label v-text="'Web protocols'" /> </q-item-section>
				</q-item>
				<q-separator/>
				<q-card-actions>
					<q-chip dense size="xl"> Http\s </q-chip>
					<q-chip dense size="xl"> Ws  \s </q-chip>
					<q-chip dense size="xl"> Ftp \s </q-chip>
					<q-chip dense size="xl"> Ssh    </q-chip>
					<q-chip dense size="xl"> Ssl    </q-chip>
				</q-card-actions>
			</q-card>
			<q-card class="my-card q-mb-md">
				<q-item>
					<q-item-section avatar> <q-avatar > <q-img style="width:25px" src="~assets/Technical-Skills.png"/> </q-avatar> </q-item-section>
					<q-item-section> <q-item-label v-text="'technical skills'" /> </q-item-section>
				</q-item>
				<q-separator/>
				<q-card-actions> <q-list separator>
					<q-item v-for="( skil , key ) in lang.skils" > <q-item-section v-text="skil"/> </q-item>
				</q-list> </q-card-actions>
			</q-card>
		</div>
	</div> </q-scroll-area> </q-page>
</template>

<script>

import { defineComponent } from 'vue'    ;

export default defineComponent({
	name       : 'PageIndex',
	methods    : {
		myTweak (offset) {
			this.minHeight = offset ? `calc(100vh - ${offset}px)` : '100vh' ;
			return { minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh' }
		}
	},
	computed   : {
		layout ( ) { return this.$q.screen.lt.sm ? 'dense' : ( this.$q.screen.lt.md ? 'comfortable' : 'loose' ) },
        lang   ( ) { return this.$q.lang.Index },
    },
    data( ) { return {
		minHeight : 0
	} },
});
</script>
